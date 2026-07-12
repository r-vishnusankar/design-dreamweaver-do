#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../..");
const templateDir = join(root, "apps/invitations/_template");
const invitationsDir = join(root, "apps/invitations");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--slug") args.slug = argv[++i];
    if (argv[i] === "--type") args.type = argv[++i];
    if (argv[i] === "--tier") args.tier = argv[++i];
    if (argv[i] === "--names") args.names = argv[++i];
    if (argv[i] === "--title") args.title = argv[++i];
  }
  return args;
}

const { slug, type = "wedding", tier = "essential", names, title } = parseArgs(process.argv.slice(2));

if (!slug) {
  console.log(`Usage: npm run create-invitation -- --slug ram-sitha [--type wedding] [--tier essential|signature|atelier] [--names "Ram & Sitha"] [--title "The Wedding of Ram & Sitha"]`);
  process.exit(1);
}

const targetDir = join(invitationsDir, slug);
if (existsSync(targetDir)) {
  console.error(`Invitation "${slug}" already exists at ${targetDir}`);
  process.exit(1);
}

cpSync(templateDir, targetDir, { recursive: true });

const displayTitle = title ?? `The ${type.replace(/-/g, " ")} of ${names ?? slug.replace(/-/g, " & ")}`;
const configPath = join(targetDir, "src/invitation.config.ts");
let config = readFileSync(configPath, "utf8");
config = config
  .replaceAll("__SLUG__", slug)
  .replaceAll("__NAMES__", names ?? slug.replace(/-/g, " & "))
  .replaceAll("__DISPLAY_TITLE__", displayTitle)
  .replaceAll("__EVENT_DATE__", new Date(Date.now() + 90 * 86400000).toISOString())
  .replaceAll("__VENUE_NAME__", "Venue Name")
  .replaceAll("__VENUE_LOCATION__", "City, Country")
  .replaceAll('"packageTier": "essential"', `"packageTier": "${tier}"`);
writeFileSync(configPath, config);

const pkgPath = join(targetDir, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.name = `@invitations/${slug}`;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`Created invitation app: apps/invitations/${slug}`);
console.log(`  dev:   npm run dev -w @invitations/${slug}`);
console.log(`  build: npm run build -w @invitations/${slug}`);
console.log(`  deploy dist/ to Netlify site: tvi-${slug}`);

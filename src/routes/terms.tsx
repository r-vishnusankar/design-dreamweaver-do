import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalDocument } from "@/components/legal-document";
import { BRAND_EMAIL, BRAND_NAME } from "@/lib/site-config";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${BRAND_NAME}` },
      {
        name: "description",
        content: `Terms governing ${BRAND_NAME} digital invitation packages, payments, revisions, hosting, and intellectual property.`,
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalDocument eyebrow="Legal" title="Terms & Conditions" updated="12 July 2026">
      <section>
        <h2>1. Agreement</h2>
        <p>
          These Terms & Conditions (“Terms”) govern your use of the {BRAND_NAME} website and the
          purchase of our digital invitation websites and related services (“Services”). By
          submitting an inquiry, confirming a package, making a payment, or using our website, you
          agree to these Terms.
        </p>
        <p>
          If you are ordering on behalf of a couple, family, or organisation, you confirm you are
          authorised to bind that party. Please also read our{" "}
          <Link to="/privacy">Privacy Policy</Link>, which explains how we handle personal data.
        </p>
      </section>

      <section>
        <h2>2. Who we are</h2>
        <p>
          {BRAND_NAME} designs and delivers digital invitation experiences primarily for weddings
          and celebrations. Contact: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>3. Services and packages</h2>
        <p>
          Package names, features, and prices shown on our website (including Essential, Signature,
          Atelier, and Custom) describe typical offerings and may be updated from time to time.
          Your binding scope is what we confirm in writing (email or written quote) after your
          inquiry.
        </p>
        <h3>3.1 What we deliver</h3>
        <p>Depending on the confirmed package, Services may include:</p>
        <ul>
          <li>A curated or custom invitation website</li>
          <li>Event details, countdown, venue information and maps</li>
          <li>Private shareable link and WhatsApp / social share</li>
          <li>Custom domain, RSVP, itinerary, music, QR code, albums, live embeds, or other listed features</li>
        </ul>
        <h3>3.2 Samples and portfolio</h3>
        <p>
          Live samples and portfolio demos are illustrative only. They may be watermarked, use
          fictional content, and are not included in a purchase unless expressly agreed.
        </p>
      </section>

      <section>
        <h2>4. Ordering process</h2>
        <ol className="list-decimal pl-5 space-y-2 mb-3">
          <li>You submit an inquiry with event and package preferences.</li>
          <li>We confirm feasibility, timeline, inclusions, and price in writing.</li>
          <li>Work begins after the required payment or deposit is received (see Section 5).</li>
          <li>You provide accurate content, photos, and approvals within agreed timelines.</li>
          <li>We deliver drafts, apply included revisions, and publish the final invitation.</li>
        </ol>
        <p>
          Delays in providing content, feedback, or domain access may extend delivery dates. We are
          not responsible for missed event deadlines caused by late client inputs.
        </p>
      </section>

      <section>
        <h2>5. Pricing, taxes, and payment</h2>
        <ul>
          <li>
            Prices are generally listed in Indian Rupees (INR) unless we quote another currency.
          </li>
          <li>
            Applicable taxes (including GST where required) may be added as stated on the invoice.
          </li>
          <li>
            Third-party costs — such as domain registration, premium fonts/music licences, or paid
            integrations — may be charged separately unless included in your confirmed quote.
          </li>
          <li>
            Payment is due as specified on the invoice (often full prepayment for standard packages,
            or deposit + balance for larger/custom work).
          </li>
          <li>
            We may pause or withhold delivery if invoices remain unpaid.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Revisions</h2>
        <p>
          Each package includes the number of revision rounds stated in your confirmation (for
          example, Signature typically includes two rounds). A “round” means a bundled set of
          feedback applied together, not unlimited single-item changes over an open-ended period.
        </p>
        <ul>
          <li>Revision rounds cover reasonable edits to layout, wording, colours, and assets within the agreed concept.</li>
          <li>
            New concepts, additional pages/events, major redesigns, or features outside the package
            are out of scope and quoted separately.
          </li>
          <li>
            Feedback should be consolidated and sent through the agreed channel to avoid conflicting
            instructions.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Client content and accuracy</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Accuracy of names, dates, times, venues, travel details, and RSVP options</li>
          <li>
            Having rights to use all photos, videos, logos, music, and text you supply
          </li>
          <li>
            Ensuring guest-facing wording complies with applicable law and does not infringe others’
            rights
          </li>
        </ul>
        <p>
          We may lightly proof for obvious typos, but final accuracy rests with your written
          approval before go-live. Changes requested after final publication may incur additional
          fees.
        </p>
      </section>

      <section>
        <h2>8. Intellectual property</h2>
        <h3>8.1 Our materials</h3>
        <p>
          Templates, code, design systems, sample sites, branding for {BRAND_NAME}, and our
          proprietary tools remain our intellectual property. Purchasing a package grants you a
          limited licence to use the finished invitation for your event communications, not to
          resell, redistribute, or create competing template products from our work.
        </p>
        <h3>8.2 Your materials</h3>
        <p>
          You retain ownership of content you supply. You grant us a licence to use that content
          solely to deliver the Services. With your permission, we may feature anonymised or named
          work in our portfolio; you may opt out by emailing us before publication.
        </p>
        <h3>8.3 Custom Atelier / bespoke design</h3>
        <p>
          For fully custom design packages, ownership or licence terms for final artwork will be as
          stated in your written quote. Unless otherwise agreed, we retain underlying frameworks and
          reusable components.
        </p>
      </section>

      <section>
        <h2>9. Hosting, domains, and availability</h2>
        <ul>
          <li>
            Essential-style packages typically include a private shareable link on our hosting
            arrangement for an agreed period around your event.
          </li>
          <li>
            Signature/Atelier packages may include assistance with a custom domain. Domain
            registration fees and renewals belong to the domain registrant (often you) unless we
            expressly include them.
          </li>
          <li>
            We aim for reliable uptime but do not guarantee uninterrupted availability. Maintenance,
            provider outages, or force majeure may cause temporary downtime.
          </li>
          <li>
            After the included hosting window, continued hosting, renewals, or archival exports may
            require a renewal fee or handoff arrangement.
          </li>
          <li>
            We may take down sites that violate these Terms, create security risk, or remain unpaid.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. RSVP, guest data, and communications</h2>
        <p>
          Where RSVP or guest messaging is included, you are responsible for how you use guest
          responses. Do not use the invitation to send spam or collect data unlawfully. Share links
          and QR codes should be distributed only to intended guests. See our Privacy Policy for
          more detail.
        </p>
      </section>

      <section>
        <h2>11. Acceptable use</h2>
        <p>You agree not to use our Services to:</p>
        <ul>
          <li>Host unlawful, hateful, defamatory, or infringing content</li>
          <li>Attempt to hack, scrape, or disrupt our systems or other clients’ sites</li>
          <li>Misrepresent sample/demo sites as live purchases or official government documents</li>
          <li>Resell our templates or white-label our work without written permission</li>
        </ul>
      </section>

      <section>
        <h2>12. Cancellations and refunds</h2>
        <ul>
          <li>
            Because invitation work is custom, payments are generally non-refundable once design or
            production has started.
          </li>
          <li>
            If you cancel before we begin creative work, we may refund payments minus a reasonable
            administration fee, at our discretion and as stated in your confirmation.
          </li>
          <li>
            If we cannot complete the project for reasons solely within our control, we will offer a
            suitable remedy such as a partial refund for undelivered work or a credit.
          </li>
        </ul>
      </section>

      <section>
        <h2>13. Third-party services</h2>
        <p>
          Maps, music platforms, video hosts, messaging apps, payment gateways, and domain
          registrars are third-party services. Their availability, pricing, and terms are outside
          our full control. Features that depend on those services may change if the provider
          changes its APIs or policies.
        </p>
      </section>

      <section>
        <h2>14. Disclaimer</h2>
        <p>
          Services are provided on a professional efforts basis. Except as required by non-waivable
          law, we disclaim warranties of uninterrupted operation, perfect colour matching across
          devices, or fitness for a particular unstated purpose. Digital invitations require a
          modern browser and internet connection on the guest’s device.
        </p>
      </section>

      <section>
        <h2>15. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {BRAND_NAME} is not liable for indirect,
          incidental, special, consequential, or punitive damages, or for lost profits, guest
          attendance outcomes, or data loss beyond our reasonable backup practices.
        </p>
        <p>
          Our total aggregate liability arising from any order is limited to the fees you paid us
          for that specific order in the three (3) months preceding the claim.
        </p>
      </section>

      <section>
        <h2>16. Indemnity</h2>
        <p>
          You agree to indemnify and hold us harmless from claims arising from content you supply,
          your misuse of guest data, your infringement of third-party rights, or your breach of
          these Terms.
        </p>
      </section>

      <section>
        <h2>17. Confidentiality</h2>
        <p>
          We will treat unpublished event details and personal materials you share as confidential
          and use them only to deliver the Services, except where disclosure is required by law or
          you permit portfolio use.
        </p>
      </section>

      <section>
        <h2>18. Changes to the Terms</h2>
        <p>
          We may update these Terms periodically. The “Last updated” date will reflect changes.
          Continued use of the website or ongoing Services after updates constitutes acceptance of
          the revised Terms, except where a signed quote specifies otherwise for that project.
        </p>
      </section>

      <section>
        <h2>19. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of India. Courts in India shall have exclusive
          jurisdiction, subject to any mandatory consumer protections that apply in your place of
          residence. Before formal proceedings, please contact{" "}
          <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a> so we can try to resolve the issue
          amicably.
        </p>
      </section>

      <section>
        <h2>20. Contact</h2>
        <p>
          {BRAND_NAME}
          <br />
          Email: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
          <br />
          Related: <Link to="/privacy">Privacy Policy</Link>
        </p>
      </section>
    </LegalDocument>
  );
}

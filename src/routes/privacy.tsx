import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalDocument } from "@/components/legal-document";
import { BRAND_EMAIL, BRAND_NAME } from "@/lib/site-config";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${BRAND_NAME}` },
      {
        name: "description",
        content: `How ${BRAND_NAME} collects, uses, and protects personal information for invitation inquiries, digital invitations, and guest RSVPs.`,
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalDocument eyebrow="Legal" title="Privacy Policy" updated="12 July 2026">
      <section>
        <h2>1. Who we are</h2>
        <p>
          This Privacy Policy explains how <strong>{BRAND_NAME}</strong> (“we”, “us”, or “our”)
          collects, uses, stores, and shares personal information when you visit our website, send
          an inquiry, purchase digital invitation services, or interact with an invitation we create
          for a client.
        </p>
        <p>
          We operate primarily from India and serve clients in India and internationally. For privacy
          requests, contact us at{" "}
          <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>2. Scope</h2>
        <p>This policy covers:</p>
        <ul>
          <li>Our marketing website and inquiry forms</li>
          <li>Client project communications (email, WhatsApp, phone, or similar)</li>
          <li>Digital invitation websites and related features (countdown, maps, RSVP, albums, music, share links)</li>
          <li>Portfolio samples and demo experiences labelled as samples</li>
        </ul>
        <p>
          Invitation sites we build for clients may collect guest information (for example RSVP
          responses). In those cases, the celebrating couple or event host is typically the primary
          controller of guest data; we process that data to deliver the service they ordered. See
          Section 6.
        </p>
      </section>

      <section>
        <h2>3. Information we collect</h2>

        <h3>3.1 Information you provide</h3>
        <ul>
          <li>
            <strong>Inquiry and contact details:</strong> name, email, phone number, occasion type,
            preferred package, event date/location, design preferences, and message content
          </li>
          <li>
            <strong>Project details:</strong> couple or host names, ceremony/event schedules,
            venue names and addresses, family names, wording for invitations, domain preferences
          </li>
          <li>
            <strong>Media you upload or send:</strong> photographs, logos, videos, music files, or
            other creative assets
          </li>
          <li>
            <strong>Billing details:</strong> billing name and payment confirmation references (we
            do not store full card numbers on our servers when payments are processed by a
            third-party processor)
          </li>
          <li>
            <strong>Support correspondence:</strong> emails, chat messages, revision notes, and
            feedback
          </li>
        </ul>

        <h3>3.2 Information collected automatically</h3>
        <ul>
          <li>Device and browser type, approximate location (city/region level), referral source</li>
          <li>Pages viewed, links clicked, and basic analytics events on our marketing site</li>
          <li>
            Technical logs needed for security, uptime, and troubleshooting (IP address, timestamps,
            error logs)
          </li>
        </ul>

        <h3>3.3 Guest information on invitation sites</h3>
        <p>Depending on the package, an invitation may collect:</p>
        <ul>
          <li>Guest name, attendance status, meal preferences, plus-ones, dietary notes</li>
          <li>Optional guest messages or love notes</li>
          <li>Technical data required to load the invitation page securely</li>
        </ul>
      </section>

      <section>
        <h2>4. How we use information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to inquiries and prepare quotes</li>
          <li>Design, build, host, and maintain invitation websites</li>
          <li>Configure domains, share links, QR codes, music, RSVP, albums, and related features</li>
          <li>Process payments and issue invoices/receipts</li>
          <li>Provide revisions, support, and post-delivery assistance</li>
          <li>Improve our templates, website, and services</li>
          <li>Detect fraud, abuse, and security incidents</li>
          <li>Comply with legal obligations and enforce our Terms & Conditions</li>
        </ul>
        <p>
          We do not sell personal information. We do not use guest RSVP lists for unrelated
          marketing.
        </p>
      </section>

      <section>
        <h2>5. Legal bases (where applicable)</h2>
        <p>Depending on your location and applicable law, we rely on one or more of:</p>
        <ul>
          <li>
            <strong>Contract:</strong> to deliver the invitation services you request
          </li>
          <li>
            <strong>Consent:</strong> for optional analytics, marketing emails (if offered), or
            specific processing you opt into
          </li>
          <li>
            <strong>Legitimate interests:</strong> securing our services, improving quality, and
            preventing abuse, balanced against your rights
          </li>
          <li>
            <strong>Legal obligation:</strong> tax, accounting, and regulatory requirements
          </li>
        </ul>
        <p>
          If you are in India, we process personal data in line with applicable Indian law,
          including the Digital Personal Data Protection Act, 2023, as it comes into force and is
          applied.
        </p>
      </section>

      <section>
        <h2>6. Client invitation sites and guest privacy</h2>
        <p>
          When we host a digital invitation for a client, the client decides what guest information
          to collect and how to use it for their event. We process guest data only to operate the
          invitation features included in the package (for example storing RSVP responses for the
          client to review).
        </p>
        <p>Clients are responsible for:</p>
        <ul>
          <li>Collecting only information they need for the celebration</li>
          <li>Informing guests appropriately about how RSVP or message data will be used</li>
          <li>Not using the invitation platform for spam, harassment, or unlawful collection</li>
        </ul>
        <p>
          Guests who want a response corrected or removed should contact the event host first. We
          can assist the host with technical deletion or correction requests at{" "}
          <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>7. Sharing and processors</h2>
        <p>We may share information with trusted service providers who help us operate, such as:</p>
        <ul>
          <li>Website hosting and content delivery providers</li>
          <li>Domain registrars and DNS providers (for custom-domain packages)</li>
          <li>Email and communication tools</li>
          <li>Payment processors and accounting tools</li>
          <li>Analytics providers (in aggregated or limited form where used)</li>
        </ul>
        <p>
          These providers are instructed to process data only for the services they perform for us.
          We may also disclose information if required by law, court order, or to protect rights,
          safety, and security.
        </p>
      </section>

      <section>
        <h2>8. International transfers</h2>
        <p>
          Our clients and infrastructure partners may be located in different countries. Where data
          is transferred across borders, we take reasonable steps to ensure appropriate safeguards
          consistent with applicable law and the nature of the service.
        </p>
      </section>

      <section>
        <h2>9. Retention</h2>
        <ul>
          <li>
            <strong>Inquiry data:</strong> retained as needed to respond and for a reasonable
            follow-up period, then deleted or anonymised unless a project continues
          </li>
          <li>
            <strong>Active project files:</strong> retained during production and for a limited
            period after delivery for support and revisions
          </li>
          <li>
            <strong>Live invitation sites:</strong> typically kept online through the event and for
            an agreed post-event window (or until the client asks us to take the site down), subject
            to the package terms
          </li>
          <li>
            <strong>RSVP and guest messages:</strong> retained while the invitation is active; after
            takedown or expiry, data is deleted or archived per our operational schedule unless the
            client requests an export sooner
          </li>
          <li>
            <strong>Billing records:</strong> retained as required for tax and accounting law
          </li>
        </ul>
      </section>

      <section>
        <h2>10. Security</h2>
        <p>
          We use reasonable technical and organisational measures to protect personal information,
          including access controls, HTTPS for public sites, and limiting staff access to project
          data. No method of transmission or storage is completely secure; please use strong unique
          passwords where accounts exist and share draft links only with intended recipients.
        </p>
      </section>

      <section>
        <h2>11. Cookies and similar technologies</h2>
        <p>
          Our marketing site and invitation sites may use cookies or similar technologies for
          essential functionality, security, preferences (for example music mute state), and
          limited analytics. You can control cookies through your browser settings. Disabling
          certain cookies may affect site features.
        </p>
      </section>

      <section>
        <h2>12. Your rights</h2>
        <p>Subject to applicable law, you may request to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Delete information we no longer need to retain</li>
          <li>Withdraw consent where processing is consent-based</li>
          <li>Object to or restrict certain processing</li>
          <li>Receive a portable copy of information you provided, where feasible</li>
        </ul>
        <p>
          To exercise these rights, email <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a> with
          enough detail for us to verify and locate your request. We may need to retain some
          information for legal, security, or contractual reasons.
        </p>
      </section>

      <section>
        <h2>13. Children</h2>
        <p>
          Our services are directed to adults planning celebrations. We do not knowingly collect
          personal information from children under 18 for marketing purposes. If you believe a child
          has provided personal data inappropriately, contact us and we will take reasonable steps
          to delete it.
        </p>
      </section>

      <section>
        <h2>14. Portfolio, samples, and watermarks</h2>
        <p>
          Demo invitations and portfolio previews may use fictional or sample names, dates, and
          imagery. Sample sites may display a watermark and are not real client events. Do not
          submit real personal data into sample RSVP forms unless the form clearly indicates it is
          a live client invitation.
        </p>
      </section>

      <section>
        <h2>15. Third-party links and embeds</h2>
        <p>
          Invitation sites may link to maps, YouTube or live-stream providers, WhatsApp, social
          networks, or other third-party services. Those services have their own privacy practices.
          We are not responsible for their policies or content.
        </p>
      </section>

      <section>
        <h2>16. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top
          will change when we do. Continued use of our website or services after an update means you
          acknowledge the revised policy. For material changes affecting active clients, we will
          make reasonable efforts to notify the project contact email on file.
        </p>
      </section>

      <section>
        <h2>17. Contact</h2>
        <p>
          {BRAND_NAME}
          <br />
          Email: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
          <br />
          Also see our{" "}
          <Link to="/terms">Terms & Conditions</Link>.
        </p>
      </section>
    </LegalDocument>
  );
}

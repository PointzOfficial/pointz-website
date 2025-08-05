import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePageTitle } from "@/hooks/use-page-title";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  usePageTitle("Pointz: Plan Safer on Bikes - Terms & Conditions");
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-center">
                  Pointz Mobility, Inc.
                </h2>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">TERMS OF SERVICE</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Last updated: August 5th, 2025
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">1. Introduction</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service has been written to describe the
                  conditions under which Our Services are made available to You.
                  The Terms discuss important limitations about the way You may
                  use and rely upon materials You find on the Services. Read
                  these Terms carefully. By using Our Services, You will be
                  deemed to have accepted them. If You do not accept the Terms,
                  You may not use Our Services. These Terms are an agreement
                  between You and Us.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">Interpretation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The terms used in these Terms of Service have the same
                  meanings as in Our Privacy Policy, which are accessible{" "}
                  <Link to="/privacy" className="text-blue-600 underline">
                    here
                  </Link>{" "}
                  unless otherwise defined in these Terms of Service.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">Definitions</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For the purposes of these Terms:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>App</strong> refers to Our mobile application.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Account</strong> means a unique account created for
                  You to access Our Service or parts of Our Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in these Terms) refers to Pointz Mobility
                  Inc., a Delaware corporation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Cookies</strong> are small files that are placed on
                  Your computer, mobile device or any other device by a website,
                  containing the details of Your browsing history on that
                  website among its many uses.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Country</strong> refers to: United States of America.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone or a digital tablet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Personal Data</strong> is any information that
                  identifies, relates to, describes, is reasonably capable of
                  being associated with, or could reasonably be linked, directly
                  or indirectly, with a particular individual or household.
                  Personal Data does not include deidentified, anonymous,
                  aggregated or statistical information.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Services</strong> collectively refers to the Website,
                  Our App, and any services We may make accessible to You on or
                  through the Website.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Service Provider</strong> means any natural or legal
                  person who processes the data on behalf of the Company. It
                  refers to third party companies or individuals employed by the
                  Company to facilitate the Service, to provide the Service on
                  behalf of the Company, to perform services related to the
                  Service or to assist the Company in analyzing how the Service
                  is used.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Terms</strong> refers to these Terms of Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Usage Data</strong> refers to data collected
                  automatically, either generated by the use of the Service or
                  from the Service infrastructure itself (for example, the
                  duration of a page visit).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Website</strong> refers to Pointz, accessible from{" "}
                  <Link
                    to="https://www.bikepointz.com/"
                    className="text-blue-600 underline"
                  >
                    https://www.bikepointz.com/
                  </Link>
                  , and associated sub-domains and any related mobile
                  applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">2. Use of Services</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our Services are generally not directed to, and are not
                  intended for use by, individuals under the age of eighteen
                  (18). However, Minors (individuals under the age of 18) are
                  permitted to access and use Our Services solely when
                  participating in a specifically authorized educational program
                  or pilot (an "Authorized School Program"). In such cases, and
                  only when accounts are created or activated through designated
                  school-provided promo codes or mechanisms (an "Authorized
                  Student Account"), the School shall be responsible for
                  obtaining all necessary parental consents and for acting as
                  the authorized agent of parents/guardians, in compliance with
                  applicable laws including, but not limited to, the Children's
                  Online Privacy Protection Act ("COPPA") and the Family
                  Educational Rights and Privacy Act ("FERPA"). Use of the
                  Services by Minors outside of an Authorized School Program
                  remains prohibited.{" "}
                  <strong>
                    For Authorized Student Accounts, Pointz disables all
                    location-tracking, route history saving, and search history
                    features, as further described in Section 13, to safeguard
                    student privacy.
                  </strong>{" "}
                  Additionally, You cannot access or use Our Services if You are
                  barred from receiving services under applicable law or have
                  previously been suspended or removed from Our Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You will not use, sublicense, copy, adapt, modify, translate,
                  disclose, prepare derivative works based upon, distribute,
                  license, sell, rent, lease, assign, transfer, publicly
                  display, publicly perform, transmit, broadcast, or otherwise
                  exploit Our Services or any portion thereof (including any
                  third party software), except as expressly permitted in these
                  Terms. No licenses or rights are granted to You by implication
                  or otherwise under any intellectual property rights owned or
                  controlled by Us or Our licensors, except for the licenses and
                  rights expressly granted in these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Except to the extent permitted by law, You may not perform,
                  attempt to perform, or encourage or assist others in
                  performing any of the following while accessing or using Our
                  Service: (1) use, display, mirror, or frame the Our Service or
                  any individual element within Our Services, including the
                  layout and design of any page, without Our express written
                  consent; (2) use Our name, any trademark or logo, or any of
                  Our proprietary information without Our express written
                  consent; (3) access or tamper with non-public areas of Our
                  Service, Our computer systems, or the technical delivery
                  systems of Our providers; (4) test the vulnerability of any of
                  Our systems or breach any security or authentication measures;
                  (5) circumvent any technological measure implemented by Us or
                  any of Our providers or any other third party (including
                  another user) to protect the Our Services; (6) access Our
                  Services through the use of any mechanism other than through
                  the use of an authorized connection or Our Services, or (7)
                  modify, decompile, disassemble, reverse engineer, tamper with,
                  or otherwise attempt to derive the source code of any software
                  that We provide to You or any other part of Our Services.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">3. Account</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You will be required to register an account to use parts of
                  the Services. You must provide accurate, current, and complete
                  information during the registration process and at all other
                  times when You use the Services. Additionally, You must update
                  Your account information to keep it accurate, current, and
                  complete.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are the sole authorized user of any account You create and
                  responsible for all activities that occur under Your password
                  or account. You agree that You shall monitor Your account to
                  prevent use by any person under the age of 18, unless such use
                  is through an Authorized Student Account within an Authorized
                  School Program as defined in Section 2. For Authorized Student
                  Accounts, the School shall bear primary responsibility for
                  ensuring appropriate access and use by Minors, consistent with
                  their agreement with Us. You may not authorize others to use
                  Your account and You may not assign or otherwise transfer Your
                  account to any other person or entity. Should You suspect that
                  any unauthorized party may be using Your password or account,
                  You will notify Us by email at{" "}
                  <Link
                    to="mailto:hi@bikepointz.com"
                    className="text-blue-600 underline"
                  >
                    hi@bikepointz.com
                  </Link>
                  .
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will not be liable and You may be liable for losses,
                  damages, liability, expenses, and fees incurred by Us or a
                  third party arising from someone else using Your account,
                  regardless of whether You have notified Us of such
                  unauthorized use. If You provide any information that is
                  untrue, inaccurate, not current, or incomplete, or We have
                  reasonable grounds to suspect that such information is untrue,
                  inaccurate, not current, or incomplete, We have the right to
                  suspend or terminate Your account and refuse any and all
                  current or future use of the Services. We may also suspend or
                  terminate Your account if, in Our sole discretion, We believe
                  You have violated these Terms. You agree not to create an
                  account or use the Services if You have been previously
                  removed by us, or if You have been previously banned from use
                  of the Services.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If You wish to deactivate Your account for any reason, notify
                  Us by email at{" "}
                  <Link
                    to="mailto:hi@bikepointz.com"
                    className="text-blue-600 underline"
                  >
                    hi@bikepointz.com
                  </Link>
                  . If Your account has been deactivated, We may, but are not
                  obligated to, reactivate Your account upon written request by
                  email.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  4. Content You provide us
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may enable You to post, upload, store, share, send, or
                  display information and content, such as road conditions and
                  ratings (“Your Content”) to and via Our Services. You retain
                  all rights to Your Content that You post to Our Service. By
                  making Your Content available on or through Our Service You
                  hereby grant to Us a non-exclusive, transferable,
                  sublicensable, worldwide, royalty-free license to use, copy,
                  modify, publicly display, publicly perform, reproduce,
                  translate, create derivative works from, and distribute Your
                  Content, in whole or in part, including Your name and
                  likeness, in any media. The rights You grant Us in this
                  Section 3 are only for the limited purpose of offering and
                  improving Our Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Notwithstanding the above, for Your Content provided by Minors
                  participating in an Authorized School Program through an
                  Authorized Student Account, Our use of such content shall be
                  strictly limited to the educational purposes of the program
                  and to improve the educational functionality of the Service.
                  We will not use such content for targeted advertising,
                  creating commercial profiles of Minors, or for any other
                  purpose inconsistent with applicable student privacy laws,
                  including COPPA and FERPA, without explicit parental or school
                  consent, as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">5. Disclaimers</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  THE MATERIALS PROVIDED IN OUR SERVICES ARE PROVIDED “AS IS”
                  WITHOUT WARRANTIES OF ANY KIND INCLUDING WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                  NON-INFRINGEMENT OF INTELLECTUAL PROPERTY. Our obligations
                  with respect to Our products and services are governed solely
                  by the agreements under which they are provided and nothing
                  made available through Our Services should be construed to
                  alter such agreements. We further do not warrant the accuracy
                  and completeness of the materials in Our Services. We may make
                  changes to the materials at in Our Services, or to the
                  products and prices described in them, at any time without
                  notice. The materials in Our Services may be out of date, and
                  We make no commitment to update the materials used in Our
                  Services. Information published on Our Services may refer to
                  products, programs or services that are not available in Your
                  country. Consult Your local business contact for information
                  regarding the products, programs and services that may be
                  available to You. Applicable law may not allow the exclusion
                  of implied warranties, so this exclusion may not apply to You.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  6. Limitation of liability
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  IN NO EVENT WILL WE, OUR SUPPLIERS, OR OTHER THIRD PARTIES
                  MENTIONED IN OUR SERVICES BE LIABLE FOR ANY DAMAGES WHATSOEVER
                  (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOST
                  PROFITS, LOST DATA OR BUSINESS INTERRUPTION) ARISING OUT OF
                  THE USE, INABILITY TO USE, OR THE RESULTS OF USE OF OUR
                  SERVICES, ANY WEBSITES LINKED TO OUR SERVICES, OR THE
                  MATERIALS OR INFORMATION OR SERVICES CONTAINED AT ANY OR ALL
                  SUCH SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR
                  ANY OTHER LEGAL THEORY AND WHETHER OR NOT WE HAVE BEEN ADVISED
                  OF THE POSSIBILITY OF SUCH DAMAGES. IF YOUR USE OF OUR
                  MATERIALS, INFORMATION OR SERVICES RESULTS IN THE NEED FOR
                  SERVICING, REPAIR OR CORRECTION OF EQUIPMENT OR DATA, YOU
                  ASSUME ALL COSTS THEREOF. APPLICABLE LAW MAY NOT ALLOW THE
                  EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
                  DAMAGES, SO THESE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO
                  YOU.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Full use of Our Services is dependent upon Your use of a
                  computer with adequate software or a supported mobile device
                  and Internet access. The maintenance and security of this
                  equipment may influence the performance of Our Services and it
                  is Your responsibility to ensure the equipment’s
                  functionality. You are responsible for all Internet access
                  charges. Please check with Your Internet provider for
                  information on possible Internet data usage charges.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Along the same lines, We cannot always take responsibility for
                  the way You use Our Services. You need to make sure that the
                  device You use to access Our Services stays charged – if it
                  runs out of battery and You can’t turn it on to avail the
                  Service, We cannot accept responsibility.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When You’re using Our Services, it’s important to bear in mind
                  that although We endeavor to ensure that it is updated and
                  correct at all times, We do rely on third parties to provide
                  information to Us so that We can make it available to You. We
                  accept no liability for any loss, direct or indirect, You
                  experience as a result of relying wholly on this functionality
                  of Our Services.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  7. Integrations, Third Party Links
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Services may link to or otherwise allow You to access or
                  use or integrate with third party providers of products and
                  services (“Third Party Services”). Such Third Party Services
                  are not “Services” under these Terms and are not subject to
                  any provisions related to the Services, including related
                  warranties, indemnities, service commitments or other
                  obligations. The availability of any Third Party Services
                  through the Services does not imply Our endorsement of or
                  affiliation with the provider. Access to and use of any Third
                  Party Services are subject to the separate terms and
                  conditions required by the providers of the Third Party
                  Services. We do not control the Third Party Services and will
                  have no liability in connection with any Third Party Service.
                  We have no obligation to monitor or maintain any Third Party
                  Service and may replace, disable, or restrict access to any
                  Third Party Service or cancel related integrations at any
                  time, without notice. The calculation of downtime of the Site,
                  if any, does not include the unavailability of any integration
                  to a Third Party Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If a Third Party Service is enabled for Your account, please
                  be mindful of any account information or content that will be
                  shared with the third party provider and the purposes for
                  which the provider requires access. We will not be responsible
                  for any use, disclosure, modification or deletion of account
                  information or content that is transmitted to, or accessed by,
                  a Third Party Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BY USING OR ENABLING ANY THIRD PARTY SERVICE, YOU EXPRESSLY
                  ACKNOWLEDGE THAT ANY LIABILITY AND REMEDIES RELATED TO A THIRD
                  PARTY SERVICE IS WHOLLY GOVERNED BY THE APPLICABLE THIRD PARTY
                  AGREEMENT AND WE DISCLAIM ALL LIABILITY RELATED TO SUCH THIRD
                  PARTY SERVICE.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">8. General</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We administer Our Services from Our offices in the State of
                  Rhode Island, USA. We make no representation that these
                  materials or Services are appropriate or available for use
                  outside the United States, and access to them from territories
                  where their contents are illegal is prohibited. You may not
                  use or export or re-export the materials or Services or any
                  copy or adaptation in violation of any applicable laws or
                  regulations including without limitation U.S. export laws and
                  regulations. If You choose to access these Services from
                  outside the United States, You do so on Your own initiative
                  and are responsible for compliance with applicable local laws.
                  These Terms will be governed by and construed in accordance
                  with the laws of the State of Rhode Island, without giving
                  effect to any principles of conflicts of laws.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  9. Digital Millennium Copyright Act ("DMCA") Notice
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It is Our policy to respond to allegations of copyright
                  violations in accordance with the DMCA. If You believe that
                  Your work has been copied and is accessible on Our Site in a
                  way that constitutes copyright infringement, You may notify
                  the Company’s designated Copyright Agent at the address below.
                  Inquiries not compliant with the procedure outlined below may
                  not receive a response. When a valid DMCA notification is
                  received, We will respond by taking down the offending
                  content. We will then take reasonable steps to contact the
                  owner of the removed content so a counter-notification may be
                  filed. Upon receipt of a valid counter-notification, We will
                  generally restore the content in question, unless We receives
                  notice from You, the notifying copyright owner, that a legal
                  action has been filed seeking a court order to restrain the
                  alleged infringer from engaging in the infringing activity.
                  The Company may provide copies of such notices to the
                  participants in the dispute or to any other third parties, at
                  Our discretion and as required by law. The Company’s Privacy
                  Policy does not protect information provided in these notices.
                </p>
                <h4 className="text-lg font-bold mb-4">Notification</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If You believe that Your work was copied or posted on Our Site
                  in a way that constitutes copyright infringement, please
                  contact Our designated Copyright Agent:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trisha Ballakur
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  225 Dyer St., Providence, RI 02903
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <Link
                    to="mailto:hi@bikepointz.com"
                    className="text-blue-600 underline"
                  >
                    hi@bikepointz.com
                  </Link>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please note that You may be liable for damages (including
                  costs and attorneys’ fees) if You materially misrepresent that
                  content is infringing.
                </p>
                <h4 className="text-lg font-bold mb-4">Account Termination</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Company may, in appropriate circumstances, terminate an
                  account holder or user of the Site or the Services if they are
                  a repeat infringer. If You believe that an account holder or
                  user is a repeat infringer, please follow the instructions
                  above to contact the Company’s DMCA Copyright Agent and
                  provide information sufficient for We to verify that the
                  account holder or user is a repeat infringer.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  10. Dispute resolution
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT
                  REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH US
                  AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree that any dispute between You and Us arising out of
                  or relating to these Terms of Service, Privacy Policy, Our
                  Services (collectively, “Disputes”) will be governed by the
                  arbitration procedure outlined below.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We want to address Your concerns without needing a formal
                  legal case. Before filing a claim against us, You agree to try
                  to resolve the Dispute informally by contacting Us in
                  accordance with Section 10 of these Terms, and providing Us
                  with Your email address. We'll try to resolve the Dispute
                  informally by contacting You through email.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="underline">Governing Law:</span> Except as
                  otherwise required by applicable law, the Terms of Service and
                  the resolution of any Disputes shall be governed by and
                  construed in accordance with the laws of the State of Rhode
                  Island without regard to its conflict of laws principles.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="underline">Binding Arbitration:</span> We
                  agree to resolve any Disputes through final and binding
                  arbitration, except as set forth under Exceptions to Agreement
                  to Arbitrate below. The American Arbitration Association (AAA)
                  will administer the arbitration under its Commercial
                  Arbitration Rules and the Supplementary Procedures for
                  Consumer Related Disputes. The arbitration will be held in the
                  United States county where You live or work, Providence, Rhode
                  Island, or any other location We agree to.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="underline">No Class Actions:</span> You may
                  only resolve Disputes with Us on an individual basis, and may
                  not bring a claim as a plaintiff or a class member in a class,
                  consolidated, or representative action. Class arbitrations,
                  class actions, private attorney general actions, and
                  consolidation with other arbitrations are not allowed under
                  Our agreement.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="underline">
                    Judicial Forum for Disputes:
                  </span>
                  Except as otherwise required by applicable law, in the event
                  that the agreement to arbitrate is found not to apply to You
                  or Your claim, You and We agree that any judicial proceeding
                  (other than small claims actions) will be brought in the
                  federal or state courts of Providence, Rhode Island. Both You
                  and We consent to venue and personal jurisdiction there. We
                  both agree to waive Our right to a jury trial.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="underline">Limitation on Claims:</span>
                  Regardless of any statute or law to the contrary, any claim or
                  cause of action arising out of or related to Your use of Our
                  Services must be filed within one (1) year after such claim or
                  cause of action arose, or else that claim or cause of action
                  will be barred forever.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  11. Copyrights and Trademarks
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The contents of the Website and App are copyright © 2022
                  Pointz Mobility, Inc. All rights reserved. Pointz Mobility,
                  Inc. and Pointz are trademarks of Pointz Mobility, Inc. in the
                  United States and other countries. All other product names,
                  service marks and trademarks mentioned herein are trademarks
                  of their respective owners.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  12. Changes in these terms
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are committed to ensuring that Our Services are as useful
                  and efficient as possible. For that reason, We reserve the
                  right to make changes to Our Services or to charge for Our
                  Services, at any time and for any reason. We will never charge
                  You for the Services without making it very clear to You
                  exactly what You’re paying for.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may revise these Terms at any time by updating this
                  posting. You should visit this page from time to time to
                  review the then-current Terms because they are binding on You.
                  Certain provisions of these Terms may be superseded by
                  expressly designated legal notices or terms located on
                  particular pages of Our Services.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  13. Student Privacy Protections (Location & Search Data
                  Restrictions for Minors)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To comply with COPPA, FERPA, and strict school privacy
                  policies, Pointz enforces the following restrictions for all
                  minors accessing the Services through Authorized Student
                  Accounts:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All mechanisms for saving and sharing location data will be
                  turned off. This means minors will not be able to save or see
                  their past routes, and Pointz will not save data on the start,
                  end, or specific points in the routes searched or taken, nor
                  will it retain any search history of start or end locations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These limitations are implemented to ensure that personal
                  location history and search data of Minors participating in an
                  Authorized School Program are not collected or retained by
                  Pointz, aligning with the highest standards of student data
                  privacy and the specific requirements of the School.{" "}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These specific limitations apply exclusively to Authorized
                  Student Accounts. All other provisions of these Terms and Our
                  Privacy Policy apply to Authorized Student Accounts, except
                  where expressly modified by this Section 13.{" "}
                </p>
              </section>
              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">14. Contacting Us</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If You have any questions about these Terms or Our Services,
                  You may contact:{" "}
                  <Link
                    to="mailto:hi@bikepointz.com"
                    className="text-blue-600 underline"
                  >
                    hi@bikepointz.com
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;

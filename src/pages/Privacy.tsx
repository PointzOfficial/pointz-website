import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePageTitle } from "@/hooks/use-page-title";
import { Link } from "react-router-dom";

const Privacy = () => {
  usePageTitle("Pointz: Plan Safer on Bikes - Privacy Policy");
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: August 5th, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As We keep the wheels spinning at Pointz, We want to be
                  transparent in pointing You to information on how Your data is
                  protected, used, and collected on Our Website and the Pointz
                  Mobility app.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of information collected
                  when You use the Services and tells You about Your privacy
                  rights and how the law protects You.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using the Services, You agree to the collection and use of
                  information in accordance with this Privacy Policy. The
                  Personal Information that We collect is used for providing and
                  improving the Service. We will not use or share Your
                  information with anyone except as described in this Privacy
                  Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The terms used in this Privacy Policy have the same meanings
                  as in Our Terms of Service, which are accessible{" "}
                  <Link
                    to="/terms-conditions"
                    className="text-blue-600 underline"
                  >
                    here
                  </Link>{" "}
                  unless otherwise defined in this Privacy Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>
                    To the extent We provide You notice of different or
                    additional policies or practices (<em>e.g.</em>, at the
                    point of Our collection), those additional terms shall
                    govern such data collection and use.
                  </strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  YOU MUST BE EIGHTEEN (18) YEARS OR OLDER TO ACCESS THE OUR
                  SERVICES. IF YOU ARE UNDER EIGHTEEN YEARS OF AGE OR YOU DO NOT
                  AGREE TO THIS PRIVACY POLICY, YOU ARE NOT PERMITTED TO ACCESS
                  THE SERVICES FOR ANY REASON.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  1. Interpretation and Definitions
                </h2>
                <h3 className="text-xl font-bold mb-4">Interpretation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
                <h3 className="text-xl font-bold mb-4">Definitions</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For the purposes of this Privacy Policy:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Account</strong> means a unique account created for
                  You to access Our Service or parts of Our Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in this Privacy Policy) refers to Pointz
                  Mobility Inc., a Delaware corporation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Cookies</strong> are small files that are placed on
                  Your Device, mobile device or any other device by a website,
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
                  <strong>Pointz Mobility app</strong> is{" "}
                  <strong>Our mobile application, Pointz.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Service</strong> refers to the Website, the Pointz
                  Mobility app, and any services We may make accessible to You
                  on or through the Website.
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
                  <strong>Usage Data</strong> refers to data collected
                  automatically, either generated by the use of the Service or
                  from the Service infrastructure itself (for example, the
                  duration of a page visit).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Website</strong> refers to Pointz, accessible from
                  https://www.bikepointz.com/, and associated sub-domains and
                  any related mobile applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  2. Collecting and Using Your Personal Data
                </h2>
                <h3 className="text-xl font-bold mb-4">
                  Types of Data Collected
                </h3>
                <h3 className="text-xl font-bold mb-4">
                  Personal Data You Provide
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While using the Services, We may ask You to provide Us with
                  certain Personal Data that can be used to contact or identify
                  You or establish Your Account. Personal Data may include, but
                  is not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Other Personal Data includes information that You provide for
                  features of the Services, for example, addresses You search
                  for, destinations, and road condition ratings.
                </p>
                <h3 className="text-xl font-bold mb-4">
                  Social Networking Services Data
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have pages on social media sites like Facebook, Instagram,
                  and LinkedIn (“Social Media Pages”). When You interact with
                  Our Social Media Pages, We will collect personal information
                  that You elect to provide to Us, such as Your contact details.
                  In addition, the companies that host Our Social Media Pages
                  may provide Us with aggregate information and analytics
                  regarding the use of Our Social Media Pages.
                </p>
                <h3 className="text-xl font-bold mb-4">Geolocation Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Services include, if You have enabled them, features that
                  use precise geolocation data, location, speed, direction, and
                  time and date of recording, including through GPS signals,
                  Device sensors, Wi-Fi access points, and cell tower IDs. We
                  collect this type of data if You grant Us access to Your
                  location. You can always remove Our access using Your mobile
                  device settings, but geolocation is an essential requirement
                  to use the Services. We may also derive Your approximate
                  location from Your IP address.
                </p>
                <h3 className="text-xl font-bold mb-4">
                  Usage Data Collected Automatically
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Usage Data is collected automatically when using the Website
                  or Service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Usage Data may include information such as Your Device’s
                  Internet Protocol address (e.g., IP address), browser type,
                  browser version, the pages of Our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique Device identifiers, location (to the extent shared),
                  and other diagnostic data.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When You access the Service by or through a mobile Device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile Device You use, Your mobile
                  Device unique ID, the IP address of Your mobile Device,
                  location (to the extent shared), Your mobile operating system,
                  the type of mobile Internet browser You use, unique Device
                  identifiers and other diagnostic data.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may also collect information that Your browser sends
                  whenever You visit Our Service or when You access the Service
                  by or through a mobile Device.
                </p>
                <h3 className="text-xl font-bold mb-4">
                  Tracking Technologies and Cookies
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use Cookies and similar tracking technologies to track the
                  activity on the Services and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze the
                  Services. The technologies We use may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>
                    <strong>Cookies or Browser Cookies.</strong> A Cookie is a
                    small file placed on Your Device. You can instruct Your
                    browser to refuse all Cookies or to indicate when a Cookie
                    is being sent. However, if You do not accept Cookies, You
                    may not be able to use some parts of Our Service. Unless You
                    have adjusted Your browser setting so that it will refuse
                    Cookies, Our Service may use Cookies.
                  </li>
                  <li>
                    <strong>Web Beacons.</strong> Certain sections of Our
                    Service and Our emails may contain small electronic files
                    known as web beacons (also referred to as clear gifs, pixel
                    tags, and single-pixel gifs) that permit the Company, for
                    example, to count users who have visited those pages or
                    opened an email and for other related website statistics
                    (for example, recording the popularity of a certain section
                    and verifying system and server integrity).
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies can be “Persistent” or “Session” Cookies. Persistent
                  Cookies remain on Your Device when You go offline, while
                  Session Cookies are deleted as soon as You close Your web
                  browser.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </p>
                <h4 className="text-lg font-bold mb-4">1. Session Cookies</h4>
                <h4 className="text-lg font-bold mb-4">
                  Necessary / Essential Cookies
                </h4>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>
                    Administered by: Us and Squarespace (third party partner)
                  </li>
                  <li>
                    Purpose: These Cookies are essential to provide You with
                    services available through the Website and to enable You to
                    use some of its features. They help to authenticate users
                    and prevent fraudulent use of user accounts. Without these
                    Cookies, the services that You have asked for cannot be
                    provided, and We only use these Cookies to provide You with
                    those services.
                  </li>
                </ul>
                <h4 className="text-lg font-bold mb-4">
                  2. Persistent Cookies
                </h4>
                <h4 className="text-lg font-bold mb-4">
                  A) Cookies Policy / Notice Acceptance Cookies
                </h4>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>Administered by: Us</li>
                  <li>
                    Purpose: These Cookies identify if users have accepted the
                    use of Cookies on the Website.
                  </li>
                </ul>
                <h4 className="text-lg font-bold mb-4">B) Analytics Cookies</h4>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>
                    Administered by: Us, Squarespace, Google Analytics, and
                    other third party partners
                  </li>
                  <li>
                    Purpose: Google Analytics installs cookies to store
                    information on how visitors use a website, while also
                    creating an analytics report of the website's performance.
                    Some of the data that are collected include the number of
                    visitors, their source, and the pages they visit
                    anonymously. Other Google Analytics cookies calculates
                    visitor, session and campaign data and also keeps track of
                    site usage for the site's analytics report.
                  </li>
                </ul>
                <h4 className="text-lg font-bold mb-4">
                  C) Advertisement Cookies
                </h4>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>
                    Administered by: Us, Facebook, and other third party
                    partners
                  </li>
                  <li>
                    Purpose: Facebook installs cookies to display advertisements
                    to You when either on Facebook or on a digital platform
                    powered by Facebook advertising, after visiting the website.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>
                    Analytics and Advertising Services Provided by Others
                  </strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We work with partners who provide Us with analytics and
                  advertising services. This includes helping Us understand how
                  users interact with the Services, serving advertisements on
                  Our behalf across the internet, and measuring the performance
                  of those advertisements. These companies may use Cookies and
                  similar technologies to collect information about Your
                  interactions with the Services and other websites and
                  applications.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  3. Use of Your Personal Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>
                    <strong>To provide and maintain the Services,</strong>
                    including to monitor the usage of the Services.
                  </li>
                  <li>
                    <strong>To manage Your Account:</strong> to manage Your
                    registration as a user of the Services. The Personal Data
                    You provide can give You access to different functionalities
                    of the Services that are available to You as a registered
                    user.
                  </li>
                  <li>
                    <strong>For the performance of a contract:</strong> the
                    development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Services.
                  </li>
                  <li>
                    <strong>To contact You:</strong> To contact You by email, or
                    other equivalent forms of electronic communication, such as
                    a mobile application’s push notifications regarding updates
                    or informative communications related to the
                    functionalities, products or contracted services, including
                    the security updates, when necessary or reasonable for their
                    implementation.
                  </li>
                  <li>
                    <strong>To provide You</strong> with news, special offers
                    and general information about other goods, services and
                    events which We offer that are similar to those that You
                    have already purchased or enquired about unless You have
                    opted not to receive such information.
                  </li>
                  <li>
                    <strong>To manage Your requests:</strong> To attend and
                    manage Your requests to Us.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may use Your
                    Personal Data to evaluate or conduct a merger, divestiture,
                    restructuring, reorganization, dissolution, or other sale or
                    transfer of some or all of Our assets, whether as a going
                    concern or as part of bankruptcy, liquidation, or similar
                    proceeding, in which Personal Data held by Us about the
                    Services’ users is among the assets transferred.
                  </li>
                  <li>
                    <strong>For other purposes:</strong> We may use Your
                    Personal Data for other purposes, such as data analysis,
                    identifying usage trends, determining the effectiveness of
                    Our promotional campaigns and to evaluate and improve Our
                    Service, products, services, marketing and Your experience.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share Your Personal Data in the following situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>
                    <strong>With Service Providers:</strong> We may share Your
                    Personal Data with Service Providers to monitor and analyze
                    the use of Our Service, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your Personal Data in connection with, or during
                    negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside.
                  </li>
                  <li>
                    <strong>With Your consent:</strong> We may disclose Your
                    Personal Data for any other purpose with Your consent.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell Your Personal Data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  4. Retention of Your Personal Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with Our legal obligations (for example,
                  if We are required to retain Your data to comply with
                  applicable laws), resolve disputes, and enforce Our legal
                  agreements and policies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of the Services,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  5. Transfer of Your Personal Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your information, including Personal Data, is processed at the
                  Company’s operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to and maintained on
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will take all steps reasonably necessary to ensure that
                  Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  6. Disclosure of Your Personal Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Business Transactions</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Law enforcement</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Other legal requirements</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 ml-4">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  7. Security of Your Personal Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  8. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Services do not address anyone under the age of 10 and We
                  do not knowingly collect personally identifiable information
                  from anyone under the age of 10. If You are a parent or
                  guardian and You are aware that Your child has provided Us
                  with Personal Data, please contact Us. If We become aware that
                  We have collected Personal Data from anyone under the age of
                  10 without verification of parental consent, We take steps to
                  remove that information from Our servers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a
                  parent, We may require Your parent’s consent before We collect
                  and use that information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  9. Use of Aggregated Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use deidentified, anonymous, aggregated or statistical
                  information, in a form that does not enable the identification
                  of a specific user, to properly operate the Services, to
                  improve the quality of the Services, to enhance Your
                  experience, to create new services and features, including
                  customized services, to change or cancel existing content or
                  service, and for further internal, commercial and statistical
                  purposes (including advertising).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may also use deidentified, anonymous, aggregated or
                  statistical information collected on the Services, in a form
                  that does not enable the identification of a specific user, by
                  posting, disseminating, transmitting or otherwise
                  communicating or making available such information to users of
                  the Services, to the Services’ providers, partners and any
                  other third party. For example, GPS information that We
                  receive from Your mobile device may be provided to map editors
                  in an aggregated and/or anonymous form to help improve the map
                  and solve map problems, routes and safety information, or data
                  may be provided to governments for the purpose of improving
                  the bikeability of areas under their control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  10. Links to Other Websites
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Services may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party’s site. We strongly advise You
                  to review the privacy policy or privacy statement of every
                  website You visit.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  websites or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Policy is governed by the laws of the State of Rhode
                  Island, U.S.A. without giving effect to any principles of
                  conflict of law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  12. Your California Privacy Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  California Civil Code Section 1798.83 permits customers who
                  are California residents and who have provided Us with
                  “personal information” (as that term is defined in Section
                  1798.83) to request certain information about the disclosure
                  of that information to third parties for their direct
                  marketing purposes. Requests may be made only once a year and
                  are free of charge. If You are a California resident with
                  questions regarding this issue, please contact us at{" "}
                  <Link
                    to="mailto:hi@bikepointz.com"
                    className="text-blue-600 underline"
                  >
                    hi@bikepointz.com
                  </Link>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may request that We delete Personal Information that We
                  collected from You and to tell Our service providers to do the
                  same. If You would like to exercise Your right to delete
                  certain information, please contact us in accordance with
                  Section 15. Contact Us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  13. California Do Not Track Signals
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not currently take actions to respond to “Do Not Track”
                  (DNT) signals because a uniform technological standard has not
                  yet been developed. We continue to review new technologies and
                  may adopt a DNT standard once one is created. For information
                  about DNT, please visit:{" "}
                  <Link
                    to="http://www.allaboutdnt.org/"
                    className="text-blue-600 underline"
                  >
                    www.allaboutdnt.org
                  </Link>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  14. Changes to this Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may also let You know via email and/or a prominent notice
                  on the Services, prior to the change becoming effective and
                  update the “Last updated” date at the top of this Privacy
                  Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are responsible for ensuring We have an up-to-date active
                  and deliverable email address for You, and for periodically
                  visiting the Services and this Privacy Policy to check for any
                  changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  15. Specific Data Limitations for Minors in Authorized School
                  Programs
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For Minors using Our Services through an Authorized School
                  Program, the following strict data limitations apply to
                  safeguard student privacy:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All mechanisms for saving and sharing location data will be
                  turned off for these accounts. This means minors will not be
                  able to save or see their past routes, and Pointz will not
                  save data on the start, end, or specific points on routes
                  searched or taken. Pointz will also not retain the search
                  history of start or end locations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These specific limitations are implemented to ensure that
                  personal location history and search data of Minors
                  participating in an Authorized School Program are not
                  collected or retained by Pointz, aligning with the highest
                  standards of student data privacy and the specific
                  requirements of the School.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any Personal Data collected from Minors in Authorized School
                  Programs will be used strictly for the educational purposes of
                  that program, as agreed upon with the School. We will not use
                  such data for targeted advertising, creating commercial
                  profiles of Minors, or for any other purpose inconsistent with
                  applicable student privacy laws, including COPPA and FERPA.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Personal Data collected from Minors in an Authorized School
                  Program will be retained only for as long as necessary to
                  fulfill the educational purposes for which it was collected,
                  or as required by the agreement with the School and applicable
                  law. Upon the conclusion of the Authorized School Program or
                  as requested by the School/parent/guardian, We will delete or
                  de-identify such Personal Data in accordance with our data
                  retention policies and legal obligations, unless specific
                  instructions from the School or legal requirements dictate
                  otherwise.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">16. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If You have any questions about Our Privacy Policy, do not
                  hesitate to contact Us by emailing{" "}
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

export default Privacy;

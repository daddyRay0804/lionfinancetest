import type { Metadata } from "next";
import { footerLegal } from "@/data/content";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: { params: { lang: string } }): Promise<Metadata> {
  const lang = isValidLang(params.lang) ? params.lang : "en";
  const title = footerLegal.terms[lang as Lang];
  return { title: `${title} | Lion Finance`, description: title };
}

export default function TermsPage({ params }: { params: { lang: string } }) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-lion-dark [&_a]:text-lion-gold [&_a]:hover:underline [&_a]:break-all">
        <h1 className="text-4xl font-bold text-lion-navy mb-6">
          {footerLegal.terms[lang]}
        </h1>

        <p className="mb-10 leading-relaxed">
          This website provides you with general information that is true and accurate to the best of Lion Financial Services Limited&apos;s knowledge. We advise you that:
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            General information only
          </h2>
          <p className="leading-relaxed">
            The information on this website is general in nature and is not intended to be personalised financial advice. You should consult a professional financial adviser before making any financial decisions or taking any action based on the information on this website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            No liability
          </h2>
          <p className="leading-relaxed">
            Lion Financial Services Limited does not accept any liability for any loss or damage arising from the use of this website. This does not prejudice your statutory rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Accuracy of information
          </h2>
          <p className="leading-relaxed">
            While Lion Financial Services Limited has taken all reasonable care to ensure the information on this website is accurate, errors and omissions may occur. We do not accept any responsibility for any inaccuracy, error or omission in the website&apos;s content, or for any loss caused to anyone from relying on that information. We may change, delete, add to or otherwise amend the information published on this website without notice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Historical information
          </h2>
          <p className="leading-relaxed">
            Any reference on this website to historical information and performance of a product or service may not necessarily be a good guide to future performance. You are solely responsible for any loss caused from relying on such information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Third-party websites
          </h2>
          <p className="leading-relaxed">
            This website may contain links to other websites which are not under our control. Lion Financial Services Limited has no knowledge of or control over the content, and availability of those websites, or of their privacy practices. We do not sponsor, recommend, or endorse the content of other websites linked to, or referenced from, this website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            New Zealand law
          </h2>
          <p className="leading-relaxed">
            The information on this website has been prepared to comply with, and is governed by New Zealand law. It is only intended for use by persons within New Zealand&apos;s jurisdiction. Lion Financial Services Limited does not make any representation that the information on this website complies with the law in any other country.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Cybersecurity
          </h2>
          <p className="leading-relaxed">
            Although we regularly update our cybersecurity and virus protection software, we do not guarantee that our website will be free from viruses or other malicious interference (such as spyware, malware, adware, ransomware and worms) that can damage your computer system and access your data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Continuous access
          </h2>
          <p className="leading-relaxed">
            We do our best to keep this website running smoothly. However, we do not guarantee that access to the website will be uninterrupted. We accept no liability for any loss caused by the website being temporarily unavailable either during its planned maintenance or due to technical or other issues beyond our control.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Copyright and IP
          </h2>
          <p className="leading-relaxed">
            Unless otherwise indicated, all information on this website is the property of Lion Financial Services Limited and is protected by copyright and intellectual property laws. Unless stated otherwise, you may access and download the materials located on this website only for personal, or agreed upon commercial use. The website may contain a number of trademarks which are owned by Lion Financial Services Limited or used with the permission of the registered trademark owner. Before using any material on this website that is identified as being subject to the copyright of a third party, you must obtain authorisation to use or reproduce the material from that third party.
          </p>
        </section>

        <h2 className="text-2xl font-semibold text-lion-navy mt-12 mb-6 border-b border-lion-gold/30 pb-2">
          Privacy Policy
        </h2>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Introduction
          </h3>
          <p className="mb-4 leading-relaxed">
            Lion Financial Services Ltd (we, us, our) complies with the New Zealand Privacy Act 2020 (the Act) when dealing with personal information. Personal information is information about an identifiable individual (a natural person). This policy sets out how we will collect, use, disclose and protect your personal information.
          </p>
          <p className="leading-relaxed">
            This policy does not limit or exclude any of your rights under the Act. If you wish to seek further information on the Act, you can contact our Privacy Officer by email on{" "}
            <a href="mailto:info@lionfinance.co.nz">info@lionfinance.co.nz</a>. Or visit{" "}
            <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer">www.privacy.org.nz</a> for further information.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Changes to this policy
          </h3>
          <p className="leading-relaxed">
            We may change this policy by uploading a revised policy onto the website. The change will apply from the date that we upload the revised policy.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            What is personal information?
          </h3>
          <p className="leading-relaxed">
            Personal information is information about an identifiable individual. It includes (but is not limited to) name, address, contact details, date of birth, occupations, payment details, employment history and/or details, education and qualifications, financial information, testimonials and feedback, evidence of source of funds or source of wealth (in some cases) and other information.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            How we use your personal information
          </h3>
          <p className="mb-2 leading-relaxed">We will use your personal information:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>to verify your identity</li>
            <li>to provide services and products to you</li>
            <li>to market our services and products to you, including contacting you electronically (e.g. by call, text or email for this purpose)</li>
            <li>to improve the services and products that we provide to you</li>
            <li>to respond to communications from you, including a complaint</li>
            <li>to protect and/or enforce our legal rights and interests, including defending any claim</li>
            <li>for any other purpose authorised by you or the Act</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Disclosing your personal information
          </h3>
          <p className="mb-2 leading-relaxed">We may disclose your personal information to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>other companies or individuals who assist us in providing services or who perform functions on our behalf (such as mailing houses, hosting and data storage providers, specialist consultants and legal advisers)</li>
            <li>product providers (such as but not limited to lenders and insurance companies)</li>
            <li>financial advisers and financial advice providers who may use our services</li>
            <li>other companies or individuals who perform checks (such as but not limited to compliance reviews and audits) that are necessary or desirable under law on our behalf</li>
            <li>other companies, agencies or individuals that maintain databases against which your identity may be verified, which may include (but is not limited to) the New Zealand Department of Internal Affairs, and New Zealand Transport Agency</li>
            <li>social media sites on which we may have a presence</li>
            <li>courts, tribunals and regulatory authorities (such as the Financial Markets Authority, and Ministry of Justice in New Zealand)</li>
            <li>Office of the Ombudsman, where a complaint relates to official information</li>
            <li>any person or agency we believe could assist in responding to a serious privacy breach</li>
            <li>Office of the New Zealand Privacy Commissioner, where a complaint relates to breach of the Privacy Act 2020</li>
            <li>Human Rights Commission, where a complaint relates to discrimination</li>
            <li>CERT NZ, where appropriate to assist with the management of a voluntarily notified privacy breach</li>
            <li>overseas privacy regulator, where a complaint relates to the actions of an overseas agency</li>
            <li>anyone else to whom you authorise us to disclose it</li>
          </ul>
          <p className="leading-relaxed">
            Except as described above, we will not disclose your personal information without your written or oral consent, unless we are required to do so by applicable law.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Protecting your personal information
          </h3>
          <p className="leading-relaxed">
            We will take reasonable steps to keep your personal information safe from loss, unauthorised activity, or other misuse. Our software is subject to audits to ensure it is continuing to meet security requirements. All data handled in our software is encrypted in transit and during storage and can only be accessed over secure network connections.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Storing your personal information
          </h3>
          <p className="mb-4 leading-relaxed">
            We will only retain personal information as long as it is required for the purposes for which the information may lawfully be used. All data stored online is backed up and can be retrieved in the event of data loss or corruption.
          </p>
          <p className="leading-relaxed">
            Data will sometimes be held on-premise at office — 2/24 Aberfeldy Ave, Highland Park, Auckland 2010 — if it is provided to us outside of our software.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Accessing and correcting your personal information
          </h3>
          <p className="mb-4 leading-relaxed">
            Subject to certain grounds for refusal set out in the Act, you have the right to access your readily retrievable personal information that we hold and to request a correction to your personal information. Before you exercise this right, we will need evidence to confirm that you are the individual to whom the personal information relates.
          </p>
          <p className="mb-4 leading-relaxed">
            In respect of a request for correction, if we think the correction is reasonable and we are reasonably able to change the personal information, we will make the correction. If we do not make the correction, we will take reasonable steps to note on the personal information that you requested the correction.
          </p>
          <p className="leading-relaxed">
            If you want to exercise either of the above rights, email us at{" "}
            <a href="mailto:info@lionfinance.co.nz">info@lionfinance.co.nz</a>. Your email should provide evidence of who you are and set out the details of your request (e.g. the personal information, or the correction, that you are requesting).
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Data Breaches
          </h3>
          <p className="leading-relaxed">
            Our Privacy Officer has processes and systems in place in the unfortunate event of a data breach. If such an event occurs, we will promptly identify, report and examine a personal data breach.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
            Internet use
          </h3>
          <p className="mb-4 leading-relaxed">
            While we take reasonable steps to maintain secure internet connections, if you provide us with personal information over the internet, the provision of that information is at your own risk.
          </p>
          <p className="mb-4 leading-relaxed">
            If you follow a link on our website to another site, the owner of that site will have its own privacy policy relating to your personal information. We suggest you review that site&apos;s privacy policy before you provide personal information.
          </p>
          <p className="mb-4 leading-relaxed">
            We use cookies (an alphanumeric identifier that we transfer to your computer&apos;s hard drive so that we can recognise your browser) to monitor your use of the website. You may disable cookies by changing the settings on your browser, although this may mean that you cannot use all of the features of the website.
          </p>
          <p className="mb-4 leading-relaxed">
            We may use information about your use of our websites and other IT systems to prevent unauthorised access or attacks on our software. We may utilise services from one or more third party suppliers to monitor use of our systems. These third-party suppliers will have access to monitoring and logging information as well as information processed on our websites and other IT systems.
          </p>
          <p className="leading-relaxed">
            We can make changes to our Privacy Statement from time to time, and this will be available on our website. It is your responsibility to check this information.
          </p>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Statement or your personal information, please contact us.
          </p>
        </section>
      </div>
    </article>
  );
}

import React from "react";
import Link from "next/link";

export default function PrivacyContent() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-12 lg:mb-16 border-b border-[#4D5A51]/20 pb-10">
        <h1 className="text-[#4D5A51] text-4xl lg:text-6xl font-medium">
          Privacy Policy
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
          <p className="text-[#6E7D66] text-xl lg:text-2xl font-medium">
            Neurolinq Limited
          </p>
          <span className="hidden lg:block text-[#4D5A51]/40">•</span>
          <p className="text-[#6E7D66] text-lg lg:text-xl">
            Last updated: 18th November 2025
          </p>
        </div>
        <p className="text-[#333] text-lg lg:text-xl mt-4 leading-relaxed max-w-4xl">
          Neurolinq Limited (“we”, “us”, “our”) is committed to safeguarding
          your privacy, confidentiality and personal data. This Privacy Policy
          explains how we collect, use, store and protect your information when
          you access our website or use our clinical services. By using our
          services, you acknowledge that you have read and understood this
          policy.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-10 lg:space-y-14">
        {/* 1. Who we are */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            1. Who we are
          </h2>
          <p className="text-[#333] text-lg lg:text-xl leading-relaxed">
            Neurolinq Limited is a UK-based provider of remote
            neurodevelopmental assessments, ADHD diagnosis and prescribing
            services for adults.
          </p>
          <div className="bg-[#E2E4D6] rounded-xl p-6 lg:p-8 flex flex-col gap-3 mt-4">
            <p className="text-[#4D5A51] text-lg font-medium">
              <span className="font-bold">Correspondence Address:</span>{" "}
              Neurolinq Limited, 124–128 City Road, London, EC1V 2NX
              (correspondence only — all appointments are conducted remotely)
            </p>
            <p className="text-[#4D5A51] text-lg font-medium">
              <span className="font-bold">Contact Email:</span>{" "}
              <a href="mailto:admin@neurolinq.co.uk" className="underline">
                admin@neurolinq.co.uk
              </a>
            </p>
            <p className="text-[#4D5A51] text-lg font-medium">
              <span className="font-bold">Data Protection Lead:</span>{" "}
              <a href="mailto:admin@neurolinq.co.uk" className="underline">
                admin@neurolinq.co.uk
              </a>
            </p>
            <p className="text-[#4D5A51] text-lg italic mt-2">
              We are registered with the Information Commissioner’s Office (ICO)
              as a data controller.
            </p>
          </div>
        </section>

        {/* 2. Information we collect */}
        <section className="space-y-6">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            2. Information we collect
          </h2>
          <p className="text-[#333] text-lg">
            We may collect information including, but not limited to:
          </p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="border border-[#6E7D66]/30 rounded-xl p-5">
              <h3 className="text-[#4D5A51] font-bold text-xl mb-3">
                Personal Identification
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[#333] text-lg">
                <li>Name</li>
                <li>Date of birth</li>
                <li>Contact details (address, email, phone)</li>
                <li>Emergency contact</li>
              </ul>
            </div>
            <div className="border border-[#6E7D66]/30 rounded-xl p-5">
              <h3 className="text-[#4D5A51] font-bold text-xl mb-3">
                Clinical / Medical Information
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[#333] text-lg">
                <li>Medical and psychiatric history</li>
                <li>Neurodevelopmental history</li>
                <li>Medication history</li>
                <li>GP details & clinical letters</li>
                <li>Assessment reports and consultation notes</li>
                <li>Safeguarding and risk information where relevant</li>
              </ul>
            </div>
            <div className="border border-[#6E7D66]/30 rounded-xl p-5">
              <h3 className="text-[#4D5A51] font-bold text-xl mb-3">
                Financial Information
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[#333] text-lg">
                <li>
                  Payment information (processed securely — we do not store card
                  details)
                </li>
              </ul>
            </div>
            <div className="border border-[#6E7D66]/30 rounded-xl p-5">
              <h3 className="text-[#4D5A51] font-bold text-xl mb-3">
                Technical / Website Data
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-[#333] text-lg">
                <li>IP address</li>
                <li>Browser/device details</li>
                <li>Cookie usage & analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. How we collect information */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            3. How we collect information
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>Online registration and contact forms</li>
            <li>Clinical questionnaires</li>
            <li>Video consultations</li>
            <li>Email and telephone correspondence</li>
            <li>Third-party referrals (with consent)</li>
            <li>Website analytics cookies</li>
          </ul>
        </section>

        {/* 4. Legal basis for processing */}
        <section className="space-y-6">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            4. Legal basis for processing personal data
          </h2>
          <p className="text-[#333] text-lg">
            We process personal data based on the following lawful bases:
          </p>
          <div className="overflow-hidden rounded-xl border border-[#6E7D66]">
            <table className="w-full text-left text-lg">
              <thead className="bg-[#6E7D66] text-white">
                <tr>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#E2E4D6]">
                <tr>
                  <td className="p-4 text-[#4D5A51] font-bold">
                    Clinical data
                  </td>
                  <td className="p-4 text-[#333]">
                    Article 6(1)(e) public task & Article 9(2)(h) medical
                    diagnosis/healthcare
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-bold">
                    General personal data
                  </td>
                  <td className="p-4 text-[#333]">
                    Article 6(1)(b) contract for healthcare services
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-bold">
                    Invoicing, accounting
                  </td>
                  <td className="p-4 text-[#333]">
                    Article 6(1)(c) legal obligation
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-bold">
                    Marketing emails
                  </td>
                  <td className="p-4 text-[#333]">Article 6(1)(a) consent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#333] text-lg italic">
            We only request information that is necessary for safe and effective
            healthcare.
          </p>
        </section>

        {/* 5. How your information is used */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            5. How your information is used
          </h2>
          <p className="text-[#333] text-lg">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>
              Deliver neurodevelopmental assessments, diagnosis and treatment
            </li>
            <li>Prescribe and titrate medication safely</li>
            <li>Share clinical updates with your GP (with consent)</li>
            <li>Arrange prescriptions and pharmacy dispensing</li>
            <li>Manage bookings and communicate about your care</li>
            <li>Maintain legal medical records</li>
            <li>Process payments and invoices</li>
            <li>Improve service quality and safety</li>
          </ul>
          <p className="text-[#333] font-bold text-lg mt-2">
            We do NOT share or sell data for marketing purposes.
          </p>
        </section>

        {/* 6. Sharing of information */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            6. Sharing of information
          </h2>
          <p className="text-[#333] text-lg">We may share information with:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>Your GP or NHS healthcare providers</li>
            <li>Pharmacies dispensing your prescription</li>
            <li>Other Neurolinq clinicians involved in your care</li>
            <li>Emergency services if there is a concern about serious harm</li>
            <li>Regulators where required by law</li>
            <li>Payment providers (for billing only)</li>
            <li>Secure IT system providers (EHR, video platform, email)</li>
          </ul>
          <p className="text-[#333] text-lg italic">
            All third-party providers used by Neurolinq must comply with UK
            GDPR.
          </p>
        </section>

        {/* 7. International data transfers */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            7. International data transfers
          </h2>
          <p className="text-[#333] text-lg">
            Where technology providers store data outside the UK, we ensure
            appropriate safeguards exist using UK adequacy regulations or
            Standard Contractual Clauses (SCCs).
          </p>
        </section>

        {/* 8. Data storage & retention */}
        <section className="space-y-6">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            8. Data storage & retention
          </h2>
          <p className="text-[#333] text-lg">
            Your information is stored securely. We retain your information for
            the minimum time legally required:
          </p>
          <div className="overflow-hidden rounded-xl border border-[#6E7D66]">
            <table className="w-full text-left text-lg">
              <thead className="bg-[#6E7D66] text-white">
                <tr>
                  <th className="p-4 font-medium">Record Type</th>
                  <th className="p-4 font-medium">Retention</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#E2E4D6]">
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    Adult clinical records
                  </td>
                  <td className="p-4 text-[#333]">
                    Minimum 8 years after last contact
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    Prescription records
                  </td>
                  <td className="p-4 text-[#333]">10 years</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    Financial transactions
                  </td>
                  <td className="p-4 text-[#333]">6 years</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    Non-clinical website enquiries
                  </td>
                  <td className="p-4 text-[#333]">6 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#333] text-lg">
            After this, data is anonymised or securely deleted.
          </p>
        </section>

        {/* 9. Your rights */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            9. Your rights
          </h2>
          <p className="text-[#333] text-lg">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>Access your personal records</li>
            <li>Request corrections</li>
            <li>Request deletion (where legally appropriate)</li>
            <li>Restrict processing</li>
            <li>Object to certain processing</li>
            <li>Request transfer of your data</li>
            <li>Withdraw consent for marketing at any time</li>
          </ul>
          <div className="bg-[#F5F5F5] p-5 rounded-xl mt-4">
            <p className="text-[#333] text-lg">
              To exercise these rights, contact:{" "}
              <a
                href="mailto:admin@neurolinq.co.uk"
                className="text-[#D4AF84] font-bold hover:underline"
              >
                admin@neurolinq.co.uk
              </a>
            </p>
            <p className="text-[#333] text-lg mt-1">
              We will respond within 30 days.
            </p>
          </div>
        </section>

        {/* 10. Security */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            10. Security
          </h2>
          <p className="text-[#333] text-lg">
            We take data protection seriously and use multiple safeguards,
            including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>Encrypted clinical record systems</li>
            <li>Secure email communication for clinical correspondence</li>
            <li>Multi-factor authentication</li>
            <li>Role-based access control</li>
            <li>Regular monitoring and auditing</li>
          </ul>
          <p className="text-[#333] text-lg italic">
            Only authorised staff involved in your care have access to your
            information.
          </p>
        </section>

        {/* 11. Cookies */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            11. Cookies & website analytics
          </h2>
          <p className="text-[#333] text-lg">
            Our website uses cookies to improve user experience and analyse
            performance. Cookies may collect information such as IP address,
            browser type, pages viewed, and time spent on the website.
          </p>
          <p className="text-[#333] text-lg">
            You can choose to accept all cookies or manage your preferences via
            our cookie banner. Essential cookies cannot be disabled as they are
            required for the website to function.
          </p>
        </section>

        {/* 12. Complaints */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            12. Complaints
          </h2>
          <p className="text-[#333] text-lg">
            If you have concerns about how your data is used, please contact us
            first so we can resolve the matter via{" "}
            <a href="mailto:admin@neurolinq.co.uk" className="underline">
              admin@neurolinq.co.uk
            </a>
            .
          </p>
          <p className="text-[#333] text-lg">
            You also have the right to contact the{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF84] hover:underline"
            >
              Information Commissioner’s Office (ICO)
            </a>{" "}
            for further support.
          </p>
        </section>

        {/* 13. Changes */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            13. Changes to this policy
          </h2>
          <p className="text-[#333] text-lg">
            We may update this policy from time to time to reflect legal,
            clinical or operational changes. The most recent version will always
            be published on this page.
          </p>
        </section>
      </div>
    </div>
  );
}

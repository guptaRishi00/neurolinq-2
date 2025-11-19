import React from "react";
import Link from "next/link";

export default function TermsContent() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-12 lg:mb-16 border-b border-[#4D5A51]/20 pb-10">
        <h1 className="text-[#4D5A51] text-4xl lg:text-6xl font-medium">
          Terms & Conditions
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
          These Terms and Conditions (“Terms”) set out the agreement between
          Neurolinq Limited (“we”, “us”, “our”) and individuals using our
          services (“you”, “the client”, “the patient”). By booking any service
          with Neurolinq Limited, you confirm that you have read, understood and
          agree to these Terms.
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
            Neurolinq Limited provides remote ADHD assessments, diagnosis and
            prescribing services for adults across the UK.
          </p>
          <div className="bg-[#E2E4D6] rounded-xl p-6 lg:p-8 flex flex-col gap-3 mt-4">
            <p className="text-[#4D5A51] text-lg font-medium">
              <span className="font-bold">Correspondence Address:</span>{" "}
              Neurolinq Limited, 124–128 City Road, London, EC1V 2NX
              (correspondence only — appointments are online only)
            </p>
            <p className="text-[#4D5A51] text-lg font-medium">
              <span className="font-bold">Contact:</span>{" "}
              <a href="mailto:admin@neurolinq.co.uk" className="underline">
                admin@neurolinq.co.uk
              </a>
            </p>
          </div>
        </section>

        {/* 2. Eligibility */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            2. Eligibility for services
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-[#4D5A51] font-bold mb-3 text-lg">
                Our services are available to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
                <li>Adults aged 18 and above</li>
                <li>Individuals residing in the United Kingdom</li>
                <li>Individuals registered with a UK GP</li>
              </ul>
            </div>
            <div>
              <p className="text-[#4D5A51] font-bold mb-3 text-lg">
                We do NOT provide services to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
                <li>Individuals under the age of 18</li>
                <li>Clients located outside the UK</li>
                <li>Individuals without a registered UK GP</li>
              </ul>
            </div>
          </div>
          <p className="text-[#333] text-lg italic mt-2">
            We reserve the right to decline or discontinue treatment where it is
            clinically inappropriate or unsafe.
          </p>
        </section>

        {/* 3. Nature of services */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            3. Nature of services
          </h2>
          <p className="text-[#333] text-lg lg:text-xl mb-2">
            Neurolinq Limited provides:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg lg:text-xl">
            <li>ADHD assessments</li>
            <li>Diagnosis</li>
            <li>
              Medication initiation and titration (where clinically appropriate)
            </li>
            <li>
              Ongoing prescribing (subject to treatment plan and eligibility)
            </li>
          </ul>
          <p className="text-[#333] text-lg mt-2 bg-[#F5F5F5] p-4 rounded-lg inline-block">
            All appointments are conducted online via secure video consultation.
          </p>
        </section>

        {/* 4. Medication prescribing */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            4. Medication prescribing
          </h2>
          <p className="text-[#333] text-lg font-bold">
            Medication will only be prescribed when:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>It is clinically indicated and safe</li>
            <li>Full assessment has been completed</li>
            <li>You provide accurate medical information</li>
            <li>
              You agree to engage with monitoring and follow-up appointments
            </li>
          </ul>
          <p className="text-[#333] text-lg mt-2">
            Different prescribers may make different clinical decisions;
            prescribing is not guaranteed.
          </p>

          <div className="mt-4">
            <p className="text-[#4D5A51] font-bold mb-2 text-lg">
              We reserve the right to withhold, pause or discontinue medication
              if:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
              <li>You do not attend required monitoring appointments</li>
              <li>You do not provide up-to-date GP details</li>
              <li>There are safeguarding, substance misuse or risk concerns</li>
              <li>There are medical risks or contraindications</li>
              <li>You do not follow treatment guidance</li>
            </ul>
          </div>
        </section>

        {/* 5. GP notification */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            5. GP notification
          </h2>
          <p className="text-[#333] text-lg">
            To ensure safe prescribing, Neurolinq Limited requires details of
            your registered GP and consent to notify them of your diagnosis and
            treatment.
          </p>
          <p className="text-[#333] text-lg">
            In rare situations where you refuse GP sharing, we reserve the right
            to decline treatment, including prescribing.
          </p>
        </section>

        {/* 6. Fees and payment */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            6. Fees and payment
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>All fees must be paid in full at the time of booking.</li>
            <li>
              We do not accept insurance reimbursement directly (you may
              self-claim if eligible).
            </li>
            <li>Payment is made via our secure online payment system.</li>
            <li>
              No prescriptions or reports can be issued until all fees have been
              paid.
            </li>
            <li>
              Pricing may change from time to time but fees already paid remain
              valid.
            </li>
          </ul>
        </section>

        {/* 7. Cancellation */}
        <section className="space-y-6">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            7. Cancellation, rescheduling and non-attendance
          </h2>
          <p className="text-[#333] text-lg">
            You may reschedule or cancel appointments subject to the notice
            periods below:
          </p>
          <div className="overflow-hidden rounded-xl border border-[#6E7D66]">
            <table className="w-full text-left text-lg">
              <thead className="bg-[#6E7D66] text-white">
                <tr>
                  <th className="p-4 font-medium">Notice given</th>
                  <th className="p-4 font-medium">Refund / reschedule</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#E2E4D6]">
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    48+ hours before appointment
                  </td>
                  <td className="p-4 text-[#333]">
                    Full refund or free reschedule
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    Less than 48 hours
                  </td>
                  <td className="p-4 text-[#333]">
                    No refund; rescheduling requires full repayment
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#4D5A51] font-medium">
                    Failure to attend
                  </td>
                  <td className="p-4 text-[#333]">
                    No refund; appointment forfeited
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>Refunds may take up to 10 working days to process.</li>
            <li>
              If we must cancel your appointment, you will be offered the
              earliest alternative date or a full refund.
            </li>
          </ul>
        </section>

        {/* 8. Client responsibilities */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            8. Client responsibilities
          </h2>
          <p className="text-[#333] text-lg">
            To engage in treatment safely, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>Provide truthful and complete medical information</li>
            <li>Attend all required review appointments</li>
            <li>Inform us of medication side effects or adverse changes</li>
            <li>
              Notify us immediately of risk concerns or changes in wellbeing
            </li>
            <li>
              Avoid the use of illicit substances or non-prescribed stimulants
              while receiving treatment
            </li>
          </ul>
          <p className="text-[#D4AF84] font-bold text-lg mt-2">
            Providing false or misleading information may result in immediate
            termination of treatment.
          </p>
        </section>

        {/* 9. Crisis */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            9. Crisis and emergency situations
          </h2>
          <p className="text-[#333] text-lg">
            Neurolinq Limited does <strong>not</strong> provide crisis,
            emergency or urgent mental health services. If you are in crisis or
            feeling unsafe, please contact:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>NHS 111 / your local crisis line</li>
            <li>Your GP</li>
            <li>Emergency services via 999 if there is immediate risk</li>
          </ul>
        </section>

        {/* 10. Reports */}
        <section className="space-y-4">
          <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
            10. Reports and documentation
          </h2>
          <p className="text-[#333] text-lg">
            Assessment reports and letters to your GP will be issued:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
            <li>After full payment has been received</li>
            <li>After the completion of the clinical assessment</li>
            <li>
              Within the standard timeframe communicated at the appointment
              (usually 7–21 working days)
            </li>
          </ul>
        </section>

        {/* 11, 12, 13, 14, 15 Mixed Group */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
              11. Transfer of care
            </h2>
            <p className="text-[#333] text-lg">
              If you wish to transfer your ADHD treatment to the NHS or another
              provider, we will provide reports to support the transition. There
              is no guarantee that another provider will continue prescribing.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
              12. Data protection
            </h2>
            <p className="text-[#333] text-lg">
              We process your personal data in accordance with UK GDPR and the
              Data Protection Act 2018. Full details can be found in our{" "}
              <Link href="#" className="text-[#D4AF84] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
              13. Limitation of liability
            </h2>
            <p className="text-[#333] text-lg">
              While we take all reasonable steps to ensure safe care, Neurolinq
              Limited is not liable for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
              <li>
                Outcomes resulting from inaccurate or incomplete information
                provided by you
              </li>
              <li>Delays caused by third parties (e.g., pharmacies or GPs)</li>
              <li>Technical issues that interrupt remote sessions</li>
            </ul>
            <p className="text-[#333] text-lg">
              Nothing in these Terms limits liability where it cannot legally be
              excluded.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
              14. Variations to these Terms
            </h2>
            <p className="text-[#333] text-lg">
              We may update these Terms occasionally to reflect legal, clinical
              or operational changes. The most current version will always be
              available on our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-[#4D5A51] text-2xl lg:text-3xl font-bold">
              15. Acceptance of Terms
            </h2>
            <p className="text-[#333] text-lg">
              By booking and attending an appointment with Neurolinq Limited,
              you confirm that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#333] text-lg">
              <li>You understand these Terms and Conditions</li>
              <li>
                You give informed consent to engage in assessment and/or
                treatment
              </li>
              <li>
                You agree to comply with the responsibilities outlined in this
                policy
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

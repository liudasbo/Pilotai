import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

const APPLICABLE_LAWS = [
  "The Civil Code of the Republic of Lithuania",
  "The Law on Aviation of the Republic of Lithuania",
  "Regulations of the Lithuanian Transport Safety Administration (LTSA)",
  "Applicable European Union aviation regulations",
  "The Law on Legal Protection of Personal Data of the Republic of Lithuania",
  "Regulation (EU) 2016/679 (GDPR)",
];

const PROGRAM_INCLUDES = [
  "Twenty-five (25) flight training hours",
  "One (1) official practical skill examination",
  "Eight (8) mandatory theoretical subjects required by Lithuanian ultralight aviation regulations",
  "Use of designated ultralight aircraft (including Bristell NG5, 2025 model where applicable)",
  "Fuel (petrol)",
  "Airport landing and entry fees",
  "Aviation headset and training attire",
  "Accommodation in selected apartments, hotels, or resort stays",
  "Health insurance coverage during the official training period",
];

const FITNESS_OBLIGATIONS = [
  "Maintaining physical and psychological fitness throughout the Program",
  "Informing the Company of any medical changes that may affect flight safety",
];

const PARTICIPANT_COMPLIANCE = [
  "Instructor instructions",
  "Aircraft operational limitations",
  "Airport and airspace regulations",
  "Safety protocols",
];

const INSTRUCTOR_AUTHORITY = [
  "Flight continuation",
  "Weather assessment",
  "Operational safety",
  "Participant readiness",
];

const ACCOMMODATION_CONDUCT = [
  "Respect property rules",
  "Avoid disruptive behavior",
  "Maintain adequate rest before flight sessions",
];

const LIABILITY_EXCLUSIONS = [
  "Indirect or consequential losses",
  "Lost income",
  "Emotional distress",
  "Third-party service failures",
];

const INDEMNIFICATION_SCOPE = [
  "Violation of this Policy",
  "Negligent or unlawful conduct",
  "False declarations",
];

const FORCE_MAJEURE_CASES = [
  "Weather",
  "Government action",
  "Regulatory restrictions",
  "Airport closures",
  "Technical safety issues",
];

function PolicySectionTitle({ children }) {
  return (
    <h2 className="m-0 text-num-16 leading-num-24 font-semibold text-darkslategray-100 uppercase">
      {children}
    </h2>
  );
}

function PolicySubTitle({ children }) {
  return (
    <h3 className="m-0 text-num-16 leading-num-24 font-medium text-darkslategray-100">
      {children}
    </h3>
  );
}

function PolicyParagraph({ children }) {
  return (
    <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
      {children}
    </p>
  );
}

function PolicyList({ items }) {
  return (
    <ul className="m-0 pl-[21px] text-num-16 leading-num-24 text-darkslategray-100 font-jost list-disc">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PilotLicensePolicyPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden motion-scope">
      <Header textColor="black" topSocialGray />

      <main className="w-full bg-white pt-[120px] sm:pt-[136px] xl:pt-[221px] pb-12 sm:pb-16 xl:pb-[97px] px-4 sm:px-6 xl:px-num-119">
        <Container className="prose-legal flex flex-col items-start gap-5 text-left">
          <h1 className="m-0 max-w-[860px] text-[30px] leading-[36px] desktop:text-num-37 desktop:leading-num-42 tracking-num-0_56 uppercase font-medium text-black">
            Ultralight Pilot Training Program Policy
          </h1>

          <PolicyParagraph>
            <strong>Republic of Lithuania</strong>
          </PolicyParagraph>

          <PolicyParagraph>
            This Program Policy (hereinafter - the &quot;Policy&quot;) governs
            participation in the Ultralight Pilot Training Program (hereinafter
            - the &quot;Program&quot;) organized and operated in the Republic of
            Lithuania (hereinafter - the &quot;Company&quot;).
          </PolicyParagraph>
          <PolicyParagraph>The Program is conducted in accordance with:</PolicyParagraph>
          <PolicyList items={APPLICABLE_LAWS} />
          <PolicyParagraph>
            By enrolling in the Program, the participant confirms that they have read, understood, and accepted this Policy.
          </PolicyParagraph>

          <PolicySectionTitle>1. Program Objective and Structure</PolicySectionTitle>
          <PolicySubTitle>1.1 Objective</PolicySubTitle>
          <PolicyParagraph>
            The Program is designed to provide theoretical and practical training necessary for qualification toward an Ultralight Pilot License in Lithuania, subject to regulatory approval and participant performance.
          </PolicyParagraph>
          <PolicySubTitle>1.2 Program Includes</PolicySubTitle>
          <PolicyList items={PROGRAM_INCLUDES} />
          <PolicySubTitle>1.3 Duration</PolicySubTitle>
          <PolicyParagraph>
            The approximate duration of the Program is twenty (20) days. The Company reserves the right to adjust scheduling due to operational, weather, technical, or regulatory requirements.
          </PolicyParagraph>
          <PolicySubTitle>1.4 No License Guarantee</PolicySubTitle>
          <PolicyParagraph>
            The Company does not guarantee successful completion of training or issuance of a pilot license. License issuance is subject to regulatory authority evaluation and individual performance.
          </PolicyParagraph>

          <PolicySectionTitle>2. Eligibility and Medical Requirements</PolicySectionTitle>
          <PolicySubTitle>2.1 Minimum Age</PolicySubTitle>
          <PolicyParagraph>
            Participants must be at least sixteen (16) years of age at the time of program commencement.
          </PolicyParagraph>
          <PolicySubTitle>2.2 Medical Certification</PolicySubTitle>
          <PolicyParagraph>
            Participants must hold a valid aviation Medical Certificate issued by an authorized medical examiner prior to engaging in any flight activity.
          </PolicyParagraph>
          <PolicySubTitle>2.3 Ongoing Fitness Obligation</PolicySubTitle>
          <PolicyParagraph>Participants are solely responsible for:</PolicyParagraph>
          <PolicyList items={FITNESS_OBLIGATIONS} />
          <PolicySubTitle>2.4 Right to Suspend</PolicySubTitle>
          <PolicyParagraph>
            If an instructor or authorized representative reasonably determines that a participant is medically or psychologically unfit to fly, flight operations may be suspended immediately. Such suspension shall not constitute breach of service.
          </PolicyParagraph>
          <PolicySubTitle>2.5 Non-Disclosure</PolicySubTitle>
          <PolicyParagraph>
            Failure to disclose relevant medical conditions releases the Company from liability to the extent permitted under Lithuanian law.
          </PolicyParagraph>

          <PolicySectionTitle>3. Compliance with Aviation Law</PolicySectionTitle>
          <PolicySubTitle>3.1 Regulatory Compliance</PolicySubTitle>
          <PolicyParagraph>
            All flight activities are conducted in accordance with Lithuanian aviation legislation and LTSA regulations.
          </PolicyParagraph>
          <PolicySubTitle>3.2 Participant Obligations</PolicySubTitle>
          <PolicyParagraph>Participants must comply with:</PolicyParagraph>
          <PolicyList items={PARTICIPANT_COMPLIANCE} />
          <PolicySubTitle>3.3 Instructor Authority</PolicySubTitle>
          <PolicyParagraph>The instructor in command has final authority regarding:</PolicyParagraph>
          <PolicyList items={INSTRUCTOR_AUTHORITY} />
          <PolicyParagraph>Such decisions are binding.</PolicyParagraph>

          <PolicySectionTitle>4. Zero Alcohol and Prohibited Substances</PolicySectionTitle>
          <PolicySubTitle>4.1 Alcohol</PolicySubTitle>
          <PolicyParagraph>
            Alcohol consumption prior to or during any aviation-related activity is strictly prohibited.
          </PolicyParagraph>
          <PolicySubTitle>4.2 Prohibited Substances</PolicySubTitle>
          <PolicyParagraph>
            Use of narcotics or performance-impairing substances is strictly prohibited.
          </PolicyParagraph>
          <PolicySubTitle>4.3 Enforcement</PolicySubTitle>
          <PolicyParagraph>
            Violation results in immediate removal from the Program without refund.
          </PolicyParagraph>

          <PolicySectionTitle>5. Payment Terms</PolicySectionTitle>
          <PolicySubTitle>5.1 Reservation Deposit</PolicySubTitle>
          <PolicyParagraph>
            A deposit equal to twenty-five percent (25%) of the total Program fee is required to reserve participation.
          </PolicyParagraph>
          <PolicySubTitle>5.2 Final Payment</PolicySubTitle>
          <PolicyParagraph>
            The remaining seventy-five percent (75%) must be paid no later than twenty (20) calendar days before arrival.
          </PolicyParagraph>
          <PolicySubTitle>5.3 Payment Method</PolicySubTitle>
          <PolicyParagraph>
            All payments must be made exclusively to the official bank account of the Company.
          </PolicyParagraph>
          <PolicySubTitle>5.4 Confirmation</PolicySubTitle>
          <PolicyParagraph>
            Participation is confirmed only after receipt of cleared funds. Failure to complete payment within required deadlines may result in cancellation.
          </PolicyParagraph>

          <PolicySectionTitle>6. Cancellation and Refund Policy</PolicySectionTitle>
          <PolicyParagraph>
            This section is drafted in accordance with Lithuanian civil law principles.
          </PolicyParagraph>
          <PolicySubTitle>6.1 Cancellation by Participant</PolicySubTitle>
          <PolicyParagraph>
            a) More than 30 calendar days before Program start: The 25% deposit is retained; additional paid amounts are refunded.
          </PolicyParagraph>
          <PolicyParagraph>
            b) Between 30 and 20 calendar days before Program start: 50% of total Program fee retained; excess refunded.
          </PolicyParagraph>
          <PolicyParagraph>
            c) Less than 20 days before Program start or non-attendance: No refund.
          </PolicyParagraph>
          <PolicySubTitle>6.2 After Commencement</PolicySubTitle>
          <PolicyParagraph>
            No refund for unused hours, voluntary withdrawal, or absence.
          </PolicyParagraph>
          <PolicySubTitle>6.3 Refund Processing</PolicySubTitle>
          <PolicyParagraph>
            Approved refunds are processed within 30 business days to the original paying account.
          </PolicyParagraph>

          <PolicySectionTitle>7. Insurance</PolicySectionTitle>
          <PolicySubTitle>7.1 Coverage</PolicySubTitle>
          <PolicyParagraph>
            The Company provides health insurance coverage during the official training period through a licensed insurer.
          </PolicyParagraph>
          <PolicySubTitle>7.2 Policy Limits</PolicySubTitle>
          <PolicyParagraph>
            Coverage is subject strictly to the insurer&apos;s terms and financial
            limits.
          </PolicyParagraph>
          <PolicySubTitle>7.3 No Extended Liability</PolicySubTitle>
          <PolicyParagraph>
            The Company is not the insurer and bears no liability beyond policy limits.
          </PolicyParagraph>
          <PolicySubTitle>7.4 Recommendation</PolicySubTitle>
          <PolicyParagraph>
            Participants are advised to obtain additional travel or personal accident insurance.
          </PolicyParagraph>

          <PolicySectionTitle>8. Accommodation and Lifestyle Standards</PolicySectionTitle>
          <PolicySubTitle>8.1 Accommodation</PolicySubTitle>
          <PolicyParagraph>
            Participants will stay in selected luxury apartments, hotel rooms, or resort facilities.
          </PolicyParagraph>
          <PolicySubTitle>8.2 Conduct</PolicySubTitle>
          <PolicyParagraph>Participants must:</PolicyParagraph>
          <PolicyList items={ACCOMMODATION_CONDUCT} />
          <PolicySubTitle>8.3 Damage</PolicySubTitle>
          <PolicyParagraph>
            Participants are financially responsible for damage caused by negligent or intentional misconduct.
          </PolicyParagraph>
          <PolicySubTitle>8.4 Personal Belongings</PolicySubTitle>
          <PolicyParagraph>
            The Company is not liable for loss or theft of personal belongings unless caused by gross negligence.
          </PolicyParagraph>

          <PolicySectionTitle>9. Assumption of Risk</PolicySectionTitle>
          <PolicySubTitle>9.1 Inherent Risk</PolicySubTitle>
          <PolicyParagraph>
            Aviation involves inherent operational risks, including risk of injury or death.
          </PolicyParagraph>
          <PolicySubTitle>9.2 Voluntary Participation</PolicySubTitle>
          <PolicyParagraph>
            Participation is voluntary, and participants accept ordinary aviation risks.
          </PolicyParagraph>

          <PolicySectionTitle>10. Limitation of Liability</PolicySectionTitle>
          <PolicySubTitle>10.1 Liability Cap</PolicySubTitle>
          <PolicyParagraph>
            To the maximum extent permitted under Lithuanian law, total liability of the Company shall not exceed the total Program fee paid.
          </PolicyParagraph>
          <PolicySubTitle>10.2 Exclusions</PolicySubTitle>
          <PolicyParagraph>The Company is not liable for:</PolicyParagraph>
          <PolicyList items={LIABILITY_EXCLUSIONS} />
          <PolicySubTitle>10.3 Exceptions</PolicySubTitle>
          <PolicyParagraph>
            Nothing excludes liability for gross negligence or intentional misconduct.
          </PolicyParagraph>

          <PolicySectionTitle>11. Indemnification</PolicySectionTitle>
          <PolicyParagraph>
            Participants shall indemnify the Company for damages or losses arising from:
          </PolicyParagraph>
          <PolicyList items={INDEMNIFICATION_SCOPE} />

          <PolicySectionTitle>12. Force Majeure</PolicySectionTitle>
          <PolicyParagraph>
            The Company is not liable for disruptions caused by:
          </PolicyParagraph>
          <PolicyList items={FORCE_MAJEURE_CASES} />
          <PolicyParagraph>Rescheduling may be offered where feasible.</PolicyParagraph>

          <PolicySectionTitle>13. Privacy and Media Policy</PolicySectionTitle>
          <PolicySubTitle>13.1 Data Processing</PolicySubTitle>
          <PolicyParagraph>
            Personal data is processed in accordance with GDPR and Lithuanian data protection law.
          </PolicyParagraph>
          <PolicySubTitle>13.2 Media Recording</PolicySubTitle>
          <PolicyParagraph>
            Photos and video may be captured during Program activities.
          </PolicyParagraph>
          <PolicySubTitle>13.3 Media Use</PolicySubTitle>
          <PolicyParagraph>
            Unless a written objection is submitted before Program commencement, the Company may publish media on official websites and social media channels.
          </PolicyParagraph>
          <PolicySubTitle>13.4 Withdrawal</PolicySubTitle>
          <PolicyParagraph>
            Withdrawal of media consent applies only prospectively and does not require removal of previously published lawful content.
          </PolicyParagraph>

          <PolicySectionTitle>14. Governing Law and Jurisdiction</PolicySectionTitle>
          <PolicyParagraph>
            This Policy is governed exclusively by the laws of the Republic of Lithuania.
          </PolicyParagraph>
          <PolicyParagraph>
            All disputes shall be resolved exclusively by the competent courts of Lithuania. Lithuania shall be the sole legal jurisdiction.
          </PolicyParagraph>

          <PolicySectionTitle>Final Provision</PolicySectionTitle>
          <PolicyParagraph>
            Participation in the Program constitutes acknowledgment and acceptance of this Policy.
          </PolicyParagraph>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

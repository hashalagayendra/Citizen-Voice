import {
  FaListAlt,
  FaFileSignature,
  FaExclamationTriangle,
  FaUserSecret,
  FaCheckCircle,
  FaTachometerAlt,
  FaRobot,
  FaComments,
  FaUserShield,
} from "react-icons/fa";

export default function AboutUs() {
  const howItWorksSteps = [
    {
      icon: <FaListAlt className="text-4xl text-[#06386B]" />,
      title: "Select a Category",
      description:
        "Choose from a list of public service issues like infrastructure, misconduct, or crime.",
    },
    {
      icon: <FaFileSignature className="text-4xl text-[#06386B]" />,
      title: "Provide Details",
      description:
        "Fill out a form with a description, location, date, and upload evidence.",
    },
    {
      icon: <FaExclamationTriangle className="text-4xl text-[#06386B]" />,
      title: "Set Severity",
      description:
        "Classify the issue's urgency from Low to Critical to ensure appropriate response.",
    },
    {
      icon: <FaUserSecret className="text-4xl text-[#06386B]" />,
      title: "Choose Submission",
      description:
        "Submit your report with your identity or anonymously for your privacy.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-[#06386B]" />,
      title: "Review & Submit",
      description:
        "Confirm all your details are correct before final submission.",
    },
  ];

  const keyFeatures = [
    {
      icon: <FaTachometerAlt className="text-3xl text-white" />,
      title: "Personalized Dashboard",
      description: "Track the status of all your complaints in one place.",
    },
    {
      icon: <FaRobot className="text-3xl text-white" />,
      title: "Intelligent Chatbot",
      description: "Get instant answers about laws and application usage.",
    },
    {
      icon: <FaComments className="text-3xl text-white" />,
      title: "Direct Admin Chat",
      description: "Communicate directly with administrators for assistance.",
    },
    {
      icon: <FaUserShield className="text-3xl text-white" />,
      title: "Admin Management",
      description: "A robust panel for admins to manage and process reports.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 w-full bg-gray-50">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#06386B] mb-4">
          About Citizen Voice
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          A dedicated platform to empower citizens by providing a direct channel
          to report public concerns and ensure every voice is heard.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          How It Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{step.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          Key Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#06386B] text-white rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

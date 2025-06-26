import { FaShieldAlt, FaFire, FaAmbulance, FaPhoneAlt } from "react-icons/fa";

export default function EmergencyContacts() {
  return (
    <div className="bg-[#06386B] min-h-[350px] flex flex-col items-center justify-center py-8 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Emergency Contacts
      </h2>
      <p className="text-white text-center mb-8 max-w-2xl">
        For urgent situations requiring immediate attention, please contact the
        appropriate emergency service
      </p>
      <div className="bg-[#073B6F] ring-1 ring-white rounded-2xl flex flex-col md:flex-row justify-between items-center w-full max-w-5xl py-8 px-4 md:px-12 mb-6 shadow-lg">
        {/* Police */}
        <div className="flex flex-col items-center flex-1 min-w-[150px] mb-8 md:mb-0">
          <FaShieldAlt className="text-white text-5xl mb-3" />
          <span className="text-white font-semibold text-lg mb-1">Police</span>
          <span className="text-white flex items-center gap-2">
            <FaPhoneAlt /> 119
          </span>
        </div>
        {/* Fire */}
        <div className="flex flex-col items-center flex-1 min-w-[150px] mb-8 md:mb-0">
          <FaFire className="text-white text-5xl mb-3" />
          <span className="text-white font-semibold text-lg mb-1">Fire</span>
          <span className="text-white flex items-center gap-2">
            <FaPhoneAlt /> 111
          </span>
        </div>
        {/* Ambulance */}
        <div className="flex flex-col items-center flex-1 min-w-[150px] mb-8 md:mb-0">
          <FaAmbulance className="text-white text-5xl mb-3" />
          <span className="text-white font-semibold text-lg mb-1">
            Ambulance
          </span>
          <span className="text-white flex items-center gap-2">
            <FaPhoneAlt /> 1990
          </span>
        </div>
        {/* Women Helpline */}
        <div className="flex flex-col items-center flex-1 min-w-[150px]">
          <FaPhoneAlt className="text-white text-5xl mb-3" />
          <span className="text-white font-semibold text-lg mb-1">
            Women Helpline
          </span>
          <span className="text-white flex items-center gap-2">
            <FaPhoneAlt /> 1938
          </span>
        </div>
      </div>
      <p className="text-white font-semibold text-center max-w-3xl">
        Remember: In case of emergencies, please dial the appropriate number
        immediately rather than filling a complaint.
      </p>
    </div>
  );
}

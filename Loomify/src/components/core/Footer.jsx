import logo from "../../assets/logo.png"; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[calc(100%-15rem)] ml-auto bg-black text-gray-400 text-sm py-6 border-t border-[#272727]">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Left Section */}
        <p className="hidden lg:block">© {currentYear} Loomify | All Rights Reserved.</p>

        {/* Center Logo */}
        <img src={logo} alt="Loomify Logo" className="mx-auto h-6" /> 

        {/* Right Links */}
        <div className="hidden lg:flex space-x-6">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

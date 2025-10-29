import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

import Playstoree from '../../assets/Playstoree.png';
import Appstoree from '../../assets/AppStore.png';

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-gray-200 py-8 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Logo and Motto */}
        <div className="space-y-3 flex flex-col w-full md:w-1/4">
          <span className="text-2xl font-semibold text-blue-600">Prime<span className="text-white">Online Solutions</span></span>
          <span className="text-sm text-gray-300">Better Data, Bigger Profits™</span>
          {/* <div className="flex space-x-2 mt-3">
            <a href="#"><img src={Appstoree} alt="App Store" className="h-10 w-28 rounded-md" /></a>
            <a href="#"><img src={Playstoree} alt="Google Play" className="h-10 w-28 rounded-md" /></a>
          </div> */}
        </div>
        
        {/* Links */}
        <div className="flex flex-col sm:flex-row flex-grow justify-between w-full md:w-2/3 space-y-8 sm:space-y-0">
          {/* About Us */}
          <div className="space-y-2 w-1/3">
            <h4 className="font-semibold text-white">About Us</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[#ff9300]">Who We Are</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Vision & Mission</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Core Values</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Quality Policy</a></li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-2 w-1/3">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[#ff9300]">Blog</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Partners</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Careers</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Terms Of Use</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="space-y-2 w-1/3">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[#ff9300]">Tutorials</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#ff9300]">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Contact & Social */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6 space-y-5 md:space-y-0">
        <div className="text-sm space-y-1 text-center md:text-left">
          <div>1-877-697-2673</div>
          <div>370 17th Street 50th Floor,<br/> Denver, CO 80202</div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-[#ff9300]" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-[#ff9300]" aria-label="X Twitter"><FaXTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-[#ff9300]" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-[#ff9300]" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-xs text-gray-400 text-center mt-6 border-t border-gray-700 pt-4 tracking-wider">
        Copyrights © 2025 Online prime Sollutions.<br />All Rights Reserved.
      </div>
    </footer>
  );
}

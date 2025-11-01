import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#07152B] text-white pb-4 pt-10 px-6 md:px-20 ">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Section */}
            <div>
              <h2 className="text-3xl font-bold tracking-wide">
                Smart<span className="text-[#9F62F2]">Deals</span>
              </h2>
              <p className="mt-4 text-gray-300 leading-6">
                Your trusted marketplace for authentic local products. Discover
                the best deals from across Bangladesh.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/all-products" className="hover:text-[#9F62F2]">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="/dashboard" className="hover:text-[#9F62F2]">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:text-[#9F62F2]">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register" className="hover:text-[#9F62F2]">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home & Living</li>
                <li>Groceries</li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📧 support@SmartDeals.com</li>
                <li>📞 +880 123 456 789</li>
                <li>📍 123 Commerce Street, Dhaka, Bangladesh</li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 text-xl">
                <i className="fa-brands fa-facebook hover:text-[#9F62F2] cursor-pointer"></i>
                <i className="fa-brands fa-instagram hover:text-[#9F62F2] cursor-pointer"></i>
                <i className="fa-brands fa-twitter hover:text-[#9F62F2] cursor-pointer"></i>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
            © 2025 <span className="text-white font-semibold">SmartDeals</span>.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

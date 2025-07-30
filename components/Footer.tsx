
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-brand-secondary">Rakhi Emporium</h3>
            <p className="text-sm text-gray-400">Your one-stop shop for the most beautiful Rakhis and gifts.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-secondary">Home</a></li>
              <li><a href="#" className="hover:text-brand-secondary">All Rakhis</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Combos</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Gifts</a></li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-2">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-secondary">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-secondary">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Shipping Policy</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-secondary">FB</a>
              <a href="#" className="hover:text-brand-secondary">IG</a>
              <a href="#" className="hover:text-brand-secondary">TW</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rakhi Emporium. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

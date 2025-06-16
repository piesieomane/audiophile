
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-audio-dark text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold uppercase tracking-wider mb-6 block">
              Audiophile
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
              and sound specialists who are devoted to helping you get the most out of personal audio. 
              Come and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-h6 mb-6">Quick Links</h4>
            <nav className="space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-audio-orange transition-colors">
                Home
              </Link>
              <Link to="/category/headphones" className="block text-gray-300 hover:text-audio-orange transition-colors">
                Headphones
              </Link>
              <Link to="/category/speakers" className="block text-gray-300 hover:text-audio-orange transition-colors">
                Speakers
              </Link>
              <Link to="/category/earphones" className="block text-gray-300 hover:text-audio-orange transition-colors">
                Earphones
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-h6 mb-6">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <p>1337 Duncan Ave<br />New York, NY 10011</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@audiophile.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2024 Audiophile. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-audio-orange transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-audio-orange transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-audio-orange transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

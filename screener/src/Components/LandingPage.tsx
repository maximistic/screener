import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white p-4 fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-blue-600 text-2xl font-bold">CATALYST</span>
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
          </div>
          <div className="space-x-2">
            <motion.button 
              className="bg-blue-600 text-white px-4 py-2 rounded"
              whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button 
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded"
              whileHover={{ scale: 1.05, backgroundColor: "#EFF6FF" }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Advanced Stock Screener</h1>
            <p className="text-gray-600 mb-6">
              Discover high-potential stocks with our cutting-edge screening tools. Make informed decisions and optimize your investment strategy.
            </p>
            <div className="flex space-x-4 mb-6">
              <input
                type="text"
                placeholder="Search some stocks"
                className="flex-grow border rounded px-4 py-2"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded">Search</button>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded">Get Started</button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/stock-chart.png" alt="Stock Chart" className="max-w-md" />
          </motion.div>
        </div>
      </main>

      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.img
              src="/analytics-icon.png"
              alt="Analytics Icon"
              className="w-64"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-4">Powerful Analytics</h2>
              <p className="mb-4">
                Leverage our advanced analytics to identify market trends, assess stock performance, and make data-driven investment decisions.
              </p>
              <ul className="list-disc list-inside">
                <li>Real-time market data</li>
                <li>Custom screening criteria</li>
                <li>Personalized alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-center">&copy; 2024 CATALYST. All rights reserved.</p>
            <div className="space-x-6">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

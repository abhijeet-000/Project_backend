import React from 'react';
import './index.css'; // Assuming Tailwind CSS is configured
import { Link } from 'react-router-dom';
import About from './About'
import TopBanner from './TopBanner';

const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* Top Navigation Bar */}
      <TopBanner />
      <header className="bg-gray-100 shadow-sm">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://i.ibb.co/D5dp6Yx/image.png" alt="Logo" className="mr-4 w-36" />
            <nav className="hidden md:flex gap-8 text-gray-600">
            <Link to="/about" className="hover:text-blue-500">About Us</Link>
  <Link to="/about" className="hover:text-blue-500">Virtual Labs</Link>
  <Link to="/about" className="hover:text-blue-500">Programs</Link>
  <Link to="/about" className="hover:text-blue-500">For Colleges</Link>
            </nav>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
            <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded">Register</button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="bg-white py-20 text-center relative">
        <div className="container mx-auto flex flex-row items-center">
          <img
            src="https://i.ibb.co/qrkwh22/image.png"
            alt="Main Display"
            className="w-1/3 mr-6"
          />
          <h1
            className="text-4xl font-extrabold text-gray-800 relative inline-block"
            style={{
              fontFamily: 'Gilroy-ExtraBold',
              fontWeight: 600,
              lineHeight: '1.2',
              fontSize: '72px',
              color: '#4C5856',

              
            }}
          >
            Where The World Learns To Code
            <span className="absolute text-blue-400 top-1 right-[-45px]">
              &#9654;
            </span>
          </h1>
          
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-300">
            <div className="flex justify-center mb-4">
              <i className="fas fa-school fa-2x text-blue-500"></i>
            </div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              Campus Training
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Designed for college students with a focus on xyz, xyz, xyz Lorem
              ipsum dolor
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Explore <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-300">
            <div className="flex justify-center mb-4">
              <i className="fas fa-briefcase fa-2x text-blue-500"></i>
            </div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              Professional Training
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Designed for college students with a focus on xyz, xyz, xyz Lorem
              ipsum dolor
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Explore <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>

      </section>

    

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt fa-2x text-blue-500 mb-2"></i>
            <h2 className="text-xl font-bold">50+ Cities</h2>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-book fa-2x text-blue-500 mb-2"></i>
            <h2 className="text-xl font-bold">80+ Modules</h2>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-user-graduate fa-2x text-blue-500 mb-2"></i>
            <h2 className="text-xl font-bold">10K+ Students</h2>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-university fa-2x text-blue-500 mb-2"></i>
            <h2 className="text-xl font-bold">100+ Institutes</h2>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 font-semibold mb-4">RECOGNISED BY</p>
          <div className="flex justify-center gap-10 items-center">
            <img src="https://i.ibb.co/WDXF3PZ/Image.png" alt="Ministry of Commerce" className="w-32" />
            <img src="https://i.ibb.co/ftPFPrn/Image.png" alt="NSDC" className="w-32" />
            <img src="https://i.ibb.co/bv3n2hF/Image.png" alt="Startup India" className="w-32" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

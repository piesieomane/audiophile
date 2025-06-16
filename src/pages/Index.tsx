
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-audio-dark text-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="overline">New Product</p>
              <h1 className="text-white max-w-lg">
                XX99 Mark II Headphones
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>
              <Link 
                to="/product/xx99-mark-two-headphones"
                className="btn-primary inline-block"
              >
                See Product
              </Link>
            </div>
            <div className="lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
                alt="XX99 Mark II Headphones"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headphones */}
            <div className="group text-center">
              <div className="bg-audio-gray rounded-lg p-8 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
                  alt="Hea dphones"
                  className="w-40 h-40 object-cover mx-auto mb-6 rounded-full"
                />
                <h3 className="text-h6 mb-4">Headphones</h3>
                <Link 
                  to="/category/headphones"
                  className="inline-flex items-center text-audio-orange hover:text-audio-orange-light font-bold uppercase text-sm tracking-wider group"
                >
                  Shop <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Speakers */}
            <div className="group text-center">
              <div className="bg-audio-gray rounded-lg p-8 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80"
                  alt="Speakers"
                  className="w-40 h-40 object-cover mx-auto mb-6 rounded-full"
                />
                <h3 className="text-h6 mb-4">Speakers</h3>
                <Link 
                  to="/category/speakers"
                  className="inline-flex items-center text-audio-orange hover:text-audio-orange-light font-bold uppercase text-sm tracking-wider group"
                >
                  Shop <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Earphones */}
            <div className="group text-center">
              <div className="bg-audio-gray rounded-lg p-8 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80"
                  alt="Earphones"
                  className="w-40 h-40 object-cover mx-auto mb-6 rounded-full"
                />
                <h3 className="text-h6 mb-4">Earphones</h3>
                <Link 
                  to="/category/earphones"
                  className="inline-flex items-center text-audio-orange hover:text-audio-orange-light font-bold uppercase text-sm tracking-wider group"
                >
                  Shop <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-audio-gray-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {/* ZX9 Speaker */}
            <div className="bg-audio-orange rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                <div className="relative flex items-center justify-center p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80"
                    alt="ZX9 Speaker"
                    className="w-full max-w-sm h-auto object-cover"
                  />
                </div>
                <div className="flex items-center p-8 lg:p-16">
                  <div className="space-y-6">
                    <h2 className="text-white max-w-md">ZX9 Speaker</h2>
                    <p className="text-gray-100 text-lg leading-relaxed max-w-md">
                      Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                    <Link 
                      to="/product/zx9-speaker"
                      className="inline-block bg-audio-dark text-white px-8 py-4 uppercase text-subtitle font-bold tracking-wider hover:bg-gray-800 transition-colors duration-200"
                    >
                      See Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ZX7 Speaker */}
            <div className="bg-gray-100 rounded-lg overflow-hidden min-h-[300px] relative">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=80"
                  alt="ZX7 Speaker"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative flex items-center h-full p-8 lg:p-16">
                <div className="space-y-6">
                  <h3>ZX7 Speaker</h3>
                  <Link 
                    to="/product/zx7-speaker"
                    className="btn-outline inline-block"
                  >
                    See Product
                  </Link>
                </div>
              </div>
            </div>

            {/* YX1 Earphones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80"
                  alt="YX1 Earphones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center p-8">
                <div className="space-y-6">
                  <h3>YX1 Earphones</h3>
                  <Link 
                    to="/product/yx1-earphones"
                    className="btn-outline inline-block"
                  >
                    See Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="max-w-lg">
                Bringing you the <span className="text-audio-orange">best</span> audio gear
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                audio equipment.
              </p>
            </div>
            <div className="">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                alt="Audio equipment showcase"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

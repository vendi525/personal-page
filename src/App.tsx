import { Mail, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers the transition after scrolling 200px
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E6E1] font-sans text-black selection:bg-orange-500 selection:text-white">
      
      {/* CUSTOM FONT STYLING (Internal) */}
      <style htm-for="custom-font">
        {`
          @font-face {
            font-family: 'MyCustomFont';
            src: url('/fonts/your-font-file.ttf'); /* Update this path later */
          }
          .font-custom {
            font-family: 'MyCustomFont', serif;
          }
        `}
      </style>

      {/* DYNAMIC NAVIGATION BAR */}
      <nav className={`
        fixed z-50 transition-all duration-700 ease-in-out flex items-center
        ${scrolled 
          ? 'top-0 left-0 w-full bg-[#E8E6E1]/90 backdrop-blur-md border-b border-black px-8 py-4 flex-row justify-between' 
          : 'bottom-8 left-8 flex-col items-start gap-3'}
      `}>
        
        {/* LOGO - Only shows when sticky */}
        <div className={`transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xl font-bold uppercase tracking-tighter">iza vene</span>
        </div>

        {/* NAV LINKS */}
        <div className={`flex transition-all duration-500 ${scrolled ? 'flex-row gap-8' : 'flex-col gap-3'} text-sm font-medium uppercase tracking-widest`}>
          <a href="#about-me" className="hover:text-orange-600 transition-colors">about</a>
          <a href="#work" className="hover:text-orange-600 transition-colors">work</a>
          <a href="#experience" className="hover:text-orange-600 transition-colors">experience</a>
          <a href="#philosophy" className="hover:text-orange-600 transition-colors">philosophy</a>
        </div>
      </nav>

      {/* FLOATING EMAIL BUTTON (Visible only at the start) */}
      <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <a
          href="mailto:iza.vene4@gmail.com"
          className="flex items-center gap-2 px-4 py-3 border-2 border-black bg-[#E8E6E1] hover:bg-black hover:text-[#E8E6E1] transition-all text-sm font-bold"
        >
          <Mail size={16} />
          <span>iza.vene4@gmail.com</span>
        </a>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-8xl md:text-[10rem] font-bold leading-[0.8] font-serif lowercase">
              iza<br />vene
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-80 h-96 bg-gray-300 overflow-hidden border border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional headshot"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="border-2 border-black px-6 py-4 text-center bg-white">
              <a href="mailto:iza.vene4@gmail.com" className="text-sm font-bold hover:underline">
                iza.vene4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about-me" className="min-h-screen flex items-center justify-center px-8 py-20 border-t border-black">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-7xl font-bold font-serif mb-12 lowercase">about me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <p className="text-sm leading-relaxed">
                Professionally an Adops specialist working for a global advertising company Teads. In my spare time I create Pinterest content, develop pinterest SEO strategies, create web pages, and explore GEO for my content.
              </p>
              <p className="text-sm leading-relaxed">
                Professionally an Adops specialist working for a global advertising company Teads. In my spare time I create Pinterest content, develop pinterest SEO strategies, create web pages, and explore GEO for my content.
              </p>
            </div>
            <p className="text-xs italic mt-8 border-l-2 border-black pl-4">
              *Underneath all that I am lover of wisdom - a pseudo philosopher.*
            </p>
          </div>
          <div className="w-full h-[600px] bg-gray-300 overflow-hidden border border-black">
            <img
              src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Person on bridge"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="min-h-screen flex items-center justify-center px-8 py-20 border-t border-black bg-white/30">
        <div className="max-w-7xl w-full">
          <h2 className="text-7xl font-bold font-serif mb-16 lowercase">my work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-black pb-2 uppercase tracking-tighter">Ad Ops</h3>
              <ul className="space-y-4 text-sm">
                <li><span className="font-bold">Campaign and Creative Setup</span><br/>• create performance campaigns</li>
                <li><span className="font-bold">Troubleshoot Performance Data Discrepancies</span></li>
                <li><span className="font-bold">Tracking Implementation</span><br/>• JS pixels, S2S, GTM, UTMs</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-black pb-2 uppercase tracking-tighter">Web Design</h3>
              <ul className="space-y-2 text-sm">
                <li>• mydomain.com</li>
                <li>• mydomain2.com</li>
                <li>• mydomain3.com</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-black pb-2 uppercase tracking-tighter">Content</h3>
              <ul className="space-y-2 text-sm">
                <li>• Run Pinterest profiles</li>
                <li>• SEO & GEO Tactics Research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="min-h-

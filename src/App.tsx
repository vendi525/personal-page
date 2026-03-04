import { Mail } from 'lucide-react';
import { useState, useEffect } from 'react'; // Added these for the scroll logic

function App() {
  const [isSticky, setIsSticky] = useState(false);

  // This logic tracks how far you have scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E6E1] font-sans text-black selection:bg-orange-500">
      
      {/* DYNAMIC NAVIGATION */}
      <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-10 
        ${isSticky 
          ? 'bg-[#E8E6E1]/90 backdrop-blur-md border-b border-black py-4' // STICKY STYLE (Scrolled)
          : 'bg-transparent py-8'                                        // DEFAULT STYLE (Top of page)
        }
      `}>
        
        {/* LOGO: Now always visible */}
        <div className="transition-all duration-300">
          <span className="text-xl font-bold font-serif lowercase">iza vene</span>
        </div>

        {/* NAV LINKS: Now always horizontal (flex-row) */}
        <div className="flex flex-row gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about-me" className="hover:text-orange-600 transition-all">about</a>
          <a href="#work" className="hover:text-orange-600 transition-all">work</a>
          <a href="#experience" className="hover:text-orange-600 transition-all">experience</a>
          <a href="#philosophy" className="hover:text-orange-600 transition-all">philosophy</a>
        </div>
      </nav>
      {/* --- END OF CHANGES --- */}

      {/* FLOATING EMAIL BUTTON - Fades out when nav becomes sticky for a cleaner look */}
      <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-500 ${isSticky ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
            <h1 className="text-8xl md:text-[10rem] font-bold font-serif leading-[0.8] lowercase">iza<br />vene</h1>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-80 h-96 border-2 border-black overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
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

      {/* REST OF YOUR SECTIONS REMAIN THE SAME */}
      {/* ... [Insert your About, Work, Experience, and Philosophy sections here] ... */}

    </div>
  );
}

export default App;

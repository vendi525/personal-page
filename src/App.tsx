import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#E8E6E1] font-sans text-black">
      <nav className="fixed bottom-8 left-8 z-50 flex flex-col gap-3 text-sm">
        <a href="#about-me" className="hover:underline transition-all">about</a>
        <a href="#work" className="hover:underline transition-all">work</a>
        <a href="#experience" className="hover:underline transition-all">experience</a>
        <a href="#philosophy" className="hover:underline transition-all">philosophy</a>
      </nav>

      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="mailto:iza.vene4@gmail.com"
          className="flex items-center gap-2 px-4 py-3 border-2 border-black bg-[#E8E6E1] hover:bg-black hover:text-[#E8E6E1] transition-all text-sm"
        >
          <Mail size={16} />
          <span>iza.vene4@gmail.com</span>
        </a>
      </div>

      <section id="home" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-8xl font-bold font-serif leading-tight">iza vene</h1>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-80 h-80 bg-gray-300 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional headshot"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="border-2 border-black px-6 py-4 text-center">
              <a href="mailto:iza.vene4@gmail.com" className="text-sm hover:underline">
                iza.vene4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-7xl font-bold font-serif mb-12">about me</h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-sm leading-relaxed">
                Professionally an Adops specialist working for a global advertising company Teads. In my spare time I create Pinterest content, develop pinterest SEO strategies, create web pages, and explore GEO for my content.
              </div>
              <div className="text-sm leading-relaxed">
                Professionally an Adops specialist working for a global advertising company Teads. In my spare time I create Pinterest content, develop pinterest SEO strategies, create web pages, and explore GEO for my content.
              </div>
            </div>

            <p className="text-xs italic mt-8">
              Underneath all that I am lover of wisdom - a pseudo philosopher.
            </p>
          </div>

          <div className="w-full h-[600px] bg-gray-300 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Person on bridge looking at greenhouse"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section id="work" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-7xl font-bold font-serif mb-16">my work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Ad Ops</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-medium mb-2">Campaign and Creative Setup</div>
                  <ul className="pl-4 space-y-1">
                    <li>• create performance campaigns</li>
                  </ul>
                </li>
                <li>
                  <div className="font-medium">Troubleshoot Performance Data Discrepancies</div>
                </li>
                <li>
                  <div className="font-medium mb-2">Troubleshoot campaign performance:</div>
                  <ul className="pl-4 space-y-1">
                    <li>• Work with tracking implementation (hardcoded js pixels, S2S tracking, GTM Integrations...)</li>
                    <li>• Test funnels and event triggers</li>
                    <li>• work with UTMs/click/impression trackers</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Web Design</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-medium mb-2">Create web pages</div>
                  <ul className="pl-4 space-y-1">
                    <li>• like this one: mydomain.com</li>
                    <li>• and this one: mydomain2.com</li>
                    <li>• and this one: mydomain3.com</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Content</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-medium mb-2">Run Pinterest profiles</div>
                  <ul className="pl-4 space-y-1">
                    <li>• my pinterest profile</li>
                    <li>• I research and try out fresh GEO and SEO tactics</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-7xl font-bold font-serif mb-16">experience</h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="border-2 border-black p-6 bg-white relative">
                <h3 className="font-semibold mb-2">AdOps Specialist</h3>
                <p className="text-sm mb-1">Teads</p>
                <p className="text-xs">since nov 2025</p>
                <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-black"></div>
              </div>

              <div className="border-2 border-black p-6 bg-white relative">
                <h3 className="font-semibold mb-2">Sales Assistant Student</h3>
                <p className="text-sm mb-1">Datalab SI</p>
                <p className="text-xs">oct - nov 2025</p>
                <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-black"></div>
              </div>

              <div className="border-2 border-black p-6 bg-white relative">
                <h3 className="font-semibold mb-2">Gallery Guide Student</h3>
                <p className="text-sm mb-1">MGML - Cukrarna Gallery</p>
                <p className="text-xs">nov 2024 - oct 2025</p>
                <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-black"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-black p-6 bg-white md:col-start-1">
                <h3 className="font-semibold mb-2">Bachelor's Degree</h3>
                <p className="text-sm mb-1">Philosophy and Art History</p>
                <p className="text-xs">oct - dec 2023</p>
              </div>

              <div className="border-2 border-black p-6 bg-white md:col-start-2">
                <h3 className="font-semibold mb-2">FB Content Creator Student</h3>
                <p className="text-sm mb-1">Data d.o.o.</p>
                <p className="text-xs">oct - dec 2023</p>
              </div>

              <div className="border-2 border-black p-6 bg-white md:col-start-3">
                <h3 className="font-semibold mb-2">SEO Copywriter Student</h3>
                <p className="text-sm mb-1">CompanyWall</p>
                <p className="text-xs">June 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="min-h-screen flex items-center justify-center px-8 py-20 pb-32">
        <div className="max-w-7xl w-full">
          <h2 className="text-7xl font-bold font-serif mb-16">philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed">
                Philosophy is not merely an academic discipline but a way of life, a continuous questioning of the assumptions that govern our existence. It demands that we examine not just what we know, but how we know it, and whether our knowledge holds any substantial truth beyond the confines of our limited perception.
              </p>

              <div className="bg-[#C85A3E] border-2 border-black p-8 my-8">
                <p className="text-sm italic leading-relaxed text-white">
                  "The unexamined life is not worth living, but the examined life can be equally unbearable if we forget to actually live it." - Philosophy Quote
                </p>
              </div>

              <p className="text-sm leading-relaxed">
                In our modern age, philosophy offers a refuge from the noise of constant connectivity and superficial engagement. It asks us to slow down, to contemplate, to wrestle with ideas that have no easy answers. This is not comfortable work, but it is necessary work for anyone who seeks to live with intention and authenticity.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-sm leading-relaxed">
                The pursuit of wisdom requires humility—the recognition that our understanding is always incomplete, always provisional. Every answer spawns new questions, every certainty eventually reveals itself as another layer of complexity waiting to be unraveled. This is both the frustration and the beauty of philosophical inquiry.
              </p>

              <p className="text-sm leading-relaxed">
                Through philosophy, we learn to hold contradictions, to sit with ambiguity, and to find meaning not in absolute truths but in the perpetual search for them. It teaches us that wisdom is not a destination but a journey, one that requires courage, patience, and an unwavering commitment to truth, however elusive it may be.
              </p>

              <p className="text-sm leading-relaxed">
                Ultimately, philosophy returns us to ourselves, asking us to confront the fundamental questions of existence: Who am I? What is the good life? How should I live? These questions have no final answers, only better and worse attempts at understanding. And in that perpetual striving lies our humanity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

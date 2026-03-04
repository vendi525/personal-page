<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iza Vene | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @font-face {
            font-family: 'MyCustomFont';
            src: url('./your-font.ttf'); /* Upload your font file to the same repo! */
        }
        .font-serif { font-family: 'MyCustomFont', serif !important; }
        html { scroll-behavior: smooth; }
        h1, h2 { color: #FF5C00; text-transform: lowercase; }
    </style>
</head>
<body class="bg-[#E8E6E1] text-black font-sans selection:bg-orange-500 selection:text-white">

    <nav id="navbar" class="fixed z-50 transition-all duration-500 bottom-8 left-8 flex flex-col gap-3 text-sm font-bold uppercase tracking-widest">
        <div id="logo" class="hidden opacity-0 text-xl font-serif mb-4">iza vene</div>
        <a href="#about-me" class="hover:text-orange-600">about</a>
        <a href="#work" class="hover:text-orange-600">work</a>
        <a href="#experience" class="hover:text-orange-600">experience</a>
        <a href="#philosophy" class="hover:text-orange-600">philosophy</a>
    </nav>

    <section class="min-h-screen flex items-center justify-center px-8">
        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h1 class="text-8xl md:text-[10rem] font-bold leading-[0.8] font-serif">iza<br>vene</h1>
            <div class="flex flex-col items-center gap-6">
                <div class="w-80 h-96 border-2 border-black overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                    <img src="YOUR_IMAGE_LINK_HERE" class="w-full h-full object-cover grayscale" alt="Iza Vene">
                </div>
                <div class="border-2 border-black px-6 py-4 bg-white font-bold">iza.vene4@gmail.com</div>
            </div>
        </div>
    </section>

    <section id="about-me" class="min-h-screen p-10 border-t border-black">
        <h2 class="text-7xl font-bold font-serif mb-10">about me</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed">
            <p>Professionally an Adops specialist working for a global advertising company Teads. In my spare time I create Pinterest content, develop pinterest SEO strategies, create web pages, and explore GEO for my content.</p>
            <div class="border-2 border-black h-80 grayscale overflow-hidden">
                <img src="YOUR_SECOND_IMAGE_HERE" class="w-full h-full object-cover" alt="About photo">
            </div>
        </div>
    </section>

    <script>
        window.onscroll = function() {
            const nav = document.getElementById("navbar");
            const logo = document.getElementById("logo");
            if (window.scrollY > 300) {
                nav.classList.remove("bottom-8", "left-8", "flex-col");
                nav.classList.add("top-0", "left-0", "w-full", "bg-[#E8E6E1]/90", "backdrop-blur-md", "flex-row", "justify-between", "px-10", "py-6", "border-b", "border-black");
                logo.classList.remove("hidden");
                logo.classList.add("block", "opacity-100");
            } else {
                nav.classList.add("bottom-8", "left-8", "flex-col");
                nav.classList.remove("top-0", "left-0", "w-full", "bg-[#E8E6E1]/90", "backdrop-blur-md", "flex-row", "justify-between", "px-10", "py-6", "border-b", "border-black");
                logo.classList.add("hidden");
            }
        };
    </script>
</body>
</html>

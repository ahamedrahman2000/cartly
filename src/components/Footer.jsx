import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
          <div className="text-white">
            <h1 className="text-3xl font-extrabold">Cartly</h1>
            <p className="text-gray-400 mt-3">
              Your favorite online destination for the best products, deals, and
              experiences.
            </p>
          </div>

          <nav className="text-gray-400 flex flex-col space-y-2">
            <h1 className="mb-3 text-white font-semibold">Quick Links</h1>
            <a href="">About Us</a>
            <a href="">Shop</a>
            <a href="">Categories</a>
            <a href="">Contact</a>
          </nav>

          <nav className="text-gray-400 flex flex-col space-y-2">
            <h1 className="mb-3 text-white font-semibold">Support</h1>
            <a href="">Help Center</a>
            <a href="">Returns</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </nav>
        
        <Newsletter/>
        </div> 
      </div>
      <div className="text-white text-center border-t mt-10 pt-6 border-gray-500">
            © {new Date().getFullYear()} Cartly. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;

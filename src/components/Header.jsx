const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between max-w-7xl mx-auto items-center px-6 h-16">
        <a href="/" className="text-3xl font-bold cursor-pointer">Cartly</a>

        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400" >Home</a>
          <a href="/products" className="hover:text-blue-400">Shop</a>
          <a href="" className="hover:text-blue-400">Categories</a>
          <a href="" className="hover:text-blue-400">About</a>
          <a href="" className="hover:text-blue-400">Contact</a>
        </nav>

        <div className="flex">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-l-md p-2 md:w-80"
          />
          <button className="bg-blue-400 text-white p-2 rounded-r-md">
            Search
          </button>
        </div>

        <div className="flex space-x-6 items-center">
          <div className="relative">
            <a href="/cart" className="text-3xl cursor-pointer">🛒</a>
            <span className="bg-red-400 text-white text-sm rounded-full px-2 absolute -top-1 -right-3">
              3
            </span>
          </div>

          <div>
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="hidden cursor-pointer md:flex rounded-full w-[50px] h-[50px] object-cover"
            />
          </div>
        </div>

       
          <button className="md:hidden text-2xl">☰</button>
     
      </div>
    </header>
  );
};

export default Header;

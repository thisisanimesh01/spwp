export default function Header() {
  return (
    <>
      {/* Main Amazon Navbar */}
      <header className="bg-[#131921] text-white flex items-center px-6 py-3 gap-6 shadow">
        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer">
          amazon<span className="text-yellow-400">.in</span>
        </h1>

        {/* Search bar */}
        <div className="flex-grow flex">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="w-full px-4 py-2 rounded-l-md bg-[#f3f3f3] text-black border border-gray-300 focus:outline-none"
          />
          <button className="px-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-r-md border border-yellow-500">
            🔍
          </button>
        </div>

        {/* Account */}
        <div className="text-sm flex flex-col cursor-pointer hover:underline">
          <span>Hello, Animesh</span>
          <span className="font-bold">Account & Lists</span>
        </div>

        {/* Orders */}
        <div className="text-sm cursor-pointer hover:underline">
          Returns<br />
          <span className="font-bold">& Orders</span>
        </div>

        {/* Cart */}
        <div className="flex items-center cursor-pointer font-bold hover:underline">
          🛒 Cart
        </div>
      </header>

      {/* Category Bar */}
      <nav className="bg-[#232f3e] text-white px-6 py-2 flex items-center gap-6 text-sm">
        <span className="cursor-pointer hover:underline">All</span>
        <span className="cursor-pointer hover:underline">Mobiles</span>
        <span className="cursor-pointer hover:underline">Electronics</span>
        <span className="cursor-pointer hover:underline">Fashion</span>
        <span className="cursor-pointer hover:underline">Home & Kitchen</span>
        <span className="cursor-pointer hover:underline">Appliances</span>
        <span className="cursor-pointer hover:underline">Books</span>
      </nav>
    </>
  );
}

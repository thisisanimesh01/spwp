export default function BuyBox({ price, stock }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 w-full">

      {/* Price */}
      <h3 className="text-3xl font-bold text-[#B12704] mb-2">{price}</h3>

      <p className="text-green-600 font-semibold mb-2">{stock}</p>

      {/* Delivery */}
      <p className="text-sm mb-3">
        FREE delivery <span className="font-bold">Tomorrow</span> by Amazon
      </p>

      {/* EMI */}
      <p className="text-sm text-blue-600 cursor-pointer hover:underline mb-4">
        EMI available
      </p>

      {/* Add to Cart */}
      <button className="bg-yellow-400 hover:bg-yellow-500 w-full py-2 rounded-md font-semibold text-black mb-2">
        Add to Cart 🛒
      </button>

      {/* Buy Now */}
      <button className="bg-orange-500 hover:bg-orange-600 w-full py-2 rounded-md font-semibold text-white">
        Buy Now ⚡
      </button>

      {/* Secure Transaction */}
      <p className="text-xs text-gray-500 mt-3">
        ✔ Secure transaction • ✔ 7-Day Replacement • ✔ Amazon Delivered
      </p>
    </div>
  );
}

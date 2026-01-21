import Rating from "./Rating";
import BuyBox from "./BuyBox";
import ProductImages from "./ProductImages";

export default function AttributeDetails({ selected }) {
  if (!selected) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-300">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Image Gallery */}
        <ProductImages folder={selected.folder} />

        {/* Middle Section */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {selected.name} Feature
          </h2>

          <Rating value={selected.rating} />

          <p className="text-gray-800 text-lg mt-4 leading-relaxed">
            {selected.description}
          </p>

          <hr className="my-4" />

          <p className="text-blue-600 cursor-pointer hover:underline font-medium">
            See more product details
          </p>
        </div>

        {/* Buy Box */}
        <div className="flex justify-end">
          <BuyBox price={selected.price} stock={selected.stock} />
        </div>

      </div>

    </div>
  );
}

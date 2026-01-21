export default function AttributeList({ attributes, selected, onSelect }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Product Features
      </h2>

      <ul className="space-y-3">
        {attributes.map((attr) => (
          <li
            key={attr.id}
            onClick={() => onSelect(attr)}
            className={`
              p-3 rounded-lg cursor-pointer border text-gray-800 transition-all
              ${
                selected?.id === attr.id
                  ? "bg-yellow-200 border-yellow-500 font-semibold"
                  : "hover:bg-gray-200 border-gray-300"
              }
            `}
          >
            {attr.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

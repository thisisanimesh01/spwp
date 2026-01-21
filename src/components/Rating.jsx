export default function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1 text-yellow-500 text-xl">
      {stars.map((star) => (
        <span key={star}>
          {value >= star ? "★" : value >= star - 0.5 ? "⭐" : "☆"}
        </span>
      ))}
      <span className="text-gray-600 text-sm ml-2">{value.toFixed(1)}</span>
    </div>
  );
}

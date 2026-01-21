import { useState, useEffect } from "react";
import { loadImages } from "../utils/loadImages";

export default function ProductImages({ folder }) {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const loaded = loadImages(folder);
    setImages(loaded);
    setSelected(loaded[0]); // default first image
  }, [folder]);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <img
        src={selected}
        alt="product"
        className="w-[350px] rounded-lg shadow border hover:scale-105 transition-transform"
      />

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="thumb"
            onClick={() => setSelected(img)}
            className={`w-16 border rounded cursor-pointer ${
              selected === img
                ? "border-yellow-500 scale-110"
                : "border-gray-300"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}

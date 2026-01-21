import { useState } from "react";
import Header from "../components/Header";
import AttributeList from "../components/AttributeList";
import AttributeDetails from "../components/AttributeDetails";
import attributes from "../data/attributes";

export default function Home() {
  const [selected, setSelected] = useState(attributes[0]);

  return (
    <div className="min-h-screen bg-[#e3e6e6]">
      <Header />

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AttributeList
            attributes={attributes}
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        {/* Product Details */}
        <div className="lg:col-span-3">
          <AttributeDetails selected={selected} />
        </div>

      </div>
    </div>
  );
}

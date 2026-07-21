'use client';

import React, { useState } from 'react';

const UNIT_CATEGORIES = [
  {
    id: "length",
    name: "Length",
    units: [
      { id: "m", name: "Meter (m)", ratio: 1 },
      { id: "cm", name: "Centimeter (cm)", ratio: 0.01 },
      { id: "mm", name: "Millimeter (mm)", ratio: 0.001 },
      { id: "km", name: "Kilometer (km)", ratio: 1000 },
      { id: "inch", name: "Inch (in)", ratio: 0.0254 },
      { id: "ft", name: "Foot (ft)", ratio: 0.3048 },
    ],
  },
  {
    id: "area",
    name: "Area",
    units: [
      { id: "m2", name: "Square Meter (m²)", ratio: 1 },
      { id: "cm2", name: "Square Centimeter (cm²)", ratio: 0.0001 },
      { id: "mm2", name: "Square Millimeter (mm²)", ratio: 0.000001 },
      { id: "ft2", name: "Square Feet (ft²)", ratio: 0.092903 },
    ],
  },
];

export default function UnitConverterPage() {
  const [selectedCategory, setSelectedCategory] = useState(UNIT_CATEGORIES[0]);
  const [fromUnit, setFromUnit] = useState(selectedCategory.units[0]);
  const [toUnit, setToUnit] = useState(selectedCategory.units[1]);
  const [inputValue, setInputValue] = useState("1");

  const handleCategoryChange = (catId) => {
    const category = UNIT_CATEGORIES.find((c) => c.id === catId);
    if (category) {
      setSelectedCategory(category);
      setFromUnit(category.units[0]);
      setToUnit(category.units[1] || category.units[0]);
    }
  };

  const numValue = parseFloat(inputValue) || 0;
  const baseValue = numValue * fromUnit.ratio;
  const result = baseValue / toUnit.ratio;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Technical Unit Converter</h1>
        <p className="text-gray-600">Convert length and area measurements instantly.</p>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex gap-2 mb-6 border-b pb-4">
          {UNIT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                selectedCategory.id === cat.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">From</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-900 mb-3"
            />
            <select
              value={fromUnit.id}
              onChange={(e) => setFromUnit(selectedCategory.units.find((u) => u.id === e.target.value))}
              className="w-full p-3 border rounded-lg text-gray-900 bg-gray-50"
            >
              {selectedCategory.units.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">To (Result)</label>
            <div className="w-full p-3 border rounded-lg font-bold text-lg text-gray-900 bg-gray-50 mb-3">
              {isNaN(result) ? "0" : Number(result.toFixed(6))}
            </div>
            <select
              value={toUnit.id}
              onChange={(e) => setToUnit(selectedCategory.units.find((u) => u.id === e.target.value))}
              className="w-full p-3 border rounded-lg text-gray-900 bg-gray-50"
            >
              {selectedCategory.units.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}
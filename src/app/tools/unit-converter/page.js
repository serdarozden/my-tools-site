'use client';

import React, { useState } from 'react';

const UNIT_CATEGORIES = [
  {
    id: "length",
    name: "Length (Uzunluk)",
    icon: "📏",
    units: [
      { id: "m", name: "Meter (m)", ratio: 1 },
      { id: "cm", name: "Centimeter (cm)", ratio: 0.01 },
      { id: "mm", name: "Millimeter (mm)", ratio: 0.001 },
      { id: "km", name: "Kilometer (km)", ratio: 1000 },
      { id: "inch", name: "Inch (in)", ratio: 0.0254 },
      { id: "ft", name: "Foot (ft)", ratio: 0.3048 },
      { id: "yd", name: "Yard (yd)", ratio: 0.9144 },
    ],
  },
  {
    id: "area",
    name: "Area (Alan)",
    icon: "📐",
    units: [
      { id: "m2", name: "Square Meter (m²)", ratio: 1 },
      { id: "cm2", name: "Square Centimeter (cm²)", ratio: 0.0001 },
      { id: "mm2", name: "Square Millimeter (mm²)", ratio: 0.000001 },
      { id: "ft2", name: "Square Feet (ft²)", ratio: 0.092903 },
      { id: "hectare", name: "Hectare (ha)", ratio: 10000 },
      { id: "acre", name: "Acre (ac)", ratio: 4046.86 },
    ],
  },
  {
    id: "pressure",
    name: "Pressure (Basınç)",
    icon: "⏲️",
    units: [
      { id: "pascal", name: "Pascal (Pa)", ratio: 1 },
      { id: "kpa", name: "Kilopascal (kPa)", ratio: 1000 },
      { id: "bar", name: "Bar", ratio: 100000 },
      { id: "mbar", name: "Millibar (mbar)", ratio: 100 },
      { id: "psi", name: "PSI (Pounds/sq in)", ratio: 6894.76 },
      { id: "atm", name: "Standard Atmosphere (atm)", ratio: 101325 },
      { id: "kgcm2", name: "kgf/cm²", ratio: 98066.5 },
    ],
  },
  {
    id: "volume",
    name: "Volume (Hacim)",
    icon: "🧊",
    units: [
      { id: "m3", name: "Cubic Meter (m³)", ratio: 1 },
      { id: "liter", name: "Liter (L)", ratio: 0.001 },
      { id: "ml", name: "Milliliter (mL)", ratio: 0.000001 },
      { id: "gal", name: "US Gallon (gal)", ratio: 0.00378541 },
      { id: "ft3", name: "Cubic Feet (ft³)", ratio: 0.0283168 },
    ],
  },
  {
    id: "weight",
    name: "Weight / Mass (Ağırlık)",
    icon: "⚖️",
    units: [
      { id: "kg", name: "Kilogram (kg)", ratio: 1 },
      { id: "gram", name: "Gram (g)", ratio: 0.001 },
      { id: "mg", name: "Milligram (mg)", ratio: 0.000001 },
      { id: "ton", name: "Metric Ton (t)", ratio: 1000 },
      { id: "lb", name: "Pound (lbs)", ratio: 0.453592 },
      { id: "oz", name: "Ounce (oz)", ratio: 0.0283495 },
    ],
  },
  {
    id: "power",
    name: "Power & Force (Güç & Kuvvet)",
    icon: "⚡",
    units: [
      { id: "watt", name: "Watt (W)", ratio: 1 },
      { id: "kw", name: "Kilowatt (kW)", ratio: 1000 },
      { id: "hp", name: "Horsepower (HP)", ratio: 745.7 },
      { id: "kn", name: "Kilonewton (kN)", ratio: 1000 },
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

  const handleSwap = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const numValue = parseFloat(inputValue) || 0;
  const baseValue = numValue * fromUnit.ratio;
  const result = baseValue / toUnit.ratio;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800/60 px-3 py-1 rounded-full mb-3 inline-block">
          All-In-One Converter
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
          Universal Engineering Unit Converter
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Convert Length, Pressure, Area, Volume, and Weight measurements with technical precision.
        </p>
      </div>

      {/* Main Converter Card */}
      <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-slate-800">
          {UNIT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory.id === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* FROM */}
          <div className="md:col-span-5 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
            <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">From</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-xl font-bold text-white outline-none transition mb-3"
              placeholder="0"
            />
            <select
              value={fromUnit.id}
              onChange={(e) => setFromUnit(selectedCategory.units.find((u) => u.id === e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-blue-500 transition cursor-pointer"
            >
              {selectedCategory.units.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>

          {/* SWAP BUTTON */}
          <div className="md:col-span-2 flex justify-center py-2">
            <button
              onClick={handleSwap}
              className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-all duration-200 shadow-md hover:rotate-180"
              title="Swap Units"
            >
              🔄
            </button>
          </div>

          {/* TO (RESULT) */}
          <div className="md:col-span-5 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
            <label className="block text-xs font-extrabold text-blue-400 uppercase tracking-wider mb-2">To (Result)</label>
            <div className="w-full bg-slate-900 border border-blue-900/50 rounded-xl px-4 py-3 text-xl font-extrabold text-blue-400 mb-3 truncate">
              {isNaN(result) ? "0" : Number(result.toFixed(6))}
            </div>
            <select
              value={toUnit.id}
              onChange={(e) => setToUnit(selectedCategory.units.find((u) => u.id === e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-blue-500 transition cursor-pointer"
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
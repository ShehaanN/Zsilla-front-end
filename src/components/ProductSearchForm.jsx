import { Search, X } from "lucide-react";
import { useState } from "react";

const ProductSearchForm = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleClear = () => {
    setSearch("");
  };

  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search products..."
        className="w-full border px-10 border-gray-300 rounded-md py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-400  "
      />

      {search && (
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ProductSearchForm;

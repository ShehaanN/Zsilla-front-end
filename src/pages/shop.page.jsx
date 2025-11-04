import { useState } from "react";
import ProductCard4shop from "../components/ProductCard4shop";
import ShopSidebarFilters from "../components/ShopSidebarFilters";
import { useParams } from "react-router";

const ShopPage = () => {
  const { category } = useParams();

  const categories = [
    { _id: "1", name: "T-Shirts" },
    { _id: "2", name: "Pants" },
    { _id: "3", name: "Socks" },
    { _id: "4", name: "Shoes" },
    { _id: "5", name: "Shorts" },
  ];

  const cateid = categories.find(
    (cat) => cat.name.toLowerCase() === category
  )?._id;

  const catename = categories.find(
    (cat) => cat.name.toLowerCase() === category
  )?.name;

  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <div className="w-1/6 h-auto p-4 border-r-1">
          <ShopSidebarFilters
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="w-5/6 ">
          <ProductCard4shop
            selectedCategory={selectedCategory}
            navCategoryId={cateid}
            navCategoryname={catename}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

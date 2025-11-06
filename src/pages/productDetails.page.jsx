import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const products = [
    {
      _id: "1",
      name: "Premium Cotton T-Shirt",
      categoryId: "1",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      price: 29.99,
      sizes: ["S", "M", "L", "XL", "XXL", "XS"],
      stock: 25,
      brand: "FashionCo",
      discount: 10,
    },
    {
      _id: "2",
      name: "Athletic Running Shoes",
      categoryId: "4",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      price: 79.99,
      sizes: ["8", "9", "10", "11", "12"],
      stock: 25,
      brand: "ShoeBrand",
      discount: 5,
    },
    {
      _id: "3",
      name: "Slim Fit Chino Pants",
      categoryId: "2",
      image:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
      price: 59.99,
      sizes: ["30", "32", "34", "36", "38"],
      stock: 15,
      brand: "PantsCo",
      discount: 15,
    },
    {
      _id: "4",
      name: "Athletic Crew Socks",
      categoryId: "3",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=600&fit=crop",
      price: 12.99,
      sizes: ["M", "L", "XL"],
      stock: 30,
      brand: "SockMakers",
      discount: 5,
    },
    {
      _id: "5",
      name: "Casual Sport Shorts",
      categoryId: "5",
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
      price: 34.99,
      sizes: ["S", "M", "L", "XL"],
      stock: 20,
      brand: "SportWear",
      discount: 0,
    },
    {
      _id: "6",
      name: "Graphic Print T-Shirt",
      categoryId: "1",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
      price: 24.99,
      stock: 18,
      sizes: ["S", "M", "L", "XL", "XXL"],
      brand: "TeeStyle",
      discount: 20,
    },
  ];

  const product = products.find((prod) => prod._id === id);

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Discount: {product.discount}%</p>
      <p>Available Sizes: {product.sizes.join(", ")}</p>
    </div>
  );
};

export default ProductDetailsPage;

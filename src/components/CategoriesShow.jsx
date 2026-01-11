import { Link } from "react-router";

const CategoriesShow = () => {
  const categories = [
    {
      _id: "1",
      name: "T-Shirts",
      imageUrl:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      _id: "2",
      name: "Pants",
      imageUrl:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      _id: "3",
      name: "Socks",
      imageUrl:
        "https://images.unsplash.com/photo-1640026199235-c24aa417b552?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      _id: "4",
      name: "Shoes",
      imageUrl:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      _id: "5",
      name: "Shorts",
      imageUrl:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
  ];

  return (
    <section className="px-4 lg:px-16 py-16 bg-gray-50">
      <div className="text-center mb-12 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Shop by Categories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum
          molestiae reiciendis! Voluptates in libero facilis dolore quae eaque
          perferendis.
        </p>
      </div>
      {/* categories grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {categories.slice(0, 5).map((cate) => (
          <Link key={cate._id} className="group">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:translate-y-1">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ">
                <img
                  src={cate.imageUrl}
                  alt={cate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {cate.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {cate.description || `Discover ${cate.name.toLowerCase()}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesShow;

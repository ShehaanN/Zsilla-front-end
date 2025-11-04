const CasualInspirations = () => {
  return (
    <section className=" grid grid-cols-3 gap-4 px-4 lg:px-16 py-8">
      <div className="rounded-3xl overflow-hidden relative h-[350px] border-0 shadow-lg group p-4 ">
        <h1 className="text-7xl text-gray-800 mb-2.5 ">Casual Inspirations</h1>
        <p className="text-gray-600 text-xl p-2">
          Explore our collection of casual outfits that blend comfort and style.
        </p>
        <div className="mt-4 p-2 m-5">
          <button className="w-full p-2 bg-white border-2 border-gray-600 text-gray-800 font-semibold cursor-pointer  px-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
            Shop Now
          </button>
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden relative h-[350px] border-0 shadow-lg group ">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop"
            alt=""
          />
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden relative h-[350px] border-0 shadow-lg group ">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200">
          <img
            src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&h=400&fit=crop"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CasualInspirations;

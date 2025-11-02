
const CreatProducat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const price_min = e.target.minPrice.value;
    const price_max = e.target.maxPrice.value;
    const newProducat = e.target.conditionNew.value;
    const usedProducat = e.target.conditionUsed.value;
    const usage = e.target.usageTime.value;
    const image = e.target.imageUrl.value;
    const seller_name = e.target.sellerName.value;
    const seller_email = e.target.sellerEmail.value;
    const sellerContact = e.target.sellerContact.value;
    const sellerImageUrl = e.target.sellerImageUrl.value;
    const location = e.target.location.value;
    const description = e.target.description.value;

    console.log({
      title,
      category,
      price_min,
      price_max,
      newProducat,
      usedProducat,
      usage,
      image,
      seller_email,
      seller_name,
      sellerContact,
      sellerImageUrl,
      location,
      description
    })

  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <button className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          {/* <ArrowLeft className="w-5 h-5 mr-2" /> */}
          <span className="font-medium">Back To Products</span>
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Create <span className="text-purple-600">A Product</span>
        </h1>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Title and Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
                {/* ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>} */}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white`}
                >
                  {/* ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  } */}
                 <option value="" disabled>
                Select category
              </option>
              <option value="Vehicles">Computers & Accessories</option>
              <option value="Plants">Mobile & Accessories</option>
              <option value="Foods">Gaming & Accessories</option>
              <option value="Home & Living">Camera & Photography</option>
              <option value="Characters">Audio Systems</option>
              <option value="Space">Home Electronics</option>
              <option value="Animals">Other Gadgets</option>
                </select>
              </div>
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="minPrice"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Min Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="minPrice"
                  placeholder="e.g. 18.5"
                  step="0.01"
                  className={`w-full focus:outline-none  px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
               
              </div>

              <div>
                <label
                  htmlFor="maxPrice"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Max Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max Price"
                  step="0.01"
                  className="w-full focus:outline-none  px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Condition and Usage Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Condition
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="conditionNew"
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:outline-none focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">Brand New</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="conditionUsed"
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">Used</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="usageTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product Usage time
                </label>
                <input
                  type="text"
                  id="usageTime"
                  name="usageTime"
                  placeholder="e.g. 1 year 3 month"
                  className="w-full focus:outline-none  px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Product Image URL */}
            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Product Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://..."
                className={`w-full focus:outline-none  px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
              />
            
            </div>

            {/* Seller Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="sellerName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Seller Name
                </label>
                <input
                  type="text"
                  name="sellerName"
                  placeholder="e.g. Artisan Hustlers"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all`}
                />
             
              </div>

              <div>
                <label
                  htmlFor="sellerEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Seller Email
                </label>
                <input
                  type="email"
                  id="sellerEmail"
                  name="sellerEmail"
                  placeholder="lei13155@nlnlord.com"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none  transition-all`}
                />
               
              </div>
            </div>

            {/* Seller Contact and Image URL Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="sellerContact"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Seller Contact
                </label>
                <input
                  type="tel"
                  name="sellerContact"
                  placeholder="e.g. +1-555-1234"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all`}
                />
               
              </div>

              <div>
                <label
                  htmlFor="sellerImageUrl"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Seller Image URL
                </label>
                <input
                  type="url"
                  id="sellerImageUrl"
                  name="sellerImageUrl"
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, Country"
                className={`w-full px-4 py-3 rounded-lg border 
            border-red-500  border-gray-300
                focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
              />
             
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Simple Description about your Product
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
              />
             
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Create A Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatProducat;

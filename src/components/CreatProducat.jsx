import React from "react";
import Navbar from "./Navbar";

const CreatProducat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
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
                  <option value="">Select a Category</option>
                  <option>Name</option>
                  {/* {PRODUCT_CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))} */}
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
                  id="minPrice"
                  name="minPrice"
                  placeholder="e.g. 18.5"
                  step="0.01"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
                {/* {errors.minPrice && <p className="text-red-500 text-sm mt-1">{errors.minPrice}</p>}
                 ${
                    errors.minPrice ? 'border-red-500' : 'border-gray-300'
                  } */}
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
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Optional (default = Min Price)"
                  step="0.01"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                      name="condition"
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">Brand New</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
              />
              {/* ${
                  errors.imageUrl ? 'border-red-500' : 'border-gray-300'
                }
              {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
              */}
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
                  id="sellerName"
                  name="sellerName"
                  placeholder="e.g. Artisan Hustlers"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
                {/* ${
                    errors.sellerName ? 'border-red-500' : 'border-gray-300'
                  }
                {errors.sellerName && <p className="text-red-500 text-sm mt-1">{errors.sellerName}</p>} */}
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
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
                {/* {errors.sellerEmail && <p className="text-red-500 text-sm mt-1">{errors.sellerEmail}</p>}
                ${
                    errors.sellerEmail ? 'border-red-500' : 'border-gray-300'
                  } */}
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
                  id="sellerContact"
                  name="sellerContact"
                  placeholder="e.g. +1-555-1234"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
                {/* {errors.sellerContact && <p className="text-red-500 text-sm mt-1">{errors.sellerContact}</p>} */}
                {/* ${
                    errors.sellerContact ? 'border-red-500' : 'border-gray-300'
                  } */}
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
              {/* {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>} */}
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
                value={""}
                onChange={""}
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                rows={4}
                className={`w-full px-4 py-3 rounded-lg borderfocus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none`}
              />
              {/* ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }  */}
              {/* {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>} */}
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

import { useContext } from "react";
import { AuthContex } from "../Context/AuthContex";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CreatProducat = () => {
  const { user } = useContext(AuthContex);
  const naviget = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.owenSteats.value;

    const price_min = e.target.minPrice.value;
    const price_max = e.target.maxPrice.value;
    const created_at = new Date();
    const image = e.target.imageUrl.value;
    const location = e.target.location.value;
    const seller_image = e.target.sellerImageUrl.value;
    const seller_name = e.target.sellerName.value;
    const seller_email = e.target.sellerEmail.value;
    const usage = e.target.usageTime.value;
    const description = e.target.description.value;
    const seller_contact = e.target.sellerContact.value;
    const status = e.target.mystutase.value;
    const condition = e.target.condition.value;

    const insertData = {
      title,
      category,
      price_min,
      price_max,
      usage,
      image,
      seller_email,
      seller_name,
      location,
      description,
      created_at,
      seller_image,
      seller_contact,
      status,
      condition,
    };

    fetch("http://localhost:3000/producat", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(insertData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Save Database",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
          naviget("/allproduct")
        }
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100  px-4 sm:px-6 lg:px-8 py-19">
      <div className="max-w-3xl mx-auto">
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
                  required
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
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
                  name="owenSteats"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white`}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>Computers & Accessories</option>
                  <option>Mobile & Accessories</option>
                  <option>Gaming & Accessories</option>
                  <option>Camera & Photography</option>
                  <option>Audio Systems</option>
                  <option>Home Electronics</option>
                  <option>Other Gadgets</option>
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
                  required
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
                  required
                  placeholder="Max Price"
                  step="0.01"
                  className="w-full focus:outline-none  px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Condition and Usage Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Condition
                </label>
                <select
                  id="category"
                  name="condition"
                  required
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white`}
                >
                  {/* ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  } */}
                  <option value="Select Usede" disabled>
                    Select Usede
                  </option>
                  <option>used</option>
                  <option>Brand New</option>
                </select>
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
                  required
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
                // type="url"
                name="imageUrl"
                required
                placeholder="Your producat imge"
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
                  required
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
                  required
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

                  disabled
                  defaultValue={user.photoURL}
                  className="w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Status
                </label>
                <select
                  id="category"
                  name="mystutase"
                  className={`w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white`}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>pending</option>
                  <option>Success</option>
                </select>
              </div>

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
                  required

                  placeholder="City, Country"
                  className={`w-full px-4 py-3 rounded-lg border 
            border-black  focus:outline-none 
                focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                />
              </div>
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

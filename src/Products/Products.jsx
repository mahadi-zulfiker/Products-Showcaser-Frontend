import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");

  const [filterOptions, setFilterOptions] = useState({});
  const [totalDataLength, setTotalDataLength] = useState(0);
  const totalPages = Math.ceil(totalDataLength / 12);

  useEffect(() => {
    axios
      .get(
        `https://product-showcaser-platform.vercel.app/products/?page=${page}&search=${search}&sort=${sort}&category=${category}&brand=${brand}&priceRange=${priceRange}`
      )
      .then((res) => {
        setData(res.data.data);
        setTotalDataLength(res.data.totalDocCount);
      });
  }, [brand, category, page, priceRange, search, sort]);

  useEffect(() => {
    axios.get("https://product-showcaser-platform.vercel.app/products/filterOptions").then((res) => {
      setFilterOptions(res.data);
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto my-8 px-4">
      <h1 className="text-center text-4xl font-semibold text-gray-800 mb-6">
        Products Showcasing Platform
      </h1>
      <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          type="text"
          className="w-full lg:w-auto bg-gray-200 px-4 py-2 outline-none placeholder:text-gray-500 rounded shadow"
        />
        {filterOptions.brandNames && (
          <div className="flex flex-wrap items-center gap-4">
            <select
              onChange={(e) => setCategory(e.target.value)}
              defaultValue=""
              className="w-full lg:w-auto px-4 py-2 bg-gray-200 rounded shadow">
              <option disabled value="">
                Select a category
              </option>
              {filterOptions.categorys.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>

            <select
              defaultValue=""
              onChange={(e) => setBrand(e.target.value)}
              className="w-full lg:w-auto px-4 py-2 bg-gray-200 rounded shadow">
              <option disabled value="">
                Choose a brand name
              </option>
              {filterOptions.brandNames.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>

            <select
              defaultValue=""
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full lg:w-auto px-4 py-2 bg-gray-200 rounded shadow">
              <option disabled value="">
                Price range
              </option>
              <option value="0,500">$0-500</option>
              <option value="501,1000">$501-1000</option>
              <option value="1001,5000">$1000-5000</option>
            </select>

            <select
              defaultValue=""
              onChange={(e) => setSort(e.target.value)}
              className="w-full lg:w-auto px-4 py-2 bg-gray-200 rounded shadow">
              <option disabled value="">
                Sort
              </option>
              <option value="price">Price - Low to High</option>
              <option value="-price">Price - High to Low</option>
              <option value="-createdAt">Recently added</option>
            </select>
          </div>
        )}
      </div>

      {data.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data.map((item, i) => (
            <ProductCard data={item} key={i} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl text-center text-gray-700">No data found!!</h2>
      )}

      <div className="flex flex-wrap justify-center items-center gap-2 py-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 text-white text-lg sm:text-xl rounded shadow transition-colors">
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            onClick={() => setPage(i + 1)}
            key={i}
            className={`px-3 py-2 text-white text-lg sm:text-xl rounded shadow transition-colors ${page === i + 1 ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
              }`}>
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 text-white text-lg sm:text-xl rounded shadow transition-colors">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Products;


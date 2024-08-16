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
  const [sort, setSort] = useState("")

  const [filterOptions, setFilterOptions] = useState({});
  const [totalDataLength, setTotalDataLength] = useState(0);
  const totalPages = Math.ceil(totalDataLength / 12);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/products/?page=${page}&search=${search}&sort=${sort}&category=${category}&brand=${brand}&priceRange=${priceRange}`
      )
      .then((res) => {
        setData(res.data.data);
        setTotalDataLength(res.data.totalDocCount);
      });
  }, [brand, category, page, priceRange, search, sort]);

  useEffect(() => {
    axios.get("http://localhost:3000/products/filterOptions").then((res) => {
      setFilterOptions(res.data);
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto my-4">
      <h1 className="text-center text-3xl text-black mb-4">Products Showcasing Platform</h1>
      <div className="mb-4 flex justify-between">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          type="text"
          className="bg-gray-400 px-4 py-2 outline-none placeholder:text-gray-200 rounded"
        />
        {filterOptions.brandNames && (
          <div className="space-x-1 space-y-1">
            <select
              onChange={(e) => setCategory(e.target.value)}
              defaultValue=""
              className="px-2 py-1 bg-gray-200 rounded">
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
              className="px-2 py-1 bg-gray-200 rounded">
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
              className="px-2 py-1 bg-gray-200 rounded">
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
              className="px-2 py-1 bg-gray-200 rounded">
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
        <div className="p-1 md:p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:gap-3 md:gap-2 gap-1">
          {data.map((item, i) => (
            <ProductCard data={item} key={i} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl text-center">No data found!!</h2>
      )}

      <div className="flex justify-center gap-2 py-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 disabled:bg-blue-300 px-3 py-1 text-white text-xl rounded">
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            onClick={() => setPage(i + 1)}
            key={i}
            className={`bg-blue-500 px-3 py-1 text-white text-xl rounded ${
              page === i + 1 ? "bg-blue-600" : "bg-blue-500"
            }`}>
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 disabled:bg-blue-300 px-3 py-1 text-white text-xl rounded">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Products;
// eslint-disable-next-line react/prop-types
const ProductCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { productName, description, category, ratings, price } = data;

    // Generate a random image URL for demonstration
    const image_url = `https://picsum.photos/200/300?random=${Math.random()}`;

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <img
                className="mb-2 w-full h-48 object-cover"
                loading="lazy"
                src={image_url}
                alt={productName}
            />
            <div className="p-4">
                <p className="font-semibold italic text-lg text-gray-800">${price}</p>
                <h2 className="font-semibold truncate text-gray-900 text-xl my-2">{productName}</h2>
                <p className="h-20 text-gray-700 text-sm line-clamp-3 mb-4">
                    {description}
                </p>
                <div className="flex justify-between items-center">
                    <p className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">
                        {category}
                    </p>
                    <h4 className="flex items-center gap-1">
                        <img
                            className="h-4 w-4"
                            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                            alt="Rating"
                        />
                        <p className="text-sm text-gray-700">{ratings}</p>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

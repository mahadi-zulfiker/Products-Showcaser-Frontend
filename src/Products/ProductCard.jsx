const ProductCard = ({ data }) => {

    const { productName, description, category, ratings, price } = data;


    const image_url = `https://picsum.photos/200/300?random=${Math.random()}`;
    return (
        <div className="border border-gray-300 rounded hover:bg-gray-100 hover:shadow-lg duration-300 cursor-pointer">
            <img
                className="mb-2 w-full h-40 bg-cover"
                loading="lazy"
                src={image_url}
                alt={productName}
            />
            <div className="p-1 md:p-2">
                <p className="font-semibold italic text-xl">${price}</p>
                <h2 className="font-semibold truncate">{productName}</h2>
                <p className="h-20 line-clamp-3">{description}</p>
                <div className="flex justify-between">
                    <p className="p-1 bg-blue-300 rounded text-sm">{category}</p>
                    <h4 className="flex items-center gap-2">
                        <img className="h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                        <p>{ratings}</p>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
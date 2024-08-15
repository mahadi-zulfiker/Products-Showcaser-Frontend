const Button = ({ text = "Button" }) => {
    return (
        <button className="px-3 py-1 bg-blue-500 rounded text-gray-200 hover:bg-blue-400 duration-150">
            {text}
        </button>
    );
};

export default Button;
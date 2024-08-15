import Button from "../componant/Button";

const Header = () => {
    return (
        <div className="w-full bg-gray-700/20">
            <div className="max-w-screen-2xl mx-auto py-4 flex justify-between p-1 md:p-2">
                <div>
                    <img
                        className="w-12 h-12"
                        src="https://cdn-icons-png.flaticon.com/512/2489/2489815.png"
                        alt=""
                    />
                </div>
                <Button text="Sign In" />
            </div>
        </div>
    );
};

export default Header;
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-6 border-t bg-gray-100">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <h3 className="text-center sm:text-left text-gray-600 text-sm sm:text-base mb-4 sm:mb-0">
                    All rights reserved by <span className="font-semibold text-gray-800">Mahadi Zulfiker</span> | 2024 |
                </h3>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


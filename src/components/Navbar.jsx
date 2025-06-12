import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FontSizeControls from "./FontSizeControls";

const Navbar = () => {
    const { i18n } = useTranslation();

    return (
        <nav className="bg-blue-800 text-white px-6 py-3 flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold mb-2 md:mb-0">
                <Link to="/">DLC</Link>
            </div>

            <ul className="flex flex-col md:flex-row items-center gap-4 text-lg">
                <li>
                    <Link to="/" className="hover:text-yellow-300">Home</Link>
                </li>
                <li>
                    <Link to="/tutorials" className="hover:text-yellow-300">Tutorials</Link>
                </li>
                <li>
                    <Link to="/chat" className="hover:text-yellow-300">AI Chat</Link>
                </li>
                <li>
                    <Link to="/feedback" className="hover:text-yellow-300">Feedback</Link>
                </li>
                <li>
                    <FontSizeControls />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

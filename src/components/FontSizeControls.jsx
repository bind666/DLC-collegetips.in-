import { useFontSize } from "../context/FontSizeContext";

const FontSizeControls = () => {
    const { increaseFont, decreaseFont } = useFontSize();

    return (
        <div className="flex gap-2 mt-2">
            <button onClick={increaseFont} className="bg-blue-600 text-white px-3 py-1 rounded">A+</button>
            <button onClick={decreaseFont} className="bg-blue-600 text-white px-3 py-1 rounded">A−</button>
        </div>
    );
};

export default FontSizeControls;

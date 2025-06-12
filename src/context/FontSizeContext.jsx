import { createContext, useContext, useState } from "react";

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFont = () => setFontSize((prev) => prev + 2);
    const decreaseFont = () => setFontSize((prev) => Math.max(12, prev - 2));

    return (
        <FontSizeContext.Provider value={{ fontSize, increaseFont, decreaseFont }}>
            <div style={{ fontSize: `${fontSize}px` }}>{children}</div>
        </FontSizeContext.Provider>
    );
};

export const useFontSize = () => useContext(FontSizeContext);

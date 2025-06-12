import { useTranslation } from "react-i18next";
import FontSizeControls from "../components/FontSizeControls";
import VoiceCommand from "../components/VoiceCommand";

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="p-6">
            <section className="text-center p-10">
                <h1 className="text-4xl font-bold mb-4">Empowering Digital Literacy!</h1>
                <p className="text-lg">Helping parents and elderly users master modern digital tools.</p>
            </section>

            <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
                <div>
                    <label className="block mb-2 font-semibold">🌐 Change Language:</label>
                    <select
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        className="border p-2"
                    >
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                    </select>
                </div>

                <FontSizeControls />
            </div>

            <VoiceCommand />

            {/* 🎙️ Voice Command Help Section */}
            <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">🎙️ Try These Voice Commands:</h2>
                <ul className="list-disc list-inside text-lg space-y-1">
                    <li><strong>English:</strong> "Open Tutorials", "Open Chat", "Give Feedback", "Go Home"</li>
                    <li><strong>हिन्दी:</strong> "ट्यूटोरियल खोलो", "चैट खोलो", "प्रतिक्रिया दो", "होम जाओ"</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">Speak clearly after clicking the 🎙️ Speak Command button.</p>
            </div>
        </div>
    );
};

export default Home;

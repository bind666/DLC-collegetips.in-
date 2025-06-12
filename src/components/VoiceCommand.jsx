import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const VoiceCommand = () => {
    const recognitionRef = useRef(null);
    const { i18n } = useTranslation();

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech Recognition is not supported in your browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = i18n.language === "hi" ? "hi-IN" : "en-US"; // dynamic language
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            console.log("Recognized:", command);

            // Check commands based on language
            if (
                command.includes("open tutorials") ||
                command.includes("tutorials") ||
                command.includes("ट्यूटोरियल खोलो")
            ) {
                window.location.href = "/tutorials";
            } else if (
                command.includes("open chat") ||
                command.includes("chat") ||
                command.includes("चैट खोलो")
            ) {
                window.location.href = "/chat";
            } else if (
                command.includes("give feedback") ||
                command.includes("feedback") ||
                command.includes("प्रतिक्रिया दो")
            ) {
                window.location.href = "/feedback";
            } else if (
                command.includes("go home") ||
                command.includes("home") ||
                command.includes("होम जाओ")
            ) {
                window.location.href = "/";
            } else {
                alert("Unrecognized command: " + command);
            }
        };

        recognition.onerror = (event) => {
            console.error("Speech Recognition Error:", event.error);
        };

        recognitionRef.current = recognition;
    }, [i18n.language]); // Re-initialize when language changes

    const startListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
    };

    return (
        <button
            onClick={startListening}
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
        >
            🎙️ Speak Command
        </button>
    );
};

export default VoiceCommand;

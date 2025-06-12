const ChatBot = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Talk to DigiBuddy 🤖</h2>
      <iframe
        src="https://chatbot-livid-five.vercel.app/"
        title="DigiBuddy Chat"
        width="100%"
        height="600"
        allow="microphone;"
        className="w-full border rounded shadow"
      ></iframe>
    </div>
  );
};

export default ChatBot;

import { useState } from "react";

export default function ChatWindow() {
    const [input, setInput] = useState("");
    const [showThinking, setShowThinking] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Show fake AI thinking for 1.5s
        setShowThinking(true);
        setInput("");
        setTimeout(() => setShowThinking(false), 1500);
    };

    return (
        <div className="h-full flex flex-col bg-[#0f0f0f]">
            {/* Header */}
            <div className="p-4 border-b border-gray-800">
                <h2 className="text-xl font-semibold text-white">Research Assistant</h2>
                <p className="text-sm text-gray-400">
                    You are not authenticated. Please log in to chat with your documents.
                </p>
            </div>

            {/* Message area */}
            <div className="flex-1 p-4 flex flex-col justify-center items-center space-y-4">
                <div className="text-center text-gray-400">
                    <p>Login to start chatting with your PDFs!</p>
                </div>

                {showThinking && (
                    <div className="text-gray-400 flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                        <span>AI is thinking...</span>
                    </div>
                )}
            </div>

            {/* Input area */}
            <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-3 rounded-md bg-[#1c1c1c] border border-gray-600 text-white
                                   focus:outline-none focus:border-[#4C82FB]"
                    />
                    <button 
                        type="submit"
                        className="px-6 py-2 bg-[#4C82FB] text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

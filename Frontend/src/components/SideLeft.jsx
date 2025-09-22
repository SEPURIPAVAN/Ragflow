import { useState } from "react";

export default function SideLeft() {
    const [conversations] = useState([
        { id: 1, title: "Sample Chat 1", time: "2m ago" },
        { id: 2, title: "Sample Chat 2", time: "5m ago" },
        { id: 3, title: "Sample Chat 3", time: "10m ago" },
    ]);

    return (
        <div className="h-full p-4 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">Chat History</h2>
                <button 
                    disabled
                    className="text-sm bg-[#4C82FB] px-3 py-1 rounded opacity-50 cursor-not-allowed"
                >
                    New Chat
                </button>
            </div>
            
            {/* Fake conversation list */}
            <div className="flex-1 overflow-y-auto space-y-2">
                {conversations.map((conv) => (
                    <div 
                        key={conv.id} 
                        className="p-3 rounded-lg bg-[#1c1c1c] hover:border hover:border-[#4C82FB] cursor-not-allowed"
                    >
                        <div className="text-sm text-white truncate">{conv.title}</div>
                        <div className="text-xs text-gray-400">{conv.time}</div>
                    </div>
                ))}

                {/* If no conversations, fallback message */}
                {conversations.length === 0 && (
                    <div className="text-gray-400 text-sm text-center mt-8">
                        Login to view your chat history.
                    </div>
                )}
            </div>

            {/* Logout button */}
            <div className="mt-auto pt-4 border-t border-gray-700">
                <button 
                    disabled
                    className="flex items-center justify-center w-full p-3 rounded-lg bg-[#1c1c1c] 
                               text-gray-300 opacity-50 cursor-not-allowed"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

import { useState } from "react";

export default function SideLeft() {
    const [conversations] = useState([
        { id: 1, title: "Sample Chat 1", time: "2m ago" },
        { id: 2, title: "Sample Chat 2", time: "5m ago" },
    ]);

    return (
        <div className="h-full p-4 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">
                    Chat History</h2>
            </div>
            
        {/* Fake conversation list */}
        <div className="flex-1 overflow-y-auto space-y-2">
            {conversations.map((conv) => (
                <div 
                    key={conv.id} 
                    className="p-3 rounded-lg bg-[#1c1c1c] hover:border
                             hover:border-[#4C82FB]">

                    <div className="text-sm text-white truncate">
                        {conv.title}</div>

                    <div className="text-xs text-gray-400">
                        {conv.time}</div>
                </div>
            ))}
            
            {/* If no conversations, fallback message */}
            {conversations.length === 0 && (
                <div className="text-gray-400 text-sm text-center mt-8">
                    View your chat history.
                </div>
            )}
        </div>

        <div className="text-center mt-5">
            <a href="/" className="text-blue-400 hover:text-blue-200">
             Back to Home</a>
        </div>

        </div>
        
    );
}
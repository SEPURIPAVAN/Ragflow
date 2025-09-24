import { useState } from "react";

export default function SidebarRight() {
    const [uploadedFiles] = useState([
        { name: "SampleDoc1.pdf", size: "1.2 MB" },
        { name: "SampleDoc2.pdf", size: "800 KB" },
    ]);

    return (
        <div className="p-4">
            <h2 className="text-lg mb-4 font-semibold text-white">
                Documents</h2>

            {/* Disabled upload area */}
            <div className="border-2 border-dashed border-[#4C82FB]
             p-6 rounded-xl text-center opacity-50">
                
                <div className="text-gray-400">
                    Upload PDFs and start chatting.
                </div>
            </div>

            {/* Fake uploaded files */}
            {uploadedFiles.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (

                        <li key={index} className="p-3 rounded-lg 
                        bg-[#1c1c1c] hover:bg-[#2a2a2a] flex justify-between">

                            <span className="text-sm text-white truncate">
                                {file.name}</span>

                            <span className="text-xs text-gray-500">
                                {file.size}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Fallback message if no files */}
            {uploadedFiles.length === 0 && (
                <div className="mt-4 text-gray-500 text-sm text-center">
                    No documents uploaded
                </div>
            )}
        </div>
    );
}
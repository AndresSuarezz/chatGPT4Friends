import React, { useState } from "react";
import { fetchGPT } from "../api/Api";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    setMessages([...messages, { sender: "user", content: inputValue }]);
    setInputValue("");

    setIsLoading(true);
    const gptResponse = await fetchGPT(inputValue);
    setIsLoading(false);

    setMessages((prevMessage) => [
      ...prevMessage,
      { sender: "gpt3", content: gptResponse },
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow overflow-y-auto bg-white dark:bg-gray-900">
        {/* Mensajes */}
        <div className="max-w-md mx-auto mt-10">
          {messages && messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 text-white mb-4 rounded-t-md ${
                message.sender === "user"
                  ? "bg-blue-500 dark:bg-blue-800"
                  : "bg-green-500 dark:bg-green-800"
              }`}
            >
              <p>{message.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>

      {/* Form to send question */}
      <div className="bg-gray-200 dark:bg-gray-800 p-4 flex-none">
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-2 border border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded"
            placeholder="Escribe tu mensaje aquí"
          />
          <button
            type="submit"
            className="bg-blue-500 dark:bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

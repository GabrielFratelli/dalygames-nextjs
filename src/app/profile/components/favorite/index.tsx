"use client";
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [gameName, setGameName] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleButton() {
    setShowInput(!showInput);
    input !== "" && setGameName(input);
    setInput("");
  }

  function cleanButton() {
    setInput("");
  }

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleButton();
    }
  };

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black px-2 outline-none"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={handleEnterKeyPress}
          />
          <button onClick={cleanButton}>
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all"
          onClick={handleButton}
        >
          <FiEdit size={24} color="white" />
        </button>
      )}

      {gameName ? (
        <div>
          <span className="text-white">Jogo Favorito:</span>
          <p className="font-bold text-white">{gameName}</p>
        </div>
      ) : (
        <p className="font-bold text-white">...</p>
      )}
    </div>
  );
}

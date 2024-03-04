import React, { useState } from "react";
import { Search } from "lucide-react";
import Model from "./components/Model";

const App = () => {
  const [showModel, setShowModel] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="bg-gradient-to-r from-opacity-50 to-opacity-100 via-opacity-50 bg-gray-200 dark:from-opacity-50 dark:to-opacity-80 dark:via-opacity-80 dark:bg-gray-800 bg-blend-lighten dark:bg-blend-darken h-screen flex flex-col justify-center items-center gap-6 backdrop-filter backdrop-blur-lg">
      <h1 className="text-gray-600 dark:text-gray-500">
        Git Box - Discover Git user information.
      </h1>
      <div className={`flex ${username.trim() === "" ? "" : "animate-shake"}`}>
        <input
          className="p-2 w-[20rem] h-10 bg-gray-100 rounded-l-lg dark:text-gray-300 text-gray-500 dark:bg-gray-700"
          placeholder="@mrravipandee"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="p-2 w-14 text-gray-400 bg-white rounded-r-lg dark:hover:bg-gray-600 dark:bg-gray-700"
          onClick={() => {
            console.log('Button clicked');
            setShowModel(true);
          }}
        >
          <Search />
        </button>
      </div>
      {showModel && (
        <Model onClose={() => {
          console.log('Model closed');
          setShowModel(false);
        }} username={username} />
      )}
    </div>
  );
};

export default App;

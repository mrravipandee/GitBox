import React, { useState } from "react";
import { X, User, Users, UserPlus, MapPin } from "lucide-react";

const Model = ({ onClose, username }) => {
  const API_URL = `https://api.github.com/users/${username}`;
  const API_KEY = import.meta.env.VITE_REACT_APP_URL;
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [picture, setPicture] = useState(null);
  const userUrl = `https://github.com/${username}`;

  fetch(API_URL, {
    headers: {
      Authorization: `${API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setPicture(`${data.avatar_url}`);
      setName(`${data.name}`);
      setLocation(`${data.location}`);
      setFollowers(`${data.followers}`);
      setFollowing(`${data.following}`);
    })
    .catch((error) => {
      console.error("Error:", error);
      const notFound = document.getElementById("not-found");
      notFound.innerHTML = `<p>User not found</p>`;
    });

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-gray-700">
        <button
          onClick={onClose}
          className="place-self-end dark:text-gray-900 dark:hover:text-gray-700"
        >
          <X size={25} />
        </button>
        <div className="bg-gray-200 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <div className="card-bg">
            <img
              className="h-[8rem] w-[8rem] rounded-full"
              src={picture}
              alt=""
            />
          </div>
          <div className="card-info">
            <h3 className="text-2xl font-bold text-center" id="user-name">
              {name}
            </h3>
            <p className="flex text-base justify-center text-center">
              <MapPin size={20} className="mt-1 " />
              <span className="p-[2px] " id="location">
                {location}
              </span>
            </p>
            <div className="follow flex gap-8 mt-4 justify-center">
              <div className="followers">
                <h3 className="flex text-xl font-bold justify-center">{followers}</h3>
                <p className="flex">
                  <User size={20} /> Followers
                </p>
              </div>
              <div className="following">
                <h3 className="flex text-xl font-bold justify-center">{following}</h3>
                <p className="flex p-1">
                  <Users size={20} /> Followers
                </p>
              </div>
            </div>
          </div>
          <a href={userUrl} target="_blank">
          <button
            
            type="button"
            class="text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Follow him <UserPlus size={18} className="ml-1" />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Model;

import React, { useState, useRef } from "react";

const App = () => {
  const [nameEditing, setEditName] = useState(false);
  const [emailEditing, setEditEmail] = useState(false);

  const [img, setImg] = useState(() => {
    const profile = localStorage.getItem("user");
    return profile ? JSON.parse(profile) : null;
  });
  const [name, setName] = useState(() => {
    const name = localStorage.getItem("name");
    return name ? JSON.parse(name) : "John Doe";
  });
  const [email, setEmail] = useState(() => {
    const email = localStorage.getItem("email");
    return email ? JSON.parse(email) : "johndoe@gmail.com";
  });

  const fileRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImg(url);
    localStorage.setItem("user", JSON.stringify(url));
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        {/* Profile Image */}
        <div onClick={() => fileRef.current.click()} className="cursor-pointer">
          {img ? (
            <img
              src={img}
              alt="profile"
              className="h-20 w-20 rounded-full object-cover mx-auto"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-gray-400 mx-auto flex items-center justify-center text-white">
              +
            </div>
          )}
        </div>

        {/* Hidden Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={handleChange}
          className="hidden"
        />

        {nameEditing ? (
          <input
            value={name}
            onChange={nameChange}
            onBlur={() => {
              if (!name.trim()) {
                alert("Name required");
                return;
              }
              setEditName(false);
              localStorage.setItem("name", JSON.stringify(name));
            }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") {
                if (!name.trim()) {
                  alert("Name required");
                  return;
                }
                setEditName(false);
                localStorage.setItem("name", JSON.stringify(name));
              }
            }}
            className="mt-2 cursor-pointer"
          />
        ) : (
          <h1 className="mt-2 cursor-pointer" onClick={() => setEditName(true)}>
            {name}
          </h1>
        )}

        {emailEditing ? (
          <input
            type="email"
            value={email}
            onChange={emailChange}
            onBlur={() => {
              if (!email.includes("@") || !email.includes(".")) {
                alert("Enter valid email");
                return;
              }
              setEditEmail(false);
              localStorage.setItem("email", JSON.stringify(email));
            }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") {
                if (!email.includes("@") || !email.includes(".")) {
                  alert("Enter valid email");
                  return;
                }
                setEditEmail(false);
                localStorage.setItem("email", JSON.stringify(email));
              }
            }}
            className="mt-2 cursor-pointer"
          />
        ) : (
          <p className="mt-2 cursor-pointer" onClick={() => setEditEmail(true)}>
            {email}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;

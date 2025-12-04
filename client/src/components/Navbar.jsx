import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { getCurrentUser } from "../util";
import write from "../../public/edit.png";
import homeIcon from "../../public/home.png";
import aboutIcon from "../../public/aboutus.png";
import blogIcon from "../../public/blogs.png";
import { Menu, X } from "lucide-react";

function Navbar() {
const [user, setUser] = useState(null);
const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();

const handleNavigate = () => navigate("/login");

useEffect(() => {
setUser(getCurrentUser());
}, []);

return ( <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50"> <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6"> <h1 className="text-3xl font-bold text-gray-800">MindDraft</h1>

```
    <div className="hidden md:flex items-center gap-6">
      <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
        <img className="h-5" src={homeIcon} alt="Home" />
        Home
      </Link>

      <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
        <img className="h-5" src={aboutIcon} alt="About" />
        About
      </Link>

      <Link to="/blogs" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
        <img className="h-5" src={blogIcon} alt="Blogs" />
        Blogs
      </Link>

      {user && (
        <Link to="/new" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
          <img src={write} alt="Write" className="h-5" />
          Write
        </Link>
      )}

      {user ? (
        <button
          onClick={() => {
            localStorage.clear();
            setTimeout(() => handleNavigate(), 800);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Login
        </Link>
      )}
    </div>

    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-gray-700 focus:outline-none"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {isOpen && (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 flex flex-col gap-3">
      <Link to="/" className="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>
        <img className="h-5" src={homeIcon} alt="Home" />
        Home
      </Link>

      <Link to="/about" className="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>
        <img className="h-5" src={aboutIcon} alt="About" />
        About
      </Link>

      <Link to="/blogs" className="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>
        <img className="h-5" src={blogIcon} alt="Blogs" />
        Blogs
      </Link>

      {user && (
        <Link to="/new" className="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-500" onClick={() => setIsOpen(false)}>
          <img src={write} alt="Write" className="h-5" />
          Write
        </Link>
      )}

      {user ? (
        <button
          onClick={() => {
            localStorage.clear();
            setTimeout(() => handleNavigate(), 800);
          }}
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition text-left"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition text-left"
        >
          Login
        </Link>
      )}
    </div>
  )}
</nav>
);
}

export default Navbar;

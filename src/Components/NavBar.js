import React from 'react'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li><button onClick={() => navigate("/")}>Home</button></li>
                <li><button>Products</button></li>
                <li><button>About</button></li>
                <li><button>Contact</button></li>
                <li><button>Profile</button></li>
            </ul>
            <div id="search-bar">
                <input type="text" id="searchInput" name="q" placeholder="Enter your search term..." />
                <button id="search-btn" type="submit">Search</button>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </nav>
    )
}

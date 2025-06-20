import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Beplaced from "../../assets/BePlacedLogo.png"
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        padding: "0 20px",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      {/* Left section: Logo */}
      <div className="logo">
          <img src={Beplaced} alt="logo" style={{height:"50px",margin:"0px"}}/>
      </div>
      <div
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          fontSize: "20px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
          userSelect: "none",
        }}
      >
        Beplaced
      </div>

      {/* Middle section: Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexGrow: 1,
          maxWidth: "400px",
          margin: "0 40px",
        }}
      >
        <label
          htmlFor="search-input"
          style={{
            color: "black",
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            userSelect: "none",
          }}
        >
          Search
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Type to search..."
          style={{
            flexGrow: 1,
            padding: "8px 12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            fontFamily: "Roboto, sans-serif",
          }}
        />
      </div>

      {/* Right section: Navigation links */}
      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {[
          { to: "/companies", label: "Companies" },
          { to: "/roles", label: "Roles" },
          { to: "/jobs", label: "Jobs" },
          { to: "/skills", label: "Skills" },
          { to: "/mail", label: "Mail" },
          { to: "/notification", label: "Notification" },
          { to: "/profile", label: "Profile" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              style={{
                textDecoration: "none",
                color: "black",
                userSelect: "none",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

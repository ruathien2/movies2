import React from "react";
import { NavLink } from "react-router-dom";

const navbar = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Movies", url: "/movie" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full p-5 text-white header gap-x-5">
      {navbar.length > 0 &&
        navbar.map((item) => {
          return (
            <NavLink
              to={item.url}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              key={item.id}
            >
              {item.title}
            </NavLink>
          );
        })}
    </header>
  );
}

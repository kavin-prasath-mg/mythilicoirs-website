import React from "react";
import Logo from "../../assets/Logo.jpg";
import { FaBars } from "react-icons/fa";

const NavLinks = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Products", link: "#products" },
  { id: 4, title: "Gallery", link: "#gallery" },
  { id: 5, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="container py-4 flex justify-between">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-3xl font-bold">Mythili Coirs</span>
        </div>

        {/* Link section */}
        <div className="hidden md:block">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="mx-5 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>

        {/* Button section */}
        <div>
          <button className="text-sm lg:text-base border-[1px] border-black px-4 py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white">
            Contact
          </button>
        </div>

        {/* Responsive menu for Mobile Device */}
        <div className="lg:hidden">
          <button onClick={handleOpen}>
            <FaBars className="text-3xl" />
          </button>

          {/* Dropdown menu */}
          {open && (
            <div>
              <ul className="bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50 hover:bg-black hover:text-white w-full">
                {NavLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.link} className="inline-block text-xl p-4">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

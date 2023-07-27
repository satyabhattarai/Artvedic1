import Link from "next/link";
import React from "react";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Category", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];
const subMenudata = [
  { id: 1, name: "Acrylic" },
  { id: 2, name: "Oil" },
  { id: 3, name: "Portraits" },
  { id: 4, name: "Abstract" },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden w-full justify-center md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="cursor-pointer items-center gap-2 relative"
                onMouseEnter={() => {
                  setShowCatMenu(true);
                }}
                onMouseLeave={() => {
                  setShowCatMenu(false);
                }}
              >
                {item.name} +
                {showCatMenu && (
                  <ul
                    className="bg-white absolute top-6 left-0 
                    min-w-[150px] px-1 py-1 text-black shadow-lg"a
                  >                    {subMenudata.map((submenu) => {
                      return (
                        <Link key={submenu.id} href="/">
                          <li
                            className="h-12 flex justify-between items-center 
                                    px-3 hover:bg-black/[0.03] rounded-md"
                          >
                            {submenu.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* nav elements */
const links = [
  {
    name: `Úvod`,
    path: `/domky`,
  },
  {
    name: `O nás`,
    path: `/domky/onas`,
  },
  {
    name: `Katalog`,
    path: `/catalog`,
  },
  {
    name: `Konstrukce`,
    path: `/construction`,
  },
];

/* desktop nav */
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "cursor-pointer text-primary border-b-2 border-primary"
                : ""
            } capitalize font-medium hover:text-primary hover:border-primary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

/* mobile nav */
export const NavMobile = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col mt-4 mb-2 gap-4 items-center">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "cursor-pointer text-primary border-b-2 border-primary"
                : ""
            } capitalize font-medium hover:text-primary hover:border-primary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

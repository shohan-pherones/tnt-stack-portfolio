import Link from "next/link";

const navLinks = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/#about", label: "About" },
  { id: 3, route: "/#experiences", label: "Experiences" },
  { id: 4, route: "/#projects", label: "Projects" },
  { id: 5, route: "/#education", label: "Education" },
  { id: 6, route: "/#skills", label: "Skills" },
  { id: 7, route: "/#blogs", label: "Blogs" },
  { id: 8, route: "/#contact", label: "Contact" },
];

const NavLinks = () => {
  return navLinks.map((navLink) => (
    <li key={navLink.id}>
      <Link href={navLink.route}>{navLink.label}</Link>
    </li>
  ));
};

const Header = () => {
  return (
    <header className="navbar bg-base-100 h-16 max-h-16 sticky top-0 left-0 z-[1]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Shohan
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/" target="_blank" className="btn btn-primary">
          Download Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;

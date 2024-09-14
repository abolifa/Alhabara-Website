import { Earth, Headphones, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 lg:px-20 h-16 border-b shadow">
      <h1 className="text-2xl font-black">Alhabara</h1>

      <div className="flex items-center justify-center gap-5">
        {links.map((item) => {
          return (
            <Link
              key={item.route}
              to={item.route}
              className="flex items-center justify-center font-semibold text-muted-foreground hover:text-primary"
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 text-muted-foreground">
        <User2 />
        <Headphones />
        <Earth />
      </div>
    </div>
  );
};

export default Navbar;

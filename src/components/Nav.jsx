import { enlaces } from "../data/Data";

const Nav = () => {
  return (
    <nav>
      <ul className="hidden md:flex gap-4">
        {enlaces.map((enlace, i) => {
          return (
            <li key={i} className="font-medium text-sm lg:text-lg ">
              <a href={enlace.link} className="hover:text-primary">
                {enlace.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;

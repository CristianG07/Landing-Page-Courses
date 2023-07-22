import { lock } from "../assets";
import { enlaces } from "../data/Data";

const NavMobile = ({ toggle }) => {
  return (
    <nav>
      <ul
        className={`${
          toggle
            ? "absolute w-full px-8 bg-white py-4 z-10 md:hidden"
            : "hidden"
        }`}
      >
        {enlaces.map((enlace, i) => {
          return (
            <li key={i} className="py-4 px-2 hover:bg-gray-100 font-medium">
              <a href={enlace.link}>{enlace.name}</a>
            </li>
          );
        })}
        <div className="flex flex-col my-4 gap-4">
          <button className="flex px-6 py-3 gap-2 border border-primary items-center justify-center bg-transparent">
            <img src={lock} />
            Login
          </button>
          <button className="bg-primary py-3 rounded-md text-white font-bold">
            Sing Up For Free
          </button>
        </div>
      </ul>
    </nav>
  );
};
export default NavMobile;

import { Link, useLocation } from "react-router-dom";
import SlashImg from "/src/assets/slash.png";
import clsx from "clsx";

export default function LocationBasedBreadcrumb() {
  const location = useLocation();

  return (
    <div className="bg-white ">
      <ul className=" flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <Link
          to="/"
          className={clsx(
            "cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md",
            location.pathname === "/" && "bg-[#b572d6] text-white"
          )}
        >
          Home
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to="#"
          className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300"
        >
          Products
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to="#"
          className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300"
        >
          About
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to="#"
          className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300"
        >
          FAQ
        </Link>
      </ul>
    </div>
  );
}

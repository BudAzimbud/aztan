import { AiOutlineHome, AiOutlineDownload } from "react-icons/ai";
import { BsStackOverflow, BsFillInfoCircleFill } from "react-icons/bs";
const menus = [
  { name: "Home", icon: <AiOutlineHome size={22} />, link: "/" },
  {
    name: "About Us",
    icon: <BsFillInfoCircleFill size={22} />,
    link: "/about",
  },
  { name: "Roadmap", icon: <BsStackOverflow size={22} />, link: "/roadmap" },
  {
    name: "Get Started",
    icon: <AiOutlineDownload size={22} />,
    link: "/get-started",
  },
];

export { menus };

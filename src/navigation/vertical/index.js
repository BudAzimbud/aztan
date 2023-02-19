import { AiOutlineHome, AiOutlineDownload } from "react-icons/ai";
import { BsStackOverflow, BsFillInfoCircleFill } from "react-icons/bs";
import { RxComponent1 } from "react-icons/rx";
const menus = [
  { name: "Home", icon: <AiOutlineHome size={22} />, link: "/" },
  { name: "Roadmap", icon: <BsStackOverflow size={22} />, link: "/roadmap" },
  {
    name: "About Us",
    icon: <BsFillInfoCircleFill size={22} />,
    link: "/about",
  },
  {
    name: "Get Started",
    icon: <AiOutlineDownload size={22} />,
    link: "/get-started",
  },
  {
    name: "Components",
    icon: <RxComponent1 size={22} />,
    link: "/components",
    submenu: [
      {
        name: "Card",
        url: "/components/react-card",
        submenu: [
          {
            name: "Card",
            url: "/components/react-card",
          },
          {
            name: "Button",
            url: "/components/react-button",
          },
          {
            name: "Table",
            url: "/components/react-table",
          },
        ],
      },
      {
        name: "Button",
        url: "/components/react-button",
      },
      {
        name: "Table",
        url: "/components/react-table",
      },
    ],
  },
];

export { menus };

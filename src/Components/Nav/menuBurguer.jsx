import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { ep_menu } from "../../assets";
// className="bg-[#9333ea]"

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <div className="mb-2 flex items-center gap-4 p-4">
          <img src={ep_menu} alt="brand" className="h-8 w-8  bg-[#9333ea]" />
        </div>
        {/* <Button>Menu</Button> */}
      </MenuHandler>
      <MenuList className="z-20 bg-gradient-to-r from-indigo-200 withe via-purple-300 ">
        <MenuItem>
          <a href="#inicio" className="font-bold">
            Inicio
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#acerca" className="font-bold">
            Acerca de mi
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#proyectos" className="font-bold">
            Proyectos
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#contactame" className="font-bold">
            Contactame
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

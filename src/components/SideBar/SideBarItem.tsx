// import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { FaCircleChevronRight } from "react-icons/fa6";
import SidebarItemProps from './SideBarItem.props';
import HoveredSubMenuItem from '../HoveredSubMenuItem/HoveredSubMenuItem';

export default function SidebarItem({
  icon,
  active = false,
  texts,
  colapsed = false,
  subMenu,
}: SidebarItemProps) {
  const [expandSubMenu, setColapsedSubMenu] = useState(false);

  useEffect(() => {
    if (!colapsed) {
      setColapsedSubMenu(false);
    }
  }, [colapsed]);

  // Calculate the height of the sub-menu assuming each item is 40px tall
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 40 + (subMenu! && 15)).toString()}px`
    : 0;

  return (
    <>
      <li>
        <button
          //Aqui cambiamos propiedades del texto y hover.
          className={`
         group relative my-1 flex flex-row w-full h-20
         items-center rounded-md px-2
         py-2 font-medium transition-colors
         ${ //cursor-pointer
            active && !subMenu
              ? 'text-primary-200 bg-gradient-to-tr from-black to-black'
              : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
            }
         ${!colapsed && 'hidden sm:flex'}
     `}
          onClick={() => setColapsedSubMenu((curr) => colapsed && !curr)}
        >
          <span className="h-6 w-6">{icon}</span>

          <span
            //Texto principal
            className={`overflow-hidden text-start transition-all ${colapsed ? 'ml-3 w-44' : 'w-0'
              }`}
          >
            {texts?.map((text, index) => (<p key={index}>{text}</p>))}
          </span>
          {subMenu && (
            <div
              className={`absolute right-2 h-4 w-4${colapsed ? '' : 'top-2'} transition-all ${expandSubMenu ? 'rotate-90' : 'rotate-0'}`}
            >
              <FaCircleChevronRight />
            </div>
          )}

          {/* 
            display item text or sub-menu items when hovered
          */}
          {!colapsed && (
            <div
              // Estilos de bocadillo externo cuando el sidebar esta cerrado:
              className={`
              invisible text-primary-500 absolute left-full ml-6 -translate-x-3
              rounded-md bg-gray-300 px-2
              py-1 text-sm opacity-20 transition-all
              group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 w-48
        `}
            >
              {/* 
                if hovered item has no sub-menu, display the text
                else display the sub-menu items
              */}
              {!subMenu
              //Bucle para recorrer el array de texts
                ? texts?.map((text, index) => (
                  <p key={index}>{text}</p>
                ))
                : subMenu.map((item, index) => (
                  <HoveredSubMenuItem
                    key={index}
                    texts={item.texts}
                    icon={item.icon}
                  />
                ))}
            </div>
          )}
        </button>
      </li>
      <ul
        className="sub-menu pl-6"
        style={{ height: subMenuHeight }}
      >
        {/* 
          Render the sub-menu items if the item has a sub-menu
          The sub-menu items are rendered as SidebarItem components
        */}
        {colapsed &&
          subMenu?.map((item, index) => (
            <SidebarItem key={index} {...item} colapsed={colapsed} />
          ))}
      </ul>
    </>
  );
}
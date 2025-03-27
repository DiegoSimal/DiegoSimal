"use client"

import Image from 'next/image';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

// import InfoElement from '../InfoElement/InfoElement';

// This sidebar component is for both mobile and desktop
export default function Sidebar({ children, colapsed, setColapsed }: {children: React.ReactNode, colapsed: boolean, setColapsed: React.Dispatch<React.SetStateAction<boolean>>}) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <div className='sticky'> 
      {/* 
        This div is used to create the background overlay when the sidebar is colapsed
        It is only visible on mobile screens
      */}
      <div
        className={`fixed inset-0 -z-10 block bg-black  ${colapsed ? 'hidden' : 'block sm:hidden'}`}
      />
      <aside
      // Aqui para editar el tamaño:
        className={`box-border h-300 transition-all ${colapsed ? 'w-0 sm:w-15 ' : 'w-5/6 sm:w-64'}`} //Cambiado de orden
      >
        <nav className="flex h-full flex-col border-r bg-gray-100 text-gray-300 dark:bg-gray-900 dark:text-gray-500 shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <Image
              src={isProduction ? "image/perfil.png" : "/image/perfil.png"}
              className={`overflow-hidden transition-all ${
                colapsed ? 'w-0' : 'w-12'
              }`}
              alt=""
              width={200}
              height={200}
            />
            <div className={`${colapsed ? 'hidden sm:block' : ''}`}>
              <button
                onClick={() => setColapsed((curr: boolean) => !curr)}
                className="rounded-l bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 p-1.5 dark:hover:bg-gray-800"
              >
                {colapsed ? (
                  <FaArrowLeft className="h-7 w-6" />
                ) : (
                  <FaArrowRight className="h-7 w-6" />
                )}
              </button>
            </div>
          </div>
          <br/>
          <ul className="flex-1 px-3">{children}</ul>
        </nav>
      </aside>
    </div>
  );
}


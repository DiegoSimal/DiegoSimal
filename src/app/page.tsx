"use client"

import HeadSize from "@/components/HeadSize/HeadSize";
import List from "@/components/List/List";
import ParagraphSize from "@/components/ParagraphSize/ParagraphSize";
import MakeSidebar from "@/components/SideBar/MakeSideBar";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [bol, setBol] = useState<boolean>(false);
  // const handleOnClick = (): void => setBol(true);
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <body className="m-0 p-0 font-sans">
        <div className="flex justify-between object-none relative flex-col bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
          <div className="sticky top-0 left-0"><div className="absolute"><MakeSidebar /></div></div>

          <header className="text-center text-white h-100 flex items-center justify-center flex-col bg-image">
            <div className="mb-45">

              <div className="mt-65">
                <h1 className="text-4xl font-bold uppercase">DIEDO SIMAL</h1>
                <p className="text-18 mt-5">Application developer</p>
              </div>

              <div className="mt-7 border-solid border-blue-400 dark:border-purple-400 border-2 rounded-md w-31 h-31 absolute right-20">
                <div className=""><Image src={isProduction ? "image/perfil.png" : "/image/perfil.png"} alt="foto de perfil" width={120} height={120} /><p></p></div>
              </div>

            </div>
          </header>

          <section className="text-right right-40 p-10 bg-gray-100 border-blue-400 border-b-gray-300 dark:bg-gray-900 border dark:border-t-purple-400 dark:border-b-gray-500">
            <h1 className="text-xl mr-10 text-blue-400 dark:text-purple-400 mt-3 font-bold">Landing Page</h1>
            <p className="text-base mr-10 text-gray-500 dark:text-white">A page about my knowledge</p>
          </section>

          <div className="w-250 self-center">
            <section className="p-10 ">
              <button onClick={() => setBol(!bol)}><HeadSize text="Professional Profile" /></button>
              {bol &&
                <div>
                  <ParagraphSize text="Developer with knowledge in multiplatform, web and database development.
              Experienced in XML, HTML, CSS, JavaScript, TypeScript, React, C# and SQL." />
                  <ParagraphSize text="Interested in code creation and optimization.
              I am looking to use my skills to provide prudent and safe solutions." />
                </div>
                
              }
            </section>

            <section className="p-10 ">
              <HeadSize text="Work Experience" />
              <List text="Internship in Web Development at TRIA INGENIERIA. " />
              <ParagraphSize tab={true} text="I have developed web applications with TypeScript in React, taking advantage 
              of the advanced features of the framework. I have created databases in Neon, designing schemas to 
              optimize the communication between the frontend and the database. In addition, I have used Tailwind 
              CSS to apply web styles in an efficient and responsive way." />
              <br />
              <List text='Internship in Web Development at PALMO.' />
              <ParagraphSize tab={true} text="I learned to create and manage websites using PrestaShop, a content management 
              platform. I have gained experience in the configuration, customization and administration of online stores, 
              optimizing functionality and user experience." />
            </section>

            <section className="p-10 ">
              <HeadSize text="Studies and study centers" />
              <List text="Multiplatform Applications Development Course “DAM”- I.E.S Carmen Martin Gaite - 09/2024 to 06/2026" />
              <ParagraphSize tab={true} text="I am learning to develop applications for different platforms, using programming 
              languages such as C# and JavaScript , managing databases with MySQL, creating graphical interfaces and working on the 
              complete development cycle, from design to implementation." />
              <br />
              <List text='Microcomputer Systems and Networking Course "SMR" - Nuestra Señora de Los Remedios - 09/2022 to 06/2024' />
              <ParagraphSize tab={true} text="I acquired knowledge in installation, configuration and maintenance of computer 
              systems, local network management, and computer security, as well as in technical troubleshooting and user support." />
            </section>

            <section className="p-10 ">
              <HeadSize text="Technical Knowledge" />
              <ParagraphSize text="Knowledge in multiplatform and web development." />
              <ParagraphSize text="Knowledge in Computer Equipment Management." />
              <ParagraphSize text="Knowledge of Web Content Management Systems, such as WordPress or PrestaShop." />
              <br />
              <ParagraphSize text="Development languages:" />
              <List text="Front: HTML, CSS, JavaScript y TypeScript." />
              <List text="Back: XML and Schema, DTD, C#" />
              <List text="BBDD: MySQL" />
            </section>

            <section className="p-10 ">
              <HeadSize text="Technical skills" />
              <List text="Experience in advanced SQL queries" />
              <List text="Ease of understanding external code" />
              <List text="Clean and readable code" />
              <List text="Schematic code and small size" />
            </section>

            <section className="p-10 ">
              <HeadSize text="Soft skills" />
              <List text="High adaptive capacity" />
              <List text="Comfort in Group or Team Work" />
              <List text="Leadership and decision making skills" />
              <List text="High creative and management skills" />
            </section>


            <section className="p-10 ">
              <HeadSize text="Future plans" />
              <List text="Experience in advanced SQL queries" />
              <List text="Ease of understanding external code" />
              <List text="Clean and readable code" />
              <List text="Schematic code and small size" />
            </section>
          </div>
        </div>
      </body>
    </html>

  );
}

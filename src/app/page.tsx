"use client"

import Header from "@/components/Header/Header";
import HeadSize from "@/components/HeadSize/HeadSize";
import List from "@/components/List/List";
import ParagraphSize from "@/components/ParagraphSize/ParagraphSize";
import MakeSidebar from "@/components/SideBar/MakeSideBar";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";


export default function Home() {
  const [one, setOne] = useState<boolean>(false);
  const [two, setTwo] = useState<boolean>(false);

  // const handleOnClick = (): void => setBol(true);
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <body className="m-0 p-0 font-sans">
        <div className="flex justify-between object-none relative flex-col bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400">
          <div className="sticky top-0 left-0"><div className="absolute"><MakeSidebar /></div></div>

          <header className={`text-center text-gray-50 h-100 flex items-center justify-center flex-col bg-[url(${isProduction ? "image/fondo-dark.jpg" : "/image/fondo-dark.jpg"})] bg-center bg-repeat`}>
            <div className="mb-45">
              <Header title="DIEGO SIMAL" subTitle="Application developer"/>
              <div className="mt-7 border-solid border-blue-400 dark:border-purple-400 border-2 rounded-md w-31 h-31 absolute right-20">
                <div className=""><Image src={isProduction ? "image/perfil.png" : "/image/perfil.png"} alt="foto de perfil" width={120} height={120} /><p></p></div>
              </div>

            </div>
          </header>

          <section className="text-right right-40 p-10 bg-gray-200 border-blue-400 border-b-gray-300 dark:bg-gray-900 border dark:border-t-purple-400 dark:border-b-gray-500">
            <h1 className="text-xl mr-10 text-blue-400 dark:text-purple-400 mt-3 font-bold">Landing Page</h1>
            <p className="text-base mr-10 text-gray-500 dark:text-gray-50">A page about my knowledge</p>
          </section>

          <div className="w-250 self-center">
            <section className="p-10">
              <HeadSize text="Professional Profile" />
              <ParagraphSize text="Developer with knowledge in multiplatform, web and database development.
              Experienced in XML, HTML, CSS, JavaScript, TypeScript, React, C# and SQL." />
              <ParagraphSize text="Interested in code creation and optimization.
              I am looking to use my skills to provide prudent and safe solutions." />
            </section>

            <section className="p-10 dark:bg-radial from-gray-800 via-transparent to-transparent">
              <HeadSize text="Work Experience" />
              <List text="Internship in Web Development at TRIA INGENIERIA." />
              <ParagraphSize tab={true} text="I have developed web applications with TypeScript in React, taking advantage 
              of the advanced features of the framework. I have created databases in Neon, designing schemas to 
              optimize the communication between the frontend and the database. In addition, I used Tailwind 
              CSS to apply web styles in an efficient and responsive way." />
              <ParagraphSize tab={true} text="Period from March to April 2025." />
              <br />

              <List text='Internship in Web Development at PALMO.' />
              <ParagraphSize tab={true} text="I learned to create and manage websites using PrestaShop, a content management 
              platform. I have gained experience in the configuration, customization and administration of online stores, 
              optimizing functionality and user experience." />
              <ParagraphSize tab={true} text="Period from April to June 2024." />

            </section>

            <section className="p-10">
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

            <section className="p-10 dark:bg-radial from-gray-800 via-transparent to-transparent">
              <HeadSize text="Technical Knowledge" />
              <ParagraphSize text="Knowledge in multiplatform and web development, with knowledge in React and web 
              content management systems such as WordPress or PrestaShop. With experience in internships and quality projects." />
              <ParagraphSize text="Knowledge in computer equipment management and network management." />
              <br />
              <ParagraphSize text="Development languages in my repertoire:" />
              <List text="Front: HTML, CSS, JavaScript and TypeScript." />
              <List text="Back: DTD, C#, XML and Schema." />
              <List text="Frameworks: React." />
              <List text="BBDD: MySQL." />
              <List text="Development tools: GitHub." />
              <List text="Cloud database platforms: Neon db." />
              

            </section>

            <div className="pt-3 pl-10">
              <HeadSize text="Drop Downs" />

              <section className="p-10 ">
                <button className="flex flex-col" onClick={() => setOne(!one)}><HeadSize text="Technical skills" />{one ? <FaArrowDown /> : <FaArrowRight />}</button>
                {one &&
                  <div>
                    <List text="Experience in advanced SQL queries" />
                    <List text="Ease of understanding external code" />
                    <List text="Clean and readable code" />
                    <List text="Schematic code and small size" />
                  </div>
                }
              </section>

              <section className="p-10 ">
                <button className="flex flex-col" onClick={() => setTwo(!two)}><HeadSize text="Soft skills" />{two ? <FaArrowDown /> : <FaArrowRight />}</button>
                {two &&
                  <div>
                    <List text="High adaptive capacity" />
                    <List text="Comfort in Group or Team Work" />
                    <List text="Leadership and decision making skills" />
                    <List text="High creative and management skills" />
                  </div>
                }

              </section>
            </div>

            <section className="p-10">
              <HeadSize text="Future plans" />
              <ParagraphSize text="My goal is to keep growing as a programmer, gain experience in 
              new technologies and contribute to important projects. I would like to work in a team 
              and learn technologies that improve my way of programming and help companies." />
            </section>

            <section className="p-10">
              <HeadSize text="Links to networks" />
              <div className="flex">
                <p className="text-purple-500 ml-10">My repository on GitHub:</p>
                <a className="ml-2" href="https://github.com/DiegoSimal">github/DiegoSimal .</a>
              </div>
              <ParagraphSize text="Here I will be uploading all the projects I'm doing."/>
              <br/>
              <div className="flex">
                <p className="text-blue-500 ml-10">My Linkedin profile:</p>
                <a className="ml-2" href="https://www.linkedin.com/in/diego-simal-megias-433554358/">Linkedin/diego-simal-megias .</a>
              </div>
              <ParagraphSize text="Here I will show my professional profile in a more general way."/>
            </section>
          </div>
        </div>
      </body>
    </html>

  );
}

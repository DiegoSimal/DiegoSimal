import { useState } from 'react';
import SidebarItem from './SideBarItem';
import {FaPhoneSquareAlt, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import { GiSkills } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import Sidebar from './SideBar';

export default function MakeSidebar() {
    const [colapsed, setColapsed] = useState(true);
    const navBarItems = !colapsed ? [
      {
        icon: <IoMdMail />,
        texts: [
          'Mail:',
          'simaldiego6@gmail.com'
        ] 
      },
      {
        icon: <FaPhoneSquareAlt />,
        texts: [
          'Phone:', 
          '+34 683 60 64 03'
        ]
      },
      {
        icon: <IoLanguage />,
        texts: [
          'Languages:',
          'Spanish: Native',
          'English: High level'
        ]
      },  
      {},
      {
        icon: <FaUser />,
        texts: [
          'About me:',
          'I like to learn something new every day, I am passionate about technology and its novelties. I am a great lover of challenges and here are always challenges to meet.'
         ]
      },
    ] : [
      {
        icon: <IoMdMail />,
        texts: [
          'simaldiego6@gmail.com'
         ]
      },
      {
        icon: <FaPhoneSquareAlt />,
        texts: [
          '+34 683 60 64 03'
        ]
      },  
    ];
    // Desktop Sidebar
    return (
      <Sidebar colapsed={colapsed} setColapsed={setColapsed}>
        {/* <InfoElement icon={<FaUser />} text='Contact:' />
        <InfoElement icon={<IoIosMail />} text='Mail: simaldiego6@gmail.com' />
        <InfoElement icon={<FaPhoneSquareAlt />} text='Phone: +34 683 60 64 03' />
        <InfoElement icon={<GiSkills />} text='SKILLS' />
        <InfoElement text='High adaptive capacity' />
        <InfoElement text='Comfort in Group or Team Work' />
        <InfoElement text='Leadership and decision making skills' />
        <InfoElement text='high creative and management skills' /> */}
        {navBarItems.map((item, index) => (
          <SidebarItem key={index} colapsed={!colapsed} {...item}/>
        ))}
      </Sidebar>
    );
  }
  
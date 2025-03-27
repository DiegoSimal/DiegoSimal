import SubMenuItemProps from "../SideBar/SubMenuItem.props";

// This component is used to render the sub-menu items when hovered
export default function HoveredSubMenuItem({ icon, texts, active }: SubMenuItemProps) {
  return (
    <div
      className={`my-2 rounded-md p-2 ${active ? 'bg-black' : ' hover:bg-black'
        }`}
    >
      <div className="flex items-center justify-center ">
        <span className="text-primary-500 h-6 w-6 ">{icon}</span>
        <span className="flex flex-col text-primary-500 ml-3 w-28 text-start">{texts}</span>
        <div className="bg-primary-200 h-1" />
      </div>
    </div>
  );
}

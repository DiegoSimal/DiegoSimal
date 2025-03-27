import SubMenuItemProps from "./SubMenuItem.props";

export default interface SidebarItemProps {
    active?: boolean;
    icon?: React.ReactNode;
    texts?: string[];
    colapsed: boolean;
    subMenu?: SubMenuItemProps[] | null;
  }

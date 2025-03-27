import SidebarItemProps from "./SideBarItem.props"; 
 
// We're assuming that the sub-menu items will not have further sub-menu items therefore, it cannot be colapsed
export default interface SubMenuItemProps extends Omit<SidebarItemProps, 'colapsed'> {
    colapsed?: never;
    subMenu?: never;
  }
  
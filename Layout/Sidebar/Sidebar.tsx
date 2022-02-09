import { FC } from "react";
import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar: FC<SidebarProps> = ({children, ...props}) => {
    return (
        <div {...props}>
            <Menu />
        </div>);
};
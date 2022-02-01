import { FC } from "react";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar: FC<SidebarProps> = ({children, ...props}) => {
    return (
        <div {...props}>
            Sidebar
        </div>);
};
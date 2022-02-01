import { FC } from "react";
import { HeaderProps } from "./Header.props";

export const Header: FC<HeaderProps> = ({children, ...props}) => {
    return (
        <div {...props}>
            Header
        </div>);
};
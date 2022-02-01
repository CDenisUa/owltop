import { FC } from "react";
import { FooterProps } from "./Footer.props";

export const Footer: FC<FooterProps> = ({children, ...props}) => {
    return (
        <div {...props}>
            Footer
        </div>);
};
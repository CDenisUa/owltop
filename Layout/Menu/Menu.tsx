import { FC, useContext } from "react";
import cn from "classnames";
import styles from './Menu.module.css';
import { AppContext } from "../../context/app-context/app.context";

export const Menu: FC = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
       <div>
           <ul>
                {menu.map(item => <p key={item._id.secondCategory}>{item._id.secondCategory}</p>)}
           </ul>
       </div>);
};
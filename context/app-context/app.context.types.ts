import { TopLevelCategory } from './../../interfaces/page.interface';
import { MenuItem } from './../../interfaces/menu.interface';

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}
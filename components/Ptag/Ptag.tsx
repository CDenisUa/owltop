import { FC } from 'react';
import { PtagProps } from './Ptag.props';
import cn from 'classnames';
import styles from './Ptag.module.css';

export const Ptag: FC<PtagProps> = ({fontSize = 'medium', children, ...props}):JSX.Element => (
	<p className={cn(styles.p, styles[fontSize])} {...props}>
		{children}
	</p>);
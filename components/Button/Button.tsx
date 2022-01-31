import { FC } from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button: FC<ButtonProps> = ({
	appearance,
	children, 
	className, 
	arrow = 'none', 
	...props}): JSX.Element => (
	<button
		className={cn(styles.button, className, styles[appearance])}
		{...props}
	>
		{children}
		{arrow !== 'none' && <span className={cn(styles.arrow, styles[arrow])}>
			<ArrowIcon />
		</span>}
	</button>
);
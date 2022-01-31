import { FC } from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';


export const Button: FC<ButtonProps> = ({appearance, children, className, arrow = 'none', ...props}): JSX.Element => {
	const classPrimaryOrGhost = {
		[styles.primary]: appearance == "primary",
		[styles.ghost]: appearance == "ghost",
	};
	const classArrow = {
		[styles.down]: arrow == 'down',
	}
	
	return (
	<button
		className={cn(styles.button, className, classPrimaryOrGhost)}
		{...props}
	>
		{children}
		{arrow !== 'none' && <span className={cn(styles.arrow, classArrow)}>
			<ArrowIcon />
		</span>}
	</button>
	);
};
import { FC } from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import cn from 'classnames';

export const Htag: FC<ButtonProps> = ({appearance, children}): JSX.Element => {
	return (
	<button
		className={cn(styles.button, {
			[styles.primary]: appearance = "primary",
			[styles.ghost]: appearance = "ghost",
		})}
	>
		{children}
	</button>
	);
};
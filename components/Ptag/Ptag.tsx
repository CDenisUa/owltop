import { FC } from 'react';
import { PtagProps } from './Ptag.props';
import cn from 'classnames';
import styles from './Ptag.module.css';

export const Ptag: FC<PtagProps> = ({fontSize = 'medium', children, ...props}):JSX.Element => {
	const classFontSize = {
		[styles.small]: fontSize == 'small',
		[styles.medium]: fontSize == 'medium',
		[styles.large]: fontSize == 'large',
	}

	return <p className={cn(styles.p, classFontSize)} {...props}>{children}</p>;
};
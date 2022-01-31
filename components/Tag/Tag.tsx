import { FC } from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag: FC<TagProps> = ({
	size='medium', 
	color='ghost',
	href,
	children, 
	...props}):JSX.Element => {

	const classColor = {
		[styles.ghost]: color == 'ghost',
		[styles.red]: color == 'red',
		[styles.gray]: color == 'gray',
		[styles.green]: color == 'green',
		[styles.primary]: color == 'primary',
	};

	const classSize = {
		[styles.small]: size == 'small',
		[styles.medium]: size == 'medium',
	};

	return (
		<div
			className={ cn(styles.tag,classColor,classSize) }
			{...props}
		> 
			{ href ? <a href={href}>{children}</a> : children }
		</div>)
};
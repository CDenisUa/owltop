import { FC } from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag: FC<TagProps> = ({
	size='medium', 
	color='ghost',
	href,
	children, 
	...props}):JSX.Element => (
	<div
		className={cn(styles.tag, styles[color], styles[size])}
		{...props}
	>
		{href ? <a href={href}>{children}</a> : children}
	</div>);
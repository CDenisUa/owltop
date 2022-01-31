import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>  {
	fontSize?: 'small' | 'medium' | 'large',
	children: ReactNode,
}
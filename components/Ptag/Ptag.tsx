import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ children, size = 'm'}: PtagProps): JSX.Element => {
	return (
		<p className={cn(styles.p, {
			[styles.m]: size == 'm',
			[styles.l]: size == 'l',
			[styles.s]: size == 's',
		})}>
		{children}
		</p>
	);
};
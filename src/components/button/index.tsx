import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.sass';
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: IButton) => {
	return (
		<button {...props} className={`${styles.button} ${props.className ?? ''}`}></button>
	);
};

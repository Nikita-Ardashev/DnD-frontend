import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.sass';
interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: IInput) => {
	return <input {...props} className={`${styles.input} ${props.className ?? ''}`} />;
};

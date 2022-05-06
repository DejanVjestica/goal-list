import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
	return <button {...props} className={styles.button} />
}

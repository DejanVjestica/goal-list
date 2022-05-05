import React from 'react'

import './Button.scss'

export const Button = (props: any) => {
	return (
		<button
			type={props.type}
			className="button"
			onClick={props.onClick}>
			{props.children}
		</button>
	)
}

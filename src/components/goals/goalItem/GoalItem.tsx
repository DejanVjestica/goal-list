import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

import './GoalItem.scss'

type GoalItemProps = {
	id: string
	onDelete: (id: string) => void
	children: React.ReactNode
}

export const GoalItem = (props: GoalItemProps) => {
	// const [deleteText, setDeleteText] = useState('');

	const deleteHandler = () => {
		// setDeleteText('(Deleted!)');
		props.onDelete(props.id)
	}

	return (
		<li className="goal-item" onClick={deleteHandler}>
			{props.children}
		</li>
	)
}

import React from 'react'
// import { GoalItem } from '../goalItem/GoalItem'
import { GoalItem } from '../goalItem/GoalItem'
import { GoalInput } from '../goalInput/GoalInput'

import './GoalList.scss'

type GoalListProps = {
	items: Array<{ text: string; id: string }>
	onDeleteItem: (id: string) => void
}

export const GoalList = (props: GoalListProps) => {
	return (
		<ul className="goal-list">
			{props.items.map((goal) => (
				<GoalItem
					key={goal.id}
					id={goal.id}
					onDelete={props.onDeleteItem}>
					{goal.text}
				</GoalItem>
			))}
		</ul>
	)
}

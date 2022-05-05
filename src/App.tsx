import React, { useState } from 'react'
import { GoalList } from './components/goals/goalList/GoalList'
import { GoalInput } from './components/goals/goalInput/GoalInput'

import './App.scss'

type AppProps = {
	text: string
	id: string
}

export const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{ text: 'Do all exercises!', id: 'g1' },
		{ text: 'Finish the course!', id: 'g2' }
	])

	const addGoalHandler = (enteredText: string): void => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = [...prevGoals]
			updatedGoals.unshift({
				text: enteredText,
				id: Math.random().toString()
			})
			return updatedGoals
		})
	}

	const deleteItemHandler = (goalId: string): void => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = prevGoals.filter(
				(goal) => goal.id !== goalId
			)
			return updatedGoals
		})
	}

	let content = (
		<p style={{ textAlign: 'center' }}>
			No goals found. Maybe add one?
		</p>
	)

	if (courseGoals.length > 0) {
		content = (
			<GoalList
				items={courseGoals}
				onDeleteItem={deleteItemHandler}
			/>
		)
	}

	return (
		<div>
			<section id="goal-form">
				<GoalInput onAddGoal={addGoalHandler} />
			</section>
			<section id="goals">
				{content}
				{/* {courseGoals.length > 0 && (
				<GoalList
				items={courseGoals}
				onDeleteItem={deleteItemHandler}
				/>
			) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
			} */}
			</section>
		</div>
	)
}

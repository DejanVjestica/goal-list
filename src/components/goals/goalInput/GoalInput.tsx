import React, { useState } from 'react'

import { Button } from '../../UI/Button/Button'
import './GoalInput.scss'

type GoalInputProps = {
	onAddGoal: (enteredText: string) => void
}

export const GoalInput = (props: any) => {
	const [enteredValue, setEnteredValue] = useState('')

	const goalInputChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setEnteredValue(event.target.value)
	}

	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		props.onAddGoal(enteredValue)
	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label>Course Goal</label>
				<input
					type="text"
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	)
}

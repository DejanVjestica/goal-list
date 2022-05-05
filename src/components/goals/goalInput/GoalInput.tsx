import React, { useState } from 'react'

import { Button } from '../../UI/Button/Button'
import './GoalInput.scss'

type GoalInputProps = {
	onAddGoal: (enteredText: string) => void
}

export const GoalInput = (props: GoalInputProps) => {
	const [enteredValue, setEnteredValue] = useState({ value: '' })
	const [isValid, setisValid] = useState(true)

	const goalInputChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.value.trim().length > 0) {
			setisValid(true)
		}
		setEnteredValue({ value: event.target.value })
	}

	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (enteredValue.value.trim().length === 0) {
			setisValid(false)
			return
		}

		props.onAddGoal(enteredValue.value)
		setEnteredValue({ value: '' })
	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={`form-control  ${
					!isValid ? 'invalid' : ''
				}`}>
				<label>Course Goal</label>
				<input
					type="text"
					onChange={goalInputChangeHandler}
					value={enteredValue.value}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	)
}

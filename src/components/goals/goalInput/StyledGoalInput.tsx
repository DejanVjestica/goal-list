import React, { useState } from 'react'

import styled from 'styled-components'
import { Button } from '../../UI/Button/Button'

type GoalInputProps = {
	onAddGoal: (enteredText: string) => void
}
type FormControlProps = {
	invalid: boolean
}

const FormControl = styled.div<FormControlProps>`
	margin: 0.5rem 0;

	label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: ${(props) => (props.invalid ? 'red' : 'black')};
	}

	input {
		border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
		display: block;
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
		width: 100%;
		color: ${(props) => (props.invalid ? 'red' : 'black')};
		background-color: ${(props) => props.invalid && 'red'}

		&:focus {
			background: #fad0ec;
			border-color: #8b005d;
			outline: none;
		}
	}
`

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
			<FormControl invalid={!isValid}>
				<label>Course Goal</label>
				<input
					type="text"
					onChange={goalInputChangeHandler}
					value={enteredValue.value}
				/>
			</FormControl>
			<Button type="submit">Add Goal</Button>
		</form>
	)
}

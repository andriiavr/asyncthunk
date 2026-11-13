import { useDispatch } from "react-redux"
import { addToDos } from "../redux/toDoOperation"
import { useState } from "react"

export const ToDoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(addToDos(text))
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}
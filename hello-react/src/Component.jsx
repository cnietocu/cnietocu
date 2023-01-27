import React, {useState} from 'react'

export default function Component() {

    const [text, setText] = useState()
    const [updated, setUpdated] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }
    const buttonOnClick = (event) => {
        setUpdated(text)
    }

    return (
        <div>
            <input type="text" value={text} onChange={textOnChange} />
            <button onClick={buttonOnClick}>Update</button>
            <p>Text input: {text}</p>
            <p>Text updated: {updated}</p>
        </div>
    )
}

import { useState } from "react"

export const Welcome = () => {
    const [text, setText] = useState('Welcome Visitors')

    const handleClick = () => {
        setText('Thank you for subscribing')
    }

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleClick}>Subscribe</button>
        </div>
    )
}
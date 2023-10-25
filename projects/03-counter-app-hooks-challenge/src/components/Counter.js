import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = ({ target }) => {
        const {name} = target;
        if (name === "increment") {
            setCount((count) => count + 1)
        } if(name === 'reset') {
            setCount(0)
        } if (name === 'decrement') {
            setCount((count) => (count > 1 ? count - 1 : 0))
        }
    }
    

    return (
        <div className="card m-2 p-4">
            <h3 className="text-center">Counter: {count}</h3>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button name='increment' onClick={handleClick} type="button" className="btn btn-primary">+</button>
                <button name='reset' onClick={handleClick} type="button" className="btn btn-primary">Reset</button>
                <button name='decrement' onClick={handleClick} type="button" className="btn btn-primary">-</button>
            </div>
        </div>
        

    )
}
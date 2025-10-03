import React, { useState } from 'react'

const EventHandling = () => {

    const [text, setText] = useState("")

    function eventHandle() {
        alert("Clicked")
    }


    function handleChange(event) {
        setText(event.target.value)

    }


    function handleButton(name) {
        alert(`Hello, ${name}!`);
    }
    return (
        <div>
            <h1>Event Handling</h1>

            <div>
                <h3>On click</h3>
                <button onClick={() => alert("Button Clicked")}>Click Me</button>
                <button onClick={eventHandle}>Click Me1</button>
            </div>


            <div>
                <h2>On Change</h2>
                <input type="text" onChange={handleChange} />
                <p>Text : {text}</p>

            </div>


            <div>
                <h3>Passing Parameter to click</h3>
                <button onClick={() => { handleButton('Varsha') }}>Hello </button>
            </div>

        </div>
    )
}

export default EventHandling

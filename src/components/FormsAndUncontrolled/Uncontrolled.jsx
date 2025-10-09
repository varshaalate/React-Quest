import React, { useRef } from 'react'

const Uncontrolled = () => {

    const name = useRef();
    const subscribe = useRef();


    function handleSubmit(e){
        //  The most frequent use case is within an onSubmit handler for a <form> element. By default, submitting a form triggers a page reload. Calling event.preventDefault() inside the handleSubmit function prevents this reload, allowing you to handle form data with custom logic, such as sending it asynchronously to a server or updating component state.
        e.preventDefault() 
        const name1 = name.current.value;
        const subscribe1 = subscribe.current.checked;
        alert(`Name : ${name1} , Checked : ${subscribe1}`)

    }

  return (
    <div>
        {/* Onchanges using state is controlled component */}
        <h1>Form Handling and Uncontrolled Component</h1>
        <form onSubmit={handleSubmit}>
            <input ref={name} type="text" defaultValue={"varsha"} />
            <div>
                <input ref={subscribe} type="checkbox" defaultChecked/>
            </div>

            <button type='submit'>submit</button>
        </form>
      
    </div>
  )
}

export default Uncontrolled

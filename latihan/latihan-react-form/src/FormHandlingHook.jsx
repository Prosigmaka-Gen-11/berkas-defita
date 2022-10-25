import { useState } from "react"
import useFormInput from "./useFormInput"

export default function FormHandlingHook () {
    const { formInput, handleFormInput} = useFormInput({
        name: '',
        age: ''
    })
    
    function handleSubmit () {
        evt.prefentDefault()
        console.log(formInput)
    }

    return <>

        <p>name: {formInput.name}</p>
        <p>age: {formInput.age}</p>

    <form onSubmit={evt => handleSubmit(evt)}>
        <label>
            name <br />
        <input type="text" value={formInput.name} onChange={evt => handleFormInput(evt, 'name') }/>
        </label>
        <br /><br />
        <label>
            age <br />
            <input type="number" value={formInput.age} onChange={evt => handleFormInput(evt, 'age')} />
        </label>
        <br /><br />

        <button onClick={handleSubmit}>submit</button>
    </form>
    </>
}
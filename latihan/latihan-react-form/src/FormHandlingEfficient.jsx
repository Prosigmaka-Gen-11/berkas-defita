import { useState } from "react"

export default function FormHandlingEfficient () {
    const [formInput, setFormInput] = useState({
        title: '',
        author: '',
        category: '',
        publish_date: '',
        content: ''
    })

    function handleFormInput (evt, propName) {
        setFormInput({ ...formInput, [propName]: evt.target.value})
    }

    function handleFormInputBasic (evt, propName) {
        const copyFormInput = { ...formInput }
        copyFormInput[propName] = evt.target.value
        setFormInput(copyFormInput)
    }
    
    return <>

        <p>title: {formInput.title}</p>
        <p>author: {formInput.author}</p>
        <p>category: {formInput.category}</p>
        <p>publish_date: {formInput.publish_date}</p>
        <p>content: {formInput.content}</p>

        <label>
            title <br />
            <input type="text" value={formInput.title} onChange={evt => handleFormInput(evt, 'title') }/>
        </label>
        <br /><br />
        <label>
            author <br />
            <input type="text" value={formInput.author} onChange={evt => handleFormInput(evt, 'author')} />
        </label>
        <br /><br />
        <label>
            category <br />
            <input type="text" value={formInput.category} onChange={evt => handleFormInput(evt, 'category')}/>
            <select>
                <option value="" disabled>-pilih judul-</option>
                <option value="agama">Agama</option>
                <option value="politik">Politik</option>
            </select>
        </label>
        <label>
            Publish Date <br />
            <input type="text" value={formInput.publish_date} onChange={evt => handleFormInput(evt, 'publish_date')} />
        </label>
        <label>
            Content <br />
            <textarea></textarea>
        </label>
        <br /><br />
        <button>
            submit
        </button>
    </>
}
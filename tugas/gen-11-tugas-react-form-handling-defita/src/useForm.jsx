import { useState } from "react";

export default function useForm (dataInput) {
	const [form, setForm] = useState(dataInput)

	function handleForm(evt, propName) {
		setForm({ ...form, [propName]: evt.target.value })
	}

	return {
		form,
		handleForm,
	}
}
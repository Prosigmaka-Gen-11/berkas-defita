import { useState } from "react";
import useForm from "./useForm";

export default function FormHandlingHook () {
    const { form, handleForm } = useForm ({
        name: '',
        angkatan: '',
        jenis_kelamin: '',
        tgl_daftar: '',
        judul: '',
        jenis_ujian: ''
    })

    function handleSubmit (evt) {
        evt.preventDefault()
        console.log(form)
    }


    return <>
        <h1>Form Daftar Ujian Proposal</h1>
        <p>Name: {form.name}</p>
        <p>Angkatan: {form.angkatan}</p>
        <p>Jenis Kelamin: {form.jenis_kelamin}</p>
        <p>Tgl. Daftar: {form.tgl_daftar}</p>
        <p>Judul: {form.judul}</p>
        <p>Jenis Ujian (online/offline): {form.jenis_ujian}</p>

        <br/><br/>

        <form onSubmit={evt => handleSubmit(evt)}>
            <label>
                Name:
                <input type="text" value={form.name} onChange={evt => handleForm(evt, 'name')} />
            </label>
            <br/><br/>

            <label>
                Angkatan: 
                <select value={form.angkatan} onChange={evt => handleForm(evt, 'angkatan')}>
                    <option value="-pilih angkatan-">- pilih angkatan -</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </label>

            <br/><br/>
                Jenis Kelamin:
                <input type="radio" 
                value="L"
                onChange={evt => handleForm(evt, 'jenis_kelamin')}
                /> Laki-laki
                <input type="radio" 
                value="P"
                onChange={evt => handleForm(evt, 'jenis_kelamin')}
                /> Perempuan
            <br/><br/>

            <label>
                Tgl. Daftar: 
                <input type="date" value={form.tgl_daftar} onChange={evt => handleForm(evt, 'tgl_daftar')} />
            </label>
            <br/><br/>

            <label>
                Judul: <br/>
                <textarea value={form.judul} onChange={evt => handleForm(evt, 'judul')} />
            </label>
            <br/><br/>

            <label>Ujian secara</label>
            <label>
                <input type="checkbox" value="Online" onChange={evt => handleForm(evt, 'jenis_ujian')}></input>
                Online
            </label>
            <label>
                <input type="checkbox" value="Offline" onChange={evt => handleForm(evt, 'jenis_ujian')}></input>
                Offline
            </label>
            <br/><br/>

            <button>
                Submit
            </button>
        </form>

    </>
}
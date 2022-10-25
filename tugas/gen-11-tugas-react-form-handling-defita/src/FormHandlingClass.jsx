import React, { Component } from "react";

export default class FormHandlingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            angkatan: '',
            jenis_kelamin: '',
            tgl_daftar: '',
            judul: '',
            jenis_ujian: ''
        }
    }

    handleInput(evt, propName) {
        this.setState({ [propName]: evt.target.value})

    }

    handleSubmit(evt) {
        evt.preventdefault()
        console.log(this.state)
    }

    render() {
        return(
            <>
            <h1>Form Daftar Ujian Proposal</h1>
            <p>Name: {this.state.name}</p>
            <p>Angkatan: {this.state.angkatan}</p>
            <p>Jenis Kelamin: {this.state.jenis_kelamin}</p>
            <p>Tgl. Daftar: {this.state.tgl_daftar}</p>
            <p>Judul: {this.state.judul}</p>
            <p>Jenis Ujian (online/offline): {this.state.jenis_ujian}</p>
            <br/><br/>

                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={evt => this.handleInput(evt, 'name')} />
                    </label>
                    <br/><br/>

                    <label>
                        Angkatan: 
                        <select value={this.state.angkatan} onChange={evt => this.handleInput(evt, 'angkatan')}>
                            <option value="-pilih angkatan-">- pilih angkatan -</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </label>
                    <br/><br/>

                    <label>
                    Jenis Kelamin:
                    <input type="radio" 
                        value="L"
                        onChange={evt => this.handleInput(evt, 'jenis_kelamin')}
                        /> Laki-laki
                    <input type="radio" 
                        value="P"
                        onChange={evt => this.handleInput(evt, 'jenis_kelamin')}
                        /> Perempuan
                    </label>
                    <br/><br/>

                    <label>
                        Tgl. Daftar: 
                            <input type="date" value={this.state.tgl_daftar} onChange={evt => this.handleInput(evt, 'tgl_daftar')} />
                    </label>
                    <br/><br/>

                    <label>
                        Judul: <br/>
                        <textarea value={this.state.judul} onChange={evt => this.handleInput(evt, 'judul')} />
                    </label>
                    <br/><br/>

                    <label>Ujian secara</label>
                    <label>
                        <input type="checkbox" value="Online" onChange={evt => this.handleInput(evt, 'jenis_ujian')}></input>
                            Online
                    </label>
                    <label>
                        <input type="checkbox" value="Offline" onChange={evt => this.handleInput(evt, 'jenis_ujian')}></input>
                            Offline
                    </label>
                    <br/><br/>

                    <button>
                        Submit
                    </button>
                </form>
            </>
        )
    }
}
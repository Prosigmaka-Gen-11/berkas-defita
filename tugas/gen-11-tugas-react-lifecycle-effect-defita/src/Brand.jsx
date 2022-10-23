import React, { Component } from "react";

export default class Brand extends Component {

    //inisialisasi
    constructor() {
        super()

        this.state = {
            nama: '',
            tahun: '',
            negara: '',
            penjelasan: ''
        }
    }

    //untuk memanggil data dari database
    componentDidMount() {
        console.log('subscribe to db brand')
        document.addEventListener('wheel', this.getMouseMoveEvent)
        console.log('ambil data dari database')
        this.setState({
            nama: 'Marc Jacobs',
            tahun: '1986',
            negara: 'New York'
        })
    }

    //untuk evaluasi data
    componentDidUpdate(propsSebelum, stateSebelum) {
        console.log(stateSebelum)
		console.log(this.props)
        if(stateSebelum.nama !== this.state.nama || 
            stateSebelum.tahun !== this.state.tahun ||
            stateSebelum.negara !== this.state.negara) {
            this.setState({
                penjelasan: `Brand ${this.state.nama} berasal dari Negara ${this.state.negara} yang berdiri pada tahun ${this.state.tahun}`
            })
        }
    }

    //untuk sembunyikan Brand
    componentWillUnmount() {
        console.log('hapus data')
        console.log('unsubscribe db brand')
        document.removeEventListener('wheel', this.getMouseMoveEvent)
        this.setState({
            nama: '',
            tahun: '',
            negara: '',
            penjelasan: ''
        })
    }

    getMouseMoveEvent(evt) {}

    //nampilin di html
    render() {
        return <div>
            <h1>Berikut Brand terkenal</h1>
            <ul>
                <li>Nama Brand: {this.state.nama}</li>
                <li>Tahun Berdiri: {this.state.tahun}</li>
                <li>Asal Negara: {this.state.negara}</li>
            </ul>
            <p>{this.state.penjelasan}</p>
            <button onClick={() => this.setState({ nama: 'Louis Vitton'})}>
                Ubah Nama Brand
            </button>
            <button onClick={() => this.setState({ tahun: 1854})}>
                Ubah Tahun
            </button>
            <button onClick={() => this.setState({ negara: 'Perancis'})}>
                Ubah Asal Negara
            </button>
        </div>
    }
}
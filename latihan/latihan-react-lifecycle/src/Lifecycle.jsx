import React, { Component } from "react";

export default class Lifecycle extends Component {
    //inisialisasi
    constructor() {
        super()

        this.state = {
            mobil: '',
            motor: '',
            rangkuman: ''
        }
    }

    //untuk memanggil data dari database
    componentDidMount() {
        console.log('subscribe ke db gopay')
        document.addEventListener('wheel', this.getMouseMoveEvent)
        console.log('ngambil data dari database')
        this.setState({
            mobil: 'Terios',
            motor:'Vario'
        })
    }

    //untuk evaluasi data
    componentDidUpdate(propsSebelumnya, stateSebelumnya) {
        console.log(propsSebelumnya)
        // console.log(stateSebelumnya)
        // console.log(this.state)

        if(stateSebelumnya.mobil !== this.state.mobil || stateSebelumnya.motor !== this.state.motor) {
            this.setState({
                rangkuman: `Ini mobil ${this.state.mobil}  dan motor ${this.state.motor}`
            })
        }
    }


    componentWillUnmount() {
        console.log('saya akan menghilang')
        console.log('unsubscribe ke db gopay')
        document.removeEventListener('wheel', this.getMouseMoveEvent)
    }

    getMouseMoveEvent(evt) {
        // console.log(evt)
    }


    //nampilin di html
    render() {
        return <div>
            <h3>Nama saya: {this.props.name}</h3>
            <ul>
                <li>Mobil: {this.state.mobil}</li>
                <li>Motor: {this.state.motor}</li>
            </ul>
            <p>{this.state.rangkuman}</p>
            <button onClick={() => this.setState({ mobil: 'Avanza'})}>
                Ubah Mobil
            </button>
            <button onClick={() => this.setState({ motor: 'Beat'})}>
                Ubah Motor
            </button>
        </div>
    }
}
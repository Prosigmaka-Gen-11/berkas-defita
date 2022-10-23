import React from 'react'
import BrandBaju, { Name, Tahun } from './BrandBaju'
import Lifecycle from './Lifecycle'
import SideEffect from './SideEffect'


export default class App extends React.Component {
  constructor (props) {
    super(props)


    this.state = {
      name:'Rani',
      munculinLifecycle: true,
      munculinSideEffect: true
    }
  }

  ubahNama() {
    this.setState({
      name: 'Rani Utami'
    })
  }

  render() {
    return (
      <div>
        <h1>Hai Defita {this.state.name}</h1>
        <button onClick={() => this.ubahNama()}>
          Ubah Nama {Name} {Tahun}
        </button>
        <BrandBaju name='Defita' sebutNama={(namaDisebut) => {
          alert('Hai ' + namaDisebut)
          this.setState({
            name: namaDisebut
          })
          }}/>

          <button onClick={() => this.setState({ munculinLifecycle: false})}>
            hilangin Lifecycle
          </button>

          {this.state.munculinLifecycle
          ? 
            <>
              <h1>Aku bagian dari Lifecycle</h1>
              <h2>Aku bagian dari Lifecycle</h2>
              <Lifecycle name={this.state.name}/>
            </>
          : this.state.name == 'abid'
          ? <h2>Nama ku abid</h2>
          : this.state.name == 'Ahmad'
          ? <h2>Namaku Ahmad</h2>
          : <h2>Aku bukan siapa2</h2>}

          <button onClick={() => this.setState({ munculinSideEffect: false })}>
            hilangin side effect
          </button>
          {this.state.munculinSideEffect
          ? <SideEffect />
          : null}
      </div>
    )
  }
}
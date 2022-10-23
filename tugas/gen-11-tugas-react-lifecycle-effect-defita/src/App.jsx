import React from 'react';
import Brand from './Brand';
import FunctionBrand from './FunctionBrand';


export default class App extends React.Component {
  constructor (props) {
    super(props)


    this.state = {
      munculinBrand: true,
      munculinFunctionBrand: true,
    }
  }

  render() {
    return (
      <div>
        <h1>Tugas React Lifecycle Nama Brand Pakaian</h1>

          <button onClick={() => this.setState({ munculinBrand: false})}>
            hilangkan Brand
          </button>

          {this.state.munculinBrand
          ? 
            <>
              <Brand />
            </>
          : null}
          <hr />

          <button onClick={() => this.setState({ munculinFunctionBrand: false })}>
            hilangkan Function Brand
          </button>
          {this.state.munculinFunctionBrand
          ? <FunctionBrand />
          : null}
      </div>
    )
  }
}
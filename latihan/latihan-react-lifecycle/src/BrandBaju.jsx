import React, { Component } from "react";

export const Name = 'Brand'
export const Tahun = '2019'

export default class BrandBaju extends Component {
    render() {
        return (
            <div>
                <h2>Ini Brand Baju {this.props.name}</h2>
                <button onClick={() => this.props.sebutNama('Rani')}>
                    sebut nama
                </button>
            </div>
        );
    }
}

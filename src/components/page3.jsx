import React, { Component } from 'react'

export default class page3 extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data &&
                    <div className="page5main">
                        <div className="main5">
                            <p>{this.props.data.list[24].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[24].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[25].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[25].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[26].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[26].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[27].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[27].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[28].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[29].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[30].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[30].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[31].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[31].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[32].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[32].main.temp}°C</p>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

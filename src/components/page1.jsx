import React, { Component } from 'react'

export default class page1 extends Component {
    render() {
        console.log(this.props.data, "props");

        return (
            <div>
                {this.props.data &&
                    <div className="page5main">
                        <div className="main5">
                            <p>{this.props.data.list[8].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[8].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[9].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[9].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[10].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[10].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[11].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[11].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[12].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[12].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[13].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[13].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[14].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[14].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[15].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[15].main.temp}°C</p>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

import React, { Component } from 'react'

export default class page5 extends Component {
    render() {
        console.log(this.props.data, "props");
        return (
            <div>
                {
                    this.props.data &&
                    <div className="page5main">
                        <div className="main5">
                            <p>{this.props.data.list[0].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[0].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[1].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[1].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[2].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[2].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[3].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[3].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[4].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[4].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[5].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[5].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[6].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[6].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[7].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[7].main.temp}°C</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

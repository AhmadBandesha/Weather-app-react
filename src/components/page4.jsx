import React, { Component } from 'react'

export default class page4 extends Component {
    render() {
        console.log(this.props.data, "props");
        return (
            // console.log(this.props.data)
            <div>

                {
                    this.props.data &&
                    <div className="page5main">
                        <div className="main5">
                            <p>{this.props.data.list[33].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[33].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[34].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[34].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[35].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[35].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[36].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[36].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[37].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[37].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[38].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[38].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[39].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[39].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[39].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[39].main.temp}°C</p>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

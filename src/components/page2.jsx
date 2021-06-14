import React, { Component } from 'react'

export default class page2 extends Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                {
                    this.props.data &&
                    <div className="page5main">
                        <div className="main5">
                            <p>{this.props.data.list[16].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[16].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[17].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[17].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[18].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[18].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[19].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[19].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[20].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[20].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[21].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[21].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[22].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[22].main.temp}°C</p>
                        </div>
                        <div className="main5">
                            <p>{this.props.data.list[23].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[23].main.temp}°C</p>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

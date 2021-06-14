import React, { Component } from 'react'
import './style.css'
import Img1 from './unnamed.png'
import { Link } from "react-router-dom"
export default class Api extends Component {

        handleForm = (e) => {
        e.prevantDefault();
        alert("test")
    }


    render() {
        return (
            <div className="main1">
                <div className="main2">
                    <input type="search" onChange={this.props.searchdata} placeholder="Enter the city name" className="inp1" />
                    <button className="btn1" onClick={this.props.handlesubmit}>search</button>
                </div>
                { this.props.data && <div>
                    <Link to="/page5" style={{ textDecoration: "unset",color:'black' }}>
                    <div className="main3">
                        <div className="main4">
                            <img src={Img1} alt="" className="img1" />
                        </div>
                        <div style={{ fontFamily: 'sans-serif', width: '70%', textAlign: 'center' }}>
                            <h2>today</h2>
                            <p>{this.props.data.list[0].dt_txt}</p>
                            <h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1>
                            <p style={{ fontSize: '23px' }}>{this.props.data.list[0].main.temp}°C</p>
                        </div>
                    </div>
                    </Link>
                    <div className="main6">
                        <Link to="/page1" style={{ textDecoration: "unset",color:'white'}}>
                            <div className="main5"><p>{this.props.data.list[8].dt_txt}</p><h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1><p style={{ fontSize: '23px' }}>{this.props.data.list[8].main.temp}°C</p></div>
                        </Link>
                        <Link to="/page2" style={{ textDecoration: "unset" }}>
                            <div className="main5" style={{ textDecoration: "unset" }}><p>{this.props.data.list[16].dt_txt}</p><h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1><p style={{ fontSize: '23px' }}>{this.props.data.list[16].main.temp}°C</p></div>
                        </Link>
                        <Link to="/page3" style={{ textDecoration: "unset" }}>
                            <div className="main5" style={{ textDecoration: "unset" }}><p>{this.props.data.list[24].dt_txt}</p><h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1><p style={{ fontSize: '23px' }}>{this.props.data.list[24].main.temp}°C</p></div>
                        </Link>
                        <Link to="/page4" style={{ textDecoration: "unset" }}>
                            <div className="main5" style={{ textDecoration: "unset" }}><p>{this.props.data.list[32].dt_txt}</p><h1 style={{ fontSize: '40px' }}>{this.props.data.city.name}</h1><p style={{ fontSize: '23px' }}>{this.props.data.list[32].main.temp}°C</p></div>

                        </Link>
                    </div>
                </div>
                }
            </div>
        )
    }
}

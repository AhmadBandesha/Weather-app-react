

import React, { Component } from 'react'
import Main from "./components/main"
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from "./components/page5"

import { Route } from "react-router-dom"
export default class app extends Component {
    state = {
        data: null,
        value: ""

    }

    searchdata = (e) => {

        this.setState({ value: e.target.value })
    }

    handlesubmit = () => {
        console.log("city");
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=dc773e382342dfdee5507a5358ae656c&units=metric`)
            .then(res => res.json())
            .then(newdata => { this.setState({ data: newdata }) }
            )

    }
    render() {
        console.log(this.state.data,"data");
        return (
            <div>
                <Route exact path="/" >
                <Main searchdata={this.searchdata}  handlesubmit ={ this.handlesubmit } data={this.state.data}/>
                </Route>

          <Route exact path="/page1">  <Page1  data={this.state.data}/></Route>
          <Route exact path="/page2">  <Page2 data={this.state.data}/></Route>
          <Route exact path="/page3">  <Page3 data={this.state.data}/></Route>
          <Route exact path="/page4">  <Page4 data={this.state.data}/></Route>
          <Route exact path="/page5">  <Page5 data={this.state.data}/></Route>

            </div>
        )
    }
}

            {/* api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} */}
            {/* dc773e382342dfdee5507a5358ae656c */}



import React, { Component } from 'react';
import {LocaleContext} from './locale-context'
import SomeContainer from "./SomeContainer"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      preferredLocale: 'en'
    }
  }
  changeLanguage = ({currentTarget:{id}}) => {
    this.setState({
      preferredLocale: id
    })
  }
  render() {
    return (
      <LocaleContext.Provider value={this.state.preferredLocale}>
      <SomeContainer changeLanguage={this.changeLanguage}/>
      </LocaleContext.Provider>
    );
  }
}

export default App;

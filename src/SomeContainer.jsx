import React, { PureComponent } from "react";
import LanguagePicker from "./LanguagePicker";
import AboutMe from "./AboutMe";
import WhereIAmFrom from "./WhereIAmFrom";

const styles = {
    app:{
        textAlign:'center'
    }
}

export default class SomeContainer extends PureComponent {
  render() {
    return (
      <div style={styles.app}>
        <h1>About me</h1>
        <LanguagePicker changeLanguage={this.props.changeLanguage} />
        <AboutMe />
        <WhereIAmFrom />
      </div>
    );
  }
}

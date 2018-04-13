import React, { PureComponent } from "react";
import { LocaleContext } from "../locale-context";

import en from "./en.json";
import es from "./es.json";
import nl from "./nl.json";

export default class Translate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        en,
        es,
        nl
      }
    };
  }
  render() {
      const {langs} = this.state 
      const {string} = this.props
    return (
      <LocaleContext.Consumer>
        {value => langs[value][string]}
      </LocaleContext.Consumer>
    );
  }
}

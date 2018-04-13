import React, {PureComponent} from 'react'

export default class LanguagePicker extends PureComponent {
    render(){
        const {changeLanguage} = this.props
        return (
            <div>
                <button id="en" onClick={changeLanguage}>ENGLISH</button>
                <button id="es" onClick={changeLanguage}>SPANISH</button>
                <button id="nl" onClick={changeLanguage}>DUTCH</button>
            </div>
        )
    }
}
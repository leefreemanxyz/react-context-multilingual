import React, {PureComponent} from 'react'
import  Translate  from './locales/Translate';

const styles = {
    aboutMe:{
        border: '3px solid black',
        margin: '0 25%'
    }
}

export default class AboutMe extends PureComponent {
    render(){
        return (
            <div style={styles.aboutMe}>
                <p><Translate string={'about-me.name'}/></p>
                <p><Translate string={'about-me.age'}/></p>
                <p><Translate string={'about-me.education'}/></p>
            </div>
        )
    }
}
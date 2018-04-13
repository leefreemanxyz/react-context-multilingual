import React, {Component} from 'react'
import Translate from "./locales/Translate"

const styles = {
    whereIAmFrom:{
        border: '3px solid black',
        margin: '1% 25%'
    }
}

export default class WhereIAmFrom extends Component {
    render(){
        return (
            <div style={styles.whereIAmFrom}>
                <p><Translate string={'where-i-am-from.milton-keynes'}/></p>
                <p><Translate string={'where-i-am-from.huddersfield'}/></p>
                <p><Translate string={'where-i-am-from.amsterdam'}/></p>
            </div>
        )
    }
}
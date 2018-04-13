import React, {PureComponent} from 'react'
import Translate from "./locales/Translate"

const styles = {
    whereIAmFrom:{
        border: '3px solid black',
        margin: '1% 25%'
    }
}

export default class WhereIAmFrom extends PureComponent {
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
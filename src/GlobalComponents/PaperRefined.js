import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
    margin: '50px',
    padding: '50px',
}

const PaperRefined = (props) => (
    <Paper className={props.className} style={styles}>
        {props.children}
    </Paper>
)

export default PaperRefined
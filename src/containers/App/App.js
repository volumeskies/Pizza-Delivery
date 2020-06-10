import React from 'react';
import styles from './App.scss';

class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello, World!</h1>
            <div className={styles.container}></div>
            </>
        );
    }
}

export default App;
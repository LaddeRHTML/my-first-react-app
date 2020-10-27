import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
        /* this.nextYear = this.nextYear.bind(this); */
    }
    nextYear= () =>{
        this.setState(state => ({
            years: ++state.years
        }));
    };
/*     nextYear() {
        console.log(1);
        this.setState(state => ({
            years: ++state.years
        }));
    } */
    render () {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button> 
                <h1>
                    Hi, my name is {name}, surname is {surname}
                    My SMM profile <a href={link}>is</a>, I am {years} y.o
                </h1>
            </>
        )
    }
}

const All = () =>{
    return (
        <>
            <WhoAmI name='John' surname='Smith' link='facebook.com'/>
            <WhoAmI name='Joshua' surname='Qex' link='facebook.com'/>
            <WhoAmI name='Mozart' surname='Kamba' link='facebook.com'/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
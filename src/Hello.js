import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
            <div className='f1 tc'> {/* jsx, part of react, allows to write html like syntax in js, class in jsx is className as class is a js OOP */}
                <h1>Hello World</h1>
                <p> {this.props.greetings} </p>
            </div>
        );
    }
}

export default Hello;


// idea of separation of concerns in React is about components.
// jsx creates virtual dom, not html.
import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';


const Form = () => {
    return (
        <form className="prospective-form">
            <input type="text" placeholder="Your name (Required)"></input>
            <input type="text" placeholder="Your email (Required)"></input>
            <input type="text" placeholder="Where are you from? (Required)"></input>
            <input type="text" placeholder="What can you teach? (Required)"></input>
            <input type="text" placeholder="Link to github (Optional)"></input>
            <input type="text" placeholder="Link to resume (Optional)"></input>
            <button style={styles.button2} type="submit">Submit{"  "}<i className="fas fa-check"></i></button>
        </form>
    )
}

class Prospectives extends Component {

    constructor(){
        super();
        this.state = { 
            showForm: false
        }
    }

  render() {

    if (this.state.showForm) {
        return (
            <div>
                <Header />
                    <div style={styles.container}>
                    <h1 style={styles.title}>Looking to become an instructor at coursewide?</h1>
                    <p style={styles.paragraph}> Fill out the form below to get started</p>
                    <Form />
                    </div>
                <Footer />
            </div>
        )
    }
    return (
      <div>
        <Header />
        <div style={styles.container}>   
            <h1 style={styles.title}>Looking to become an instructor at coursewide?</h1>
            <div className="prospective-svg"> </div>
            <p style={styles.paragraph}> If you meet the following requirements below, sign up below and we'll get back to you within 24 hours.</p> 
            <ul style={styles.ul}>
                    <li style={styles.li}><i className="fas fa-globe-americas"></i>{" "}Fluent in both English and Spanish</li>
                    <li style={styles.li}><i className="fas fa-laptop-code"></i>{" "}Experience in software developement</li>
            </ul>
            <p style={styles.paragraph2}> Meet the requirements?</p>
            <button onClick={() => this.setState({showForm: true})}style={styles.button}>Fill out a form now!</button>
        </div>
        <Footer />
      </div>
    )
  }
}

const styles = {
    container: {
        width: '60%',
        margin: '3rem auto'
    },
    title: {
        color: '#707070',
        marginBottom: '2rem'
    },
    paragraph: {
        marginBottom: '2rem',
        fontSize: '1.5rem',
        color: '#707070',
        lineHeight: '2'
    },
    paragraph2: {
        fontSize: '1.5rem',
        color: '#707070',
        lineHeight: '1.5',
        marginTop: '2rem',
        marginBottom: '1rem'
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
        margin: 0
    },
    li: {
        marginBottom: '2rem',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: '#66a6ff'
    },
    button: {
        padding: '15px',
        backgroundColor: 'rgba(102,166,255, 0.2)',
        font: 'inherit',
        fontSize: '1.5rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'rgb(102,166,255)',
        fontWeight: 800,
        borderRadius: '10px',
        marginBottom: '6rem',
        width: '300px'
    },
    button2: {
        padding: '15px',
        backgroundColor: 'rgba(102,166,255, 0.2)',
        font: 'inherit',
        fontSize: '1rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'rgb(102,166,255)',
        textAlign: 'left',
        fontWeight: 800,
        marginBottom: '2rem'
    }
}

export default Prospectives;

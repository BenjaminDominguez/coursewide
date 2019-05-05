import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';

class Prospectives extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.container}>   
            <h1 style={styles.title}>Looking to become an instructor at coursewide?</h1>
            <div className="prospective-svg"> </div>
            <p style={styles.paragraph}> If you meet the following requirements below, sign up below and we'll get back to you within 24 hours.</p> 
            <ul style={styles.ul}>
                    <li style={styles.li}><i class="fas fa-globe-americas"></i>{" "}Fluent in both English and Spanish</li>
                    <li style={styles.li}><i class="fas fa-laptop-code"></i>{" "}Experience in software developement</li>
            </ul>
            <p style={styles.paragraph2}> Meet the requirements?</p>
            <button style={styles.button}>Fill out a form now!</button>
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
    }
}

export default Prospectives;

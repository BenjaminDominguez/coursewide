import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';
import { connect } from 'react-redux';
import { registerTeacher } from '../../actions/authActions';
import Validator from '../../Validator';


class Form extends Component {

    render() {

    const { handleSubmit, handleChange } = this.props;    

    return (
        <form className="prospective-form" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="first" type="text" placeholder="Your first name (Required)"></input>
            <input onChange={handleChange} name="last" type="text" placeholder="Your last name (Required)"></input>
            <input onChange={handleChange} name="email" type="text" placeholder="Your email (Required)"></input>
            <input onChange={handleChange} name="location" type="text" placeholder="Where are you from? (Required)"></input>
            <input onChange={handleChange} name="subject" type="text" placeholder="What can you teach? (Required)"></input>
            <input onChange={handleChange} name="github" type="text" placeholder="Link to github (Optional)"></input>
            <input onChange={handleChange} name="resume" type="text" placeholder="Link to resume (Optional)"></input>
            <button style={styles.button2} type="submit">Submit{"  "}<i className="fas fa-check"></i></button>
        </form>
    )}
}

class Prospectives extends Component {

    constructor(){
        super();

        this.validator = new Validator("red");

        this.state = { 
            showForm: false,
            email: '',
            location: '',
            first: '',
            last: '',
            last: '',
            subject: '',
            github: '',
            resume: '',

            flashedMessages: undefined
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({showForm: true})
        //Scroll to the top of the page
        window.scrollTo(0, 0)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const { email, location, first, last, subject, github, resume } = this.state;

        const valuesToValidate = [email, location, first, last, subject]

        const flashedMessages = this.validator.validateEachLength(valuesToValidate);

        if (flashedMessages.length === 0) {
            const teacherData = {
                approved: false,
                email: email,
                location: location,
                first: first,
                last: last,
                subject: subject,
                github: github,
                resume: resume
            }

            this.props.handleRegister(teacherData)
        } else {
            this.setState({flashedMessages: flashedMessages[0]})
        }
    }

  render() {

    const { showForm, flashedMessages } = this.state;

    if (showForm) {
        return (
            <div>
                <Header />
                    { flashedMessages }
                    <div style={styles.container}>
                    <h1 style={styles.title}>Looking to become an instructor at coursewide?</h1>
                    <p style={styles.paragraph}> Fill out the form below to get started</p>
                    <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
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
            <button onClick={this.handleClick}style={styles.button}>Fill out a form now!</button>
        </div>
        <Footer />
      </div>
    )
  }
}

const styles = {
    container: {
        width: '60%',
        margin: '3rem auto',
        paddingBottom: '2rem'
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

const mapDispatchToProps = dispatch => ({
    handleRegister: (teacherData) => { dispatch(registerTeacher(teacherData)) }
})

export default connect(null, mapDispatchToProps)(Prospectives);

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    return (
        <section className='page-container'>


             <form id="contact-form">
                <h1 id="contactMe">Contact Information</h1>
                <a href="mailto:cmortenson97@gmail.com" className='con-link'>
                   Email
                   </a>
                <a  href="http://linkedin.com/in/cienna-mortenson-74666b217" className='con-link'> 
                    LinkedIn
                </a>
                <a href="https://github.com/Cienna97" className= 'con-link'>
                </a>

                <a href="tel:5039971441" className='con-link'>
                Phone
                </a>
              
            

        </form>
        </section>
    )
}

export default ContactForm;
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../utils/helpers';

function ContactForm() {

    return (
        <section>
            <form id="contact-form">
                <h1 id="contactMe">Contact Me</h1>
                <a href="https://github.com/Cienna97" className='con-link'>
                    GitHub
                </a>
                
                <a href="mailto:cmortenson97@gmail.com" className='con-link'>
                   Email
                </a>
                
                <a href="tel:503-997-1441" className='con-link'>
                Phone
                </a>
                <a href="http://linkedin.com/in/cienna-mortenson-74666b217" className='con-link'>
                    LinkedIn
                </a>
            
           </form>


        </section>
    )
}
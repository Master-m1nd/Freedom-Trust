import React, { useState } from 'react';
import './SignUp.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';


import close_btn from '../../images/svg/close-btn-white.svg';
import avatar from '../../images/svg/login.svg';
import open_password from '../../images/svg/password-eye.svg';
import close_password from '../../images/svg/close-eye.svg';

const SignUp = () => {
    const [isPopUpOpen, setPopUpOpen] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const openPopUp = () => {
        setPopUpOpen(true);
    };

    const closePopUp = () => {
        setPopUpOpen(false);
    };

    const handleButtonClick = () => {
        closePopUp();
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <div className='signUp-wrapper'>
            <div className='signUp'>
                <NavLink to = '/logIn' className='no-underline'>
                    <button onClick={openPopUp}>Login
                        <img src={avatar} alt='avatar' />
                    </button>
                </NavLink>
                {isPopUpOpen && (
                    <div className='popUp-wrapper'>
                        <div className='popUp'>
                            <button className='close-btn' onClick={handleButtonClick}>
                                <img src={close_btn} alt='close_btn' />
                            </button>
                            <h2>Sign-up</h2>
                            <Formik
                                validateOnChange={true}
                                initialValues={{ name: '', surname: '', email: '', phone: '', password: '' }}
                                validate={(values) => {
                                    const errors = {};

                                    if(!values.name) {
                                        errors.name = 'Name is required';
                                    }else if (!/^[a-zA-Z]{2,20}$/.test(values.name)) {
                                        errors.name = 'Invalid name';
                                    }

                                    if(!values.surname) {
                                        errors.surname = 'Surname is required';
                                    }else if (!/^[a-zA-Z]{2,20}$/.test(values.surname)) {
                                        errors.surname = 'Invalid surname';
                                    }

                                    if(!values.email) {
                                        errors.email = 'Email is required';
                                    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
                                        errors.email = 'Invalid email';
                                    }

                                    if(!values.phone) {
                                        errors.phone = 'Phone is required';
                                    }else if (!/^[\d+]+$/.test(values.phone)) {
                                        errors.phone = 'Invalid phone number';
                                    }

                                    if(!values.password) {
                                        errors.password = 'Password is required';
                                    }else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
                                        errors.password = 'Minimum eight characters, at least one letter and one number';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert('Form submitted successfully!');
                                        setSubmitting(false);
                                        closePopUp();
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className='form-wrapper'>
                                        <Field className='input' autoComplete='true' type='name' name='name' placeholder='First name' />
                                        <ErrorMessage name='name' component='p' className='error-message' />
                                        <Field className='input' autoComplete='true' type='surname' name='surname' placeholder='Last name' />
                                        <ErrorMessage name='surname' component='p' className='error-message' />
                                        <Field className='input' autoComplete='true' type='email' name='email' placeholder='E-mail' />
                                        <ErrorMessage name='email' component='p' className='error-message' />
                                        <Field className='input' autoComplete='true' type='phone' name='phone' placeholder='Phone' />
                                        <ErrorMessage name='phone' component='p' className='error-message' />
                                        <div className='password-wrapper'>
                                            <Field className='input' autoComplete='true' type={passwordVisible ? 'text': 'password'} name='password' placeholder='Password' />
                                            <img 
                                                id='closeEye' 
                                                src={passwordVisible ? open_password : close_password} 
                                                onClick={togglePasswordVisibility} 
                                                alt='eye-icon'/>
                                        </div> 
                                        <ErrorMessage name='password' component='p' className='error-message' />
                                        <div className='btn'>
                                            <button type='submit' disabled={isSubmitting}>Sign-up</button>
                                        </div>
                                        <div className='log-in'>
                                            <p>Have an account?</p>
                                            <NavLink to='/logIn'>Log in</NavLink>
                                        </div>  
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUp;
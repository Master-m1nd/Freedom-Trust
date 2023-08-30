// import React, { useState } from 'react';
// import './Form.scss';
// import { NavLink } from 'react-router-dom';
// import { Formik, Field, ErrorMessage } from 'formik';


// import book from '../../images/svg/book.svg';
// import close_btn from '../../images/svg/close-btn-white.svg';

// const Form = () => {

//     const [isOpenForm, setIsOpenForm] = useState(false);

//     const openForm = () => {
//         setIsOpenForm(true);
//     };

//     const closeForm = () => {
//         setIsOpenForm(false);
//     };

//     return (
//         <>
//             <div className='form-wrapper'>
//                 <div className='enter-form' onClick={openForm}>
//                     <NavLink to='/fillForm' className='no-underline'>
//                         <img src={book} alt='book' />
//                         Fill the form
//                     </NavLink>
//                     {isOpenForm && (
//                         <div className='form-box'>
//                             <div className='form'>
//                                 <button className='close-btn' onClick={closeForm}>
//                                     <img src={close_btn} alt='close-btn' />
//                                 </button>
//                                 <h2>Form</h2>
//                                 <p>Information about you</p>
//                                 <div className='line'></div>
//                                 <Formik
//                                     className='form-container'
//                                     validateOnChange={true}
//                                     initialValues={{name: '', surname: '', address: '', city: '', email: '', phone:'',
//                                         childName: '', age: '', diagnosis: '', stage: ''}}
//                                     validate={(values) => {
//                                         const errors = {};

//                                         if (!values.name) {
//                                             errors.name = 'Name is required';
//                                         }
                                        
//                                         if (!values.surname) {
//                                             errors.surname = 'Surname is required';
//                                         }                                    
                                        
//                                         if (!values.address) {
//                                             errors.address = 'Address is required';
//                                         }

//                                         if (!values.city) {
//                                             errors.city = 'City is required';
//                                         }

//                                         if (!values.email) {
//                                             errors.email = 'Email is required';
//                                         }

//                                         if (!values.phone) {
//                                             errors.phone = 'Phone is required';
//                                         }

//                                         if (!values.childName) {
//                                             errors.childName = 'Child`s name is required';
//                                         }

//                                         if (!values.age) {
//                                             errors.age = 'Age is required';
//                                         }

//                                         if (!values.diagnosis) {
//                                             errors.diagnosis = 'Diagnosis is required';
//                                         }

//                                         if (!values.stage) {
//                                             errors.stage = 'Stage is required';
//                                         }

//                                         else { 

//                                             if (!/^[a-zA-Z]{2,20}$/.test(values.name)) {
//                                                 errors.name = 'Invalid name';
//                                             }

//                                             if (!/^[a-zA-Z]{2,20}$/.test(values.surname)) {
//                                                 errors.surname = 'Invalid surname';
//                                             }

//                                             if (!/^[a-zA-Z]{2,20}$/.test(values.childName)) {
//                                                 errors.childName = 'Invalid name of child';
//                                             }

//                                             if (!/^[\d+]+$/.test(values.phone)) {
//                                                 errors.phone = 'Invalid phone number';
//                                             }

//                                             if (!/.*\d.*/.test(values.age)) {
//                                                 errors.age = 'Invalid age';
//                                             }

//                                             if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
//                                                 errors.email = 'Invalid email';
//                                             }

//                                         }
//                                         return errors;
//                                     }}
//                                     onSubmit={(values, { setSubmitting }) => {
//                                         setTimeout(() => {
//                                             alert('Form submitted successfully!');
//                                             setSubmitting(false);
//                                             closeForm();
//                                         }, 400);
//                                     }}
//                                 >
//                                     {({ isSubmitting }) => (
//                                         <Form className='form-container'>
//                                             <div className='name'>
//                                                 <Field className='input' type='text' name='name' placeholder='First name' />
//                                                 <ErrorMessage name='name' component='p' className='error-message' />
//                                                 <Field className='input' type='text' name='surname' placeholder='Last name' />
//                                                 <ErrorMessage name='surname' component='p' className='error-message' />
//                                             </div>

//                                             <Field className='input' type='email' name='email' placeholder='E-mail' />
//                                             <ErrorMessage name='email' component='p' className='error-message' />
//                                             <Field className='input' type='tel' name='phone' placeholder='Phone' />
//                                             <ErrorMessage name='phone' component='p' className='error-message' />
//                                             <div className='btn'>
//                                                 <button type='submit' disabled={isSubmitting}>Send</button>
//                                             </div> 
//                                         </Form>
//                                     )}
//                                 </Formik>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>);
// };

// export default Form;
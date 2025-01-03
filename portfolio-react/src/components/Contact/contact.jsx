/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import '../../main.css'
import './contact.css'


const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        emailjs
            .send(
                'service_zw3muln',
                'template_ld5o0cq',
                {
                    name: data.Name,
                    email: data.Email,
                    phone: data.Phone,
                    message: data.Message,
                },
                'jb64Ze4bXdU6xGMmQ'
            )
            .then(
                (response) => {
                    alert('Email sent successfully!');
                    reset();
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                }
            );
    }
    return (
        <div>
            <h1>Contact:</h1>
            <section id="about">
                <div className='aboutLinks'>
                    <p>My email:</p>
                    <a href="mailto:mda_200418@mail.ru"><h3>mda_200418@mail.ru</h3></a>
                    <p>My Phone number:</p>
                    <a href="tel:437-438-23-09"><h3>+1 437-438-23-09</h3></a>
                </div>
                <div className="wrapper2">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <h1>Write to me:</h1>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("Name", { required: "Name is required" })}
                                className={errors.Name ? "error" : ""}
                            />
                            {errors.Name && <p className="error-message">{errors.Name.message}</p>}
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("Email", { required: "Email is required" })}
                                className={errors.Email ? "error" : ""}
                            />
                            {errors.Email && <p className="error-message">{errors.Email.message}</p>}
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                placeholder="Phone"
                                {...register("Phone", { required: "Phone is required" })}
                                className={errors.Phone ? "error" : ""}
                            />
                            {errors.Phone && <p className="error-message">{errors.Phone.message}</p>}
                        </div>

                        <div className="form-group">
                            <textarea
                                placeholder="Your message"
                                {...register("Message", { required: "Message is required" })}
                                className={errors.Message ? "error" : ""}
                            ></textarea>
                            {errors.Message && <p className="error-message">{errors.Message.message}</p>}
                        </div>

                        <button type="submit" className="btn3">Submit a request</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
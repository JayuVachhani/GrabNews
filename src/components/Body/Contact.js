import React, { useRef,useState } from "react";
import "./Contact.css";
import Footer from "./Footer";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false)
    const [successMessage,setSuccessMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(e) // Prevents default refresh by the browser
        emailjs.sendForm('service_lkyvk6l',
        'template_exg97qv', form.current, 'LtM7aMfym8ZJcQ6Tc')
            .then((result) => {
                setEmailSent(true)
                setSuccessMessage(result.text)
                // setSuccessMessage(`Message Sent, We will get back to you shortly ${result.text}`)
        alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
                });
        console.log("success",successMessage)
        };
    return (
        <div>
            <div className="container">
                
                <div className=" text-center mt-5 ">
                    <h1>Contact Us</h1>
                    {/* {successMessage=='Ok'?<p style={{color:"green",fontSize:"25px"}}>Received Your Email, We will connect with you shortly.</p>:""} */}
                </div>
                <div className="row ">
                    <div className="col-lg-8 mx-auto">
                        <div className="card mt-2 mx-auto p-1 bg-light">
                            <div className="card-body">
                            
                                <div className="container">
                         
                                    
                                    <form id="contact-form" role="form" onSubmit={handleSubmit} ref={form}>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        
                                                        <label for="form_name">Firstname *</label>
                                                        <input
                                                            id="form_name"
                                                            type="text"
                                                            name="firstname"
                                                            className="form-control"
                                                            placeholder="Please enter your firstname *"
                                                            required="required"
                                                            data-error="Firstname is required."
                                                            onChange={(event)=>event.target.value}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        
                                                        <label for="form_lastname">Lastname *</label>
                                                        <input
                                                            id="form_lastname"
                                                            type="text"
                                                            name="lastname"
                                                            className="form-control"
                                                            placeholder="Please enter your lastname *"
                                                            required="required"
                                                            data-error="Lastname is required."
                                                            onChange={(event)=>event.target.value}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        
                                                        <label for="form_email">Email *</label>
                                                        <input
                                                            id="form_email"
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Please enter your email *"
                                                            required="required"
                                                            data-error="Valid email is required."
                                                            onChange={(event)=>event.target.value}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        
                                                        
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        
                                                        <label for="form_message">Message *</label>
                                                        <textarea
                                                            id="form_message"
                                                            name="message"
                                                            className="form-control"
                                                            placeholder="Write your message here."
                                                            rows="4"
                                                            required="required"
                                                            data-error="Please, leave us a message."
                                                            onChange={(event)=>event.target.value}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    
                                                    <input
                                                        type="submit"
                                                        className="btn btn-success btn-send pt-2 "
                                                        value="Send Message"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;

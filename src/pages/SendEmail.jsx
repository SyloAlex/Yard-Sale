import React from 'react';
import '../styles/SendEmail.scss';
import yard_logo from "@logos/logo_yard_sale.svg";
import email_logo from "@icons/email.svg" 

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={yard_logo} alt="logo" className="icon-logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email_logo} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;

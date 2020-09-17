import React from 'react'
import '../style/contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <form>
                <input type="text" className="form-control" placeholder="NAME" name="name" value="" />
                <input type="email" className="form-control" placeholder="EMAIL" name="email" value="" />
                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
                <button className="send-button" type="submit" value="SEND">
                    <div className="button">
                        <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                    </div>
                </button>
            </form>
        </div>
    )
}

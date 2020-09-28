import React, { useState } from 'react'
import '../style/signupLogin.css'

export default function SignUp() {
    const [isRegister, setIsRegister] = useState(false)

    const toggleOption = () => {
        setIsRegister(!isRegister)
    }

    return (
        <div className="signup-login">
            <h2>Connect</h2>

            <div className="options">
                <h3 onClick={toggleOption} className={!isRegister && "active"}>Sign Up</h3>
                <h3 onClick={toggleOption} className={isRegister && "active"}>Login</h3>
            </div>

            {!isRegister ? (
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Signup</button>
                </form>
            ) : (
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                )
            }
            <footer>
                <p> <i className="fas fa-dumbbell"></i> GYM</p>
            </footer>
        </div>
    )
}

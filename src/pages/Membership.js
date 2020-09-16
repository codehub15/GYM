import React, { useState } from 'react'
import data from '../data/membership.js'
import { Link } from 'react-router-dom'
import '../style/membership.css'


export default function Membership() {
    const [membership] = useState(data)

    const membershipData = membership.map((data, i) => {
        return <li key={i}>
            <h3>{data.type}</h3>
            <p className="price">{data.price} Euro/Month</p>
            <p>{data.period}</p>
            <p>{data.plus}</p>
            <button className='btn-m btn-membership'>
                <Link to="/sign-up">get it now</Link>
            </button>
        </li>
    })

    return (
        <div className="membership-container">
            <h2>Select your membership plan</h2>
            <ul className="membership-boxes">
                {membershipData}
            </ul>
            <div className="trial">
                <h4>Try trial 1 day free training</h4>
                <button className='btn-m btn-trial'>
                    <Link to="/sign-up">try it now</Link>
                </button>
            </div>
        </div>
    )
}

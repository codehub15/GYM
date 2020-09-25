import React, { useState } from 'react'
import CardItem from './CardItem'
import gymServices from '../data/services.js'
import '../style/cards.css'

export default function Cards() {
    const [gymData] = useState(gymServices)

    return (
        <div className="cards">
            <h2>Checkout our Gym Offers</h2>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {gymData.map((data, i) =>
                            <CardItem key={i} data={data} />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

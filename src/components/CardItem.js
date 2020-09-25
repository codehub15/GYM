import React from 'react'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
    const { type, src } = props.data

    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to="/">
                    {/** <figure className="cards__item__pic-wrap" data-category={type}> */}
                    <figure className="cards__item__pic-wrap">
                        <img src={src} alt="Gym" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{type}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

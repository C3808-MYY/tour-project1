import React from "react";
import { useState } from "react";
import "./cards.css"
import { data } from "../helper/helper"
const Cards = () => {
    const [showImage, setShowImage] = useState(true)
    return (
        <div className="card-container" onClick={() => setShowImage(!showImage)}>
                    {data.map((cards) => {
                        return (
                            <div className="cards" key={cards.id}>
                                <div className="title">
                                   { showImage && <h2 className="titleH2">{cards.title}</h2>}
                                </div>
                                <img className="cardImg" src={cards.image} alt={cards.title} />
                                <div className="cardDisc">
                                { showImage && <p>{cards.desc}</p>}
                                </div>
                            </div>
                        )
                    })}
        </div>
    )
}
export default Cards;
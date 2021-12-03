import React from 'react'

function Card({name, imgSrc}) {
    return (
        <div class="card" style={{ width: "18rem", margin: "10px" }}>
            <img class="card-img-top" src={imgSrc} alt="" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <a href="# " class="btn btn1 btn-primary">CONTACT US</a>
            </div>
        </div>
    )
}

export default Card

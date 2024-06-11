import React from 'react'

function Card(props) {
    return (
        <div className="card w-96 max-sm:w-full bg-none ">
            <figure><img src={props.imgSrc} alt="" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-lg text-center">{props.title}</h2>
                <p>{props.des}</p>
            </div>
        </div>
    )
}

export default Card
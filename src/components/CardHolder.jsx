import React from 'react'
import Card from './Card'
function CardHolder(props) {
    return (
        <div className='bg-slate-100 text-black flex max-sm:flex-col justify-center items-center gap-4 py-20'>
            <Card
                imgSrc={props.imgSrc1}
                title={props.title1}
                des={props.des1}
            />
            <Card
                imgSrc={props.imgSrc2}
                title={props.title2}
                des={props.des2}
            />
            <Card
                imgSrc={props.imgSrc3}
                title={props.title3}
                des={props.des3}
            />


        </div>
    )
}

export default CardHolder
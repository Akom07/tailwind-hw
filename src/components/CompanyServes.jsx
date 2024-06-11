import React from 'react'
import CardHolder from './CardHolder'
function CompanyServes() {
    return (
        <div className="bg-slate-100 text-black flex justify-center items-center min-h-[90vh]">

            <div className='flex flex-col justify-between items-center gap-20 w-4/5  '>
                <h2 className='text-4xl'>Here is some of our serves</h2>
                <h1 className='text-2xl'>what make our bread the best is our quality</h1>
                <CardHolder
                    imgSrc1='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png'
                    title1='fresh'
                    des1='fresh out of the oven'
                    imgSrc2='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png'
                    title2='fast'
                    des2='fast delivery as you order '
                    imgSrc3='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png'
                    title3='without milk'
                    des3='Without allergens'
                />
            </div>
        </div>
    )
}

export default CompanyServes
import React from 'react'

function Info() {
    return (
        <div className="flex justify-center items-center min-h-[90vh] gap-4 text-black max-sm:flex-col bg-white" >
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" alt="" />
            <div className='flex flex-col w-1/3 max-sm:w-full gap-8'>
                <p className='text-3xl'>cheap fresh ready to be eaten</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur repudiandae nulla. Mollitia corrupti repellendus maiores. Quo, culpa laudantium eos quam possimus, rerum est accusamus at aspernatur, tempora perspiciatis tempore?</p>
            </div>
        </div>
    )
}

export default Info
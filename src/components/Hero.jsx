import React from 'react'

function Hero() {
    return (
        <div className="bg-cover bg-center flex justify-center items-center min-h-screen" style={{ backgroundImage: 'url(https://stone-horn-a78.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F989539c7-7a6d-4611-9778-eb2623dec992%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=8328772e-ae4e-4183-8c09-34ac461e12e4&spaceId=989539c7-7a6d-4611-9778-eb2623dec992&width=1440&userId=&cache=v2)' }}>

            <div className='flex flex-col justify-between items-start gap-20 w-4/5 max-sm:w-full text-white  '>
                <h2 className='text-4xl'>Bread Delivery</h2>
                <h1 className='w-4/6 text-9xl max-sm:text-6xl max-sm:w-full'>We Delever Bread as fast as you can order</h1>
                <p className='text-2xl'>fast delivery frash bread and high quality</p>
                <button className='btn text-black hover:bg-orange-400 bg-orange-300'>ORDER NOW</button>
            </div>
        </div>
    )
}

export default Hero
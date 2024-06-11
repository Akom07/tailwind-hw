import React from 'react'

function Info() {
    return (
        <div className="flex justify-center items-center min-h-[90vh] gap-4 text-black max-sm:flex-col" style={{ backgroundImage: 'url(https://stone-horn-a78.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F989539c7-7a6d-4611-9778-eb2623dec992%2F1bf45807-806c-4ab9-a756-d7ff6c3f56f6%2FScreen_Shot_2023-11-26_at_11.03.28_AM_cleanup.png?table=block&id=014ea53e-b9b6-459f-9bab-1a5c30528698&spaceId=989539c7-7a6d-4611-9778-eb2623dec992&width=1440&userId=&cache=v2)' }} >
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" alt="" />
            <div className='flex flex-col w-1/3 max-sm:w-full gap-8'>
                <p className='text-3xl'>cheap fresh ready to be eaten</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur repudiandae nulla. Mollitia corrupti repellendus maiores. Quo, culpa laudantium eos quam possimus, rerum est accusamus at aspernatur, tempora perspiciatis tempore?</p>
            </div>
        </div>
    )
}

export default Info
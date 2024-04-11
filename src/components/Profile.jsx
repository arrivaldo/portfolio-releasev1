import React from 'react'

const Profile = () => {
  return (
        <>
            
<div className="flex items-start gap-6">
    {/* <img className="w-24 h-24 rounded-full" src="/images/erick3.png" alt="Jese image" /> */}
    <img className="w-24 h-24 rounded-full" src="/images/profilePic3.jpeg" alt="Jese image" />

    <div className="flex flex-col w-full leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xl font-semibold ">Erick Bárcena</span>
            <span className="text-lg font-normal">11:46</span>
        </div>
        <p className="text-lg font-normal py-2"> That's awesome. I think our users will really appreciate.</p>
        {/* <span className="text-lg font-normal ">Delivered</span> */}
    </div>
</div>

        </>
    )
}

export default Profile
import React from 'react'
import Nav from '../nav/Nav'
import AvatarUser from '../avatar/Avatar'

function UserBar() {
  return (
    <aside className='h-full w-[15%] bg-blue-100 bg-opacity-40 rounded-2xl flex flex-col justify-around items-center border-2 border-white'> 
        <AvatarUser />
        <div className='w-full h-[60%] flex justify-center items-center  '>
        <Nav />
        </div> 
    </aside>
  )
}

export default UserBar

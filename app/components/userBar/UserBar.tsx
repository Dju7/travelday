import React from 'react'
import Nav from '../nav/Nav'
import AvatarUser from '../avatar/Avatar'

function UserBar() {
  return (
    <aside className='h-full w-[15%] bg-[#2d3748] rounded-2xl flex flex-col justify-around items-center'> 
        <AvatarUser />
        <div className='w-[70%] h-[60%] flex justify-center items-center '>
        <Nav />
        </div> 
    </aside>
  )
}

export default UserBar

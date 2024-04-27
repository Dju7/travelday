import React from 'react'
import Nav from '../nav/Nav'
import AvatarUser from '../avatar/Avatar'

function UserBar() {
  return (
    <aside className='h-14 w-full lg:min-h-[92vh] lg:w-[10%] bg-blue-300 bg-opacity-30  flex lg:flex-col justify-around items-center border border-white'> 
        <AvatarUser />
        <div className='w-full h-[75vh] flex justify-center items-center'>
        <Nav />
        </div> 
    </aside>
  )
}

export default UserBar

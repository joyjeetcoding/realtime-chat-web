import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        {/* <Conversation />
        <LogoutButton /> */}
    </div>
  )
}

export default Sidebar
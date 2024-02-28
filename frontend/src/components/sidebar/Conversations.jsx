import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  useGetConversation()

  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations



// Starter Code
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }
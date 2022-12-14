import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/1048d435-c4b3-474a-b79d-6af9308473d2' className='flex flex-col max-w-[600px] w-full h-[500px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>            </div>
            <input className='bg-[#e1e4f1] p-2 rounded-md' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e1e4f1] rounded-md' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#e1e4f1] p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:transition-color duration-500'>Send</button>
        </form>
    </div>
  )
}

export default Contact
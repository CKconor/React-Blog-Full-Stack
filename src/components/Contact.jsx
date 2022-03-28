import React from 'react'

function Contact(className) {
  return (
    <div className="transition duration-0 hover:duration-150 bg-accentcolor hover:bg-transparent hover:text-accentcolor text-lightmode dark:text-darkmode py-2 px-4 border border-accentcolor rounded">
        <button className="font-bold">Contact Me</button>
    </div>
  )
}

export default Contact
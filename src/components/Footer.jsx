import React from 'react'
import Contact from './Contact'
function Footer() {
  return (
    <footer className="footer mt-10 flex flex-row justify-between text-lightsubtext dark:text-darksubtext">
        <div className="flex flex-col basis 3/4">
            <div className="flex-row flex mt-7">
                <a className="mr-8" href= "/">Home</a>
                <a className="mr-8" href= "/">About</a>
                <a className="mr-8" href= "/">Projects</a>
                <a className="mr-8" href= "/">Blog</a>
            </div>
            <div className="flex-row flex mt-5">
                <a className="mr-8" href= "/">YouTube</a>
                <a className="mr-8" href= "/">Github</a>
                <a className="mr-8" href= "/">Dribble</a>
                <a className="mr-8" href= "/">Linkedin</a>
            </div>
        </div>
        <div className="flex flex-col basis 1/4 items-end mt-7">
            <Contact/>
        </div>
    </footer>
  )
}

export default Footer
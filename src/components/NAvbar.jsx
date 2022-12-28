import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const NAvbar = () => {
  return (
    <nav>
        <img src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg" alt="" />
        <div className='btns'>

        <button>
            <Link to='/'>Home</Link>
        </button>
        <button>
            <Link to='/add'>Add</Link>
        </button>
        </div>

    </nav>
  )
}

export default NAvbar

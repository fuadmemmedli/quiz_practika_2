import React from 'react'
import '../App.css'
import {Formik , useFormik } from 'formik'
import axios from 'axios'
import Card from './Card'
import * as Yup from 'yup'
const Add = () => {
  const formik =useFormik({
    initialValues: {
      id:'',
      title:'',
      author:''
    },
    onSubmit:(values)=>{
      const { id, title, author } = values

      let newCard = new Card(id,title,author)

      axios.post('http://localhost:3000/posts',newCard)
      .then((res)=>console.log(res.data))
    },

  })
  const CardSchema = Yup.object().shape({
    id:Yup.string().min(2).max(8).required('required'),
    title:Yup.string().min(3).max(8).required('required'),
    author:Yup.string().min(3).max(8).required('required')

  })
    
  
  return (
    <div className='add_body'>
      <div className='create_cards'>

      <form onSubmit={formik.handleSumbit} validationScema={CardSchema}>
        <input type="text" placeholder='name' name='name' onChenge={formik.handleChange}/><br />
        <input type="text" placeholder='username' name='username' onChange={formik.handleChange}/><br /> 
        <input type="text" placeholder='surname' name='surname' onChange={formik.handleChange}/><br />
        <button type='sumbit'>Sumbit</button>
      </form>
      </div>
    </div>
  )
}

export default Add

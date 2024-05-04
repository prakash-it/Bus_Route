import React from 'react'
import '../Components/Contacts.css'

export default function Contect() {
  return (
    <div className='form-container'>
      <h2 className='form-title'>Contact Us</h2>
      <form className='form'>
        <div className='form-field'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div className='form-field'>
          <label htmlFor='mobile'>Mobile no:</label>
          <input type='tel' id='mobile' />
        </div>
        <div className='form-field'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message'></textarea>
        </div>
        <button type='submit' className='form-button'>
          Submit
        </button>
      </form>
    </div>
  )
}
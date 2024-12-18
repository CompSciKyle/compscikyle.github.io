import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setform] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setform({...form, [e.target.name] : e.target.value})
  }
  const handleFocus = (e) => {}
  const handleBlur = (e) => {}
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Kyle",
        from_email: form.email,
        to_email: 'kylejfournier@gmail.com', 
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: Show success message
      //TODO: Hide an alert

      setForm({name:'', email:'', message:''})
    }).catch((error) =>{
      setIsLoading(false)
      console.log(error)
      //TODO: Show error message
    })
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w[50%]'>
        <h1 className='head-text'>Get in touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'> Name
            <input type='text' name='name' className='input' placeholder='John Doe' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
          </label>
          <label className='text-black-500 font-semibold'> Email
            <input type='email' name='email' className='input' placeholder='John@gmail.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
          </label>
          <label className='text-black-500 font-semibold'> Your Message
            <textarea name='message' rows={4} className='textarea' placeholder='Let me know how I can help you' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></textarea>
          </label>

          <button type='submit' disabled={isLoading} className='btn' onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact
import { useForm, ValidationError } from "@formspree/react";

export function FormContact() {
  const [state, handleSubmit] = useForm("mpzenzgw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center rounded bg-primary w-1/2 p-6'
    >
      <label htmlFor='name' className='md:text-2xl'>
        Name
      </label>
      <input
        id='name'
        type='text'
        name='name'
        className=' border-2 w-3/5 rounded h-10 text-xl'
        placeholder='First and Last Name'
      />
      <ValidationError prefix='Text' field='text' errors={state.errors} />
      <label htmlFor='company' className='md:text-2xl'>
        Company
      </label>
      <input
        id='company'
        type='text'
        name='company'
        placeholder='Company Name'
        className=' border-2 w-3/5 rounded h-10 text-xl'
      />
      <ValidationError prefix='text' field='company' errors={state.errors} />
      <label htmlFor='email' className='md:text-2xl'>
        Email Address
      </label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='johndoe@email.com'
        className=' border-2 w-3/5 rounded h-10 text-xl'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='phone' className='md:text-2xl'>
        Phone Number
      </label>
      <input
        id='phone'
        type='tel'
        name='phone'
        placeholder='(222)-333-4444'
        className=' border-2 w-3/5 rounded h-10 text-xl'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message' className='md:text-2xl'>
        Message for us
      </label>
      <textarea
        id='message'
        name='message'
        placeholder='Let us know how we can help you!'
        className=' border-2 w-3/5 rounded  text-xl'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        disabled={state.submitting}
        className=' border-2 py-4 px-6 my-3 rounded md:text-2xl bg-secondary cursor-pointer'
      >
        Get In Touch
      </button>
    </form>
  );
}

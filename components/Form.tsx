"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {

    const [state, handleSubmit] = useForm("mrgdozpa");
    if (state.succeeded) {
        return <h2 className='text-center text-white'>Thank you for your responce</h2>
    }
    return (
        <div className="max-md:w-11/12 max-md:my-6 max-md:ml-2">
            <form onSubmit={handleSubmit} className="text-white flex flex-col gap-4">
                <legend className="font-serif font-semibold">Message me</legend>
                <span className="gap-4 flex max-md:flex-col">
                    <input type="text" id='name' name='name' placeholder="Name" required className="bg-[#80808069] w-[14rem] h-[2rem] border-b border-border p-2 placeholder-primary" />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input type="email" id='email' name='email' placeholder="Email" required className="bg-[#80808069] w-[14rem] h-[2rem] border-b border-border p-2 placeholder-primary" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </span>
                <input type="text" id='subject' name='subject' placeholder="Subject" required className="bg-[#808080b4] w-[29rem] h-[2rem] max-md:w-[90%] border-b border-border p-4 placeholder-primary" />
                <ValidationError
                    prefix="subject"
                    field="subject"
                    errors={state.errors}
                />
                <textarea placeholder="Message" id='message' name='message' required className="bg-[#80808069] w-[29rem] h-28 p-2 placeholder-primary max-md:w-[90%] border-b-[1px] border-border" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <input type="submit" value='Send Message' className="bg-blue-400 w-36 h-10 rounded-lg cursor-pointer" />
            </form>
        </div>
    )
}

export default Form
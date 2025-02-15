import React, {useId} from 'react'

const Input= React.forwardRef( function Input({
    label,
    type= "text",
    className="",
    ...props

}, ref){
    const id= useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor= {id}>
                {label}
            </label> }
            <input
            type= {type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none w-full ${className}`}
                ref= {ref}
                {...props}
                id= {id}
            >


            </input>
        </div>
    )

})
export default Input
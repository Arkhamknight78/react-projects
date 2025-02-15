import React, { useId } from 'react'

function Select({
    options,
    label,
    classname,
    ...props},
    ref
) {
    const id= useId()

  return (
    

    <div>{label && <label htmlFor={id} className=''></label>}
    <select 
    {...props}
    ref={ref}
    className={`${classname} px-3 py-2 rounded-lg bg-white text-black outline-none w-full`}
    >
    {options?.map((option)=>(
        <option key={option} value={option.value}>
            {option}
        </option>
    ))}
    </select>
    </div>
  )
}

export default React.forwardRef(Select)
import React, {forwardRef, useEffect, useRef} from 'react';

export default forwardRef(({ Options=[], icon='user', name, id, value, className, required, isFocused, handleChange}, ref) => {
    const input = ref ?  ref :useRef();
    useEffect(() =>{
        if(isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <div className='input-group mb-3'>
            <span className='input-group-text'>
                <i className={'fa-solid '+icon}></i>
            </span>
            <select name={name}
            id={id} value={value} className={className} ref={input}
            required={required} onChange={(e) => handleChange(e)}>
                { Options.map( (op) => (
                    <option value={op.id} key={op.id}>{op.name}</option>
                ))}
            </select>
        </div>
    )
});

const DivInput = () => {
  return (
    <div>DivInput</div>
  )
}


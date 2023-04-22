import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn__outline', 'btn__full__dark', 'btn__full__light', 'btn__none'];
const SIZE = ['btn__small', 'btn__medium'];


export const Button = ({
    children,
    type,
    buttonStyle,
    buttonSize,

}
) =>{

    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize)
    ? buttonSize
    : SIZE[0];

    return(
        <Link to='/login'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            >
                {children}
            </button>
        </Link>
    )
} 
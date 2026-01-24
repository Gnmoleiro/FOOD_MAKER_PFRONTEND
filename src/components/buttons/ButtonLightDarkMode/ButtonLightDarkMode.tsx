import React from 'react'
import './ButtonLightDarkMode.css'
import moon from '../../../assets/icons/moon.png'
import sun from '../../../assets/icons/sun.png'

interface SwitchProps {
  isChecked: boolean;              
  onToggle: () => void;
}

const ButtonLightDarkMode = ({ isChecked, onToggle }: SwitchProps) => {

    return (
    <label className="switch">
        <input type="checkbox"
        checked={isChecked} 
        onChange={onToggle} />
        <span className="slider round">
            <img 
            src={isChecked ? moon : sun} 
            alt="Mode Icon" 
            className="icon-mode"
            />
        </span>
    </label>
  )
}

export default ButtonLightDarkMode
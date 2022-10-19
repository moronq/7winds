import React from 'react'

import styles from './Input.module.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({ inputRef, ...props }) => (
  <input {...props} className={styles.input} ref={inputRef} />
)

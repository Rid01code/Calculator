import React from 'react'
import styles from './Number.module.css'

const Number = ({calButtonHandler}) => {

  let numbers = [
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '+',
  '0',
  '00',
  '.',
  '-',
  'c',
  '%',
  '='
]


  return (
    <div className={`${styles.number} pt-6`}>{numbers.map((number , index) => (<button key={index} className={styles.button} onClick={()=>{calButtonHandler(number)}}>{number}</button>))}</div>
  )
}

export default Number
import React, { useState } from 'react'
import Display from './display';
import Number from './number';
import styles from './Number.module.css'

const Body = () => {

  let [calVal, setCalVal] = useState('');

  let calButtonHandler = (number) => {
    if (number === "c") {
      setCalVal('');
    }
    else if (number === "=") {
      const result = eval(calVal)
      setCalVal(result)
    }
    else if (number === "←") {
      setCalVal(calVal.slice(0, -1))
    }
    else {
      const display = calVal + number
      setCalVal(display)
    }
  }
console.log(calVal)
  return (
    <div className={`${styles.body} w-96 h-full bg-gray-300 border-solid border-4 border-black rounded-xl flex flex-col items-center justify-around`}>
      <Display calVal={calVal} />
      <Number calButtonHandler={ calButtonHandler } />
    </div>
  )
}

export default Body
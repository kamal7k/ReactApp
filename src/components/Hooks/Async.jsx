import React from 'react'

const Async = () => {
setTimeout(() => {
  console.log('2sec timeout');
},2000)

console.log('hello see')
console.log('hello hello')

  return (
    <div>Async</div>
  )
}

export default Async
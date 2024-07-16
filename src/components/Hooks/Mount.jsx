import { useState } from 'react'

const Home = () => {

  const [show, setShow] = useState(false);



  return (
    <div>

      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      {show && <h1>Show if true</h1>}




    </div>
  )
}

export default Home
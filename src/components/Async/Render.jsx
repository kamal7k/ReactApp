import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Render = () => {


  const [data, setData] = useState();
  const [g, setG] = useState();
  const [load, setLoad] = useState();



  setTimeout(() => {
    setG((prev) => {
      return { name: 'per' };
    });

  }, 3000)

  const getData = async () => {
    setLoad(true)

    try {

      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      
      setData(response.data);
    } catch (err) {
      setLoad(false);
      console.log(err.message);
    }


  }





  useEffect(() => {
    console.log('hello');
    getData();
  }, []);


  console.log(data);

  return (
    <div>


      <h1>{g?.name}</h1>
    </div>
  )
}

export default Render
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Api = () => {
  const [data, setData] = useState();




  // const getData = () => {
  //   axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((val) => {
  //     setData(val.data);
  //   }).catch((val) => {
  //     console.log(val);
  //   });
  // }

  const getData = async() => {
    try{
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
    } catch(err) {
      console.log(err);
    }
  }




  useEffect(() => {

    getData();

    console.log('hello world');

  }, []);

  console.log('hello render');
  return (
    <div>
      <h1>asldknsalkd</h1>


    </div>
  )
}

export default Api
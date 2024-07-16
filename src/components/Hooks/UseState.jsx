import { useState } from "react"
import{faker} from '@faker-js/faker'
const UseState = () => {

  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const handleAdd = () => {
    const newUser ={
    image: faker.image.avatarLegacy(),
    email: faker.internet.email()
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };


  // const handleIncre = () => {
  //   setCount((prev) => prev + 1);
  //   console.log(faker.internet.email())
  // }

  // const handleDecre =()  => {
  //   setCount((prev) => prev - 1);
  
  return (
    <div className='p-4'>
      {/* Display users */}
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <img src={user.image} alt="avatar" />
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <h1>{count}</h1>
      <button onClick={handleIncre}> Add</button>
      <br></br>
      <button onClick={handleDecre}> Minus</button>

      <p>{count % 2 == 0 ? `even number ${count}` : `odd number ${count}`}</p> */}

      <div className = 'adds flex justify-end'>
        <button color onClick={handleAdd}>Add User</button>

      </div>



    </div>
  );
};

export default UseState
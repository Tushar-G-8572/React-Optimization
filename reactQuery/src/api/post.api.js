import axios from 'axios';

export const fetchUsers = async()=>{
  console.log("fetching users");
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(response.data);
  return response.data;
}
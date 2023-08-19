import Link from "next/link"
import { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
}
export default function SignUp (){
 
    return (
    <>
       <nav className='nav'>
            <h1>Personal Blogging App</h1>
            <h1><Link href="/Login">Login</Link></h1>          
        </nav>
    <div>
        <h1>SignUp</h1>
        <form className="container">
         <input type="text" placeholder="First Name"></input>
            <br/>
            <input type="text" placeholder="Last Name"></input>
            <br/>
            <input type="text" placeholder="Email"></input>
            <br/>
            <input type="text" placeholder="Password"></input>
            <br/>
            <input type="text" placeholder="Repeat Password"></input>
            <br/>
            <button type="submit">SignUp</button>
        </form>
       
        
    </div>
    </>
    )
}
import Link from "next/link"
import { useState } from "react"

export default function Profile (prop){
 
    return (
        <>
           <nav className='nav'>
                <h1>Personal Blogging App</h1>
                <h1>{ prop}</h1>
                <h1><Link href="/Logout">Logout</Link></h1>          
            </nav>
        <div>
            <h2>{prop}</h2>
            <h2>Password</h2>
            <form className="container">
                 <input type="text" placeholder="Old Password"></input>
                <br/>
                <input type="text" placeholder="New Password"></input>
                <br/>
                <input type="text" placeholder=" Repeat Password"></input>
                <br/>
                <button type="submit">Update Password</button>
            </form>
           
            
        </div>
        </>
        )
}
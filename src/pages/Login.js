import Link from "next/link"

export default function Login (){
 
    return (
        <>
           <nav className='nav'>
                <h1>Personal Blogging App</h1>
                <h1><Link href="/SignUp">SignUp</Link></h1>          
            </nav>
        <div>
            <h1>Login</h1>
            <form className="container">
                <input type="text" placeholder="Email"></input>
                <br/>
                <input type="text" placeholder="Password"></input>
                <br/>
                <button type="submit">Login</button>
            </form>
           
            
        </div>
        </>
        )
}
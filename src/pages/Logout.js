import Link from "next/link"

export default function logout () {
    return (
        <>
       <nav className='nav'>
            <h1>Personal Blogging App</h1>
            <h1><Link href="/Login">Login</Link></h1>          
        </nav>
        <div>
            Logout Successfully
        </div>
        </>
    )
}
import React, { useState } from 'react'
import styles from './../auth/auth.module.scss'
import registerImg from "./auth_images/register.png"
import './../index.css'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "./../firebase/config"
import Loader from '../components/loader/Loader'
import Card from '../components/card/Card'
import { toast } from 'react-toastify'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    //ar trebui sa folosesc useNavigate, dar nu am ultima versiune de react-router-dom
    const navigate = useNavigate()

    const registerUser = (e) => { 
        e.preventDefault()
        //testez daca citesc corect datele din fielduri
        //console.log(email,password,cPassword);
        if (password !== cPassword){
            toast.error("Password do not match.")
        }
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registration Successful...")
    navigate("/login")

  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
    }

    return (
        <>
        {isLoading && <Loader/>}
        <section className={`container ${styles.auth}`}>
            <Card>
            <div className={styles.form}>
                <h2>Register</h2>

                <form onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="Email"
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={cPassword} 
                        onChange={(e) => setCPassword(e.target.value)}
                    />
                    <button type="submit" className="--btn --btn-primary --btn-block">
                        Register
                    </button>


                </form>

                <span className={styles.register}>
                    <p>
                        Already an account?
                    </p>
                    <Link to="/login">Login</Link>
                </span>
            </div>
            </Card>
            <div className={styles.img}>
                <img src={registerImg} alt="Register" width="400" />
            </div>
        </section>
        </>
    )
}

export default Register
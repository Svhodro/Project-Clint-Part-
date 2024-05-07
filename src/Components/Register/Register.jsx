import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
function Register() {
    const HandleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.text.value;
        // console.log(email, password, username)
        // await signInWithEmailAndPassword(auth, email, password)
        //   .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;

        //     const dbRef = ref(database);
        //     get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
        //       if (snapshot.exists()) {          
        //         localStorage.setItem("dataKey", JSON.stringify(snapshot.val()));
        //         notify()
        //         setData(localStorage.getItem("dataKey"))
        //         setuser(true)

        //       } else {
        //         console.log("No data available");
        //       }
        //     }).catch((error) => {
        //       console.error(error);
        //     });
        //     // ...
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage)
        //   });
    }
    return (
        <div className='w-full '>
           <div className="flex justify-center w-full text-center">
                    <p className='text-xl font-bold  font-serif '>SignUp</p>
                </div>
            <form className="card-body" onSubmit={(e) => {
                HandleLogin(e);
            }}>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">UserName</span>
                    </label>
                    <input type="text" placeholder="UserName" className="input input-bordered" name='text' required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">SignUp</button>
                </div>
            </form>
            <div className='flex justify-center items-center gap-3 w-full'>
                <p>Signin With  </p>
                <button className="btn btn-square">
                <FcGoogle className='size-8'/>
                </button>
                <button className="btn btn-square">
                <FaGithub className='size-8'/>
                </button>
            </div>
        </div>
    )
}

export default Register
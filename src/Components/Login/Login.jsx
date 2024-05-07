import React from 'react'

function Login() {


    const HandleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;   
        // console.log(email,password)
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
        <div>

            <form className="card-body bottom-2 border-zinc-500 w-full" onSubmit={(e) => {
              HandleLogin(e);
            }}>
                <div className="flex justify-center w-full text-center">
                    <p className='text-xl font-bold  font-serif '>SignIn</p>
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
                    <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">SignIn</button>
                </div>
            </form>
        </div>

    )
}

export default Login
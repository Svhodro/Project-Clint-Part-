import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [id, setId] = useState()
    const [user, setuser] = useState()
    const [register,setRegister]=useState(true)

    return (
        <UserContext.Provider value={{register,setRegister}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider
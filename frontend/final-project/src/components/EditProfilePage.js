import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function EditProfileUser() {

    const { user, setUser } = useContext(MyContext)
    const navigate = useNavigate()

    const sendUpdateRequest = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        fetch(`/users/${user._id}`, 
            {
                method: 'PATCH',
                headers: {token: localStorage.getItem("token") },
                body: data
            }
        )
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    toast.success("user profile updated")
                    setUser(result.data)

                    setTimeout(()=>{
                        navigate("/profile")
                    },2000)
                    
                } else {
                    toast.error(result.message)
                }
            })

    }
    return (
        <div>
            <Toaster position='top-center'></Toaster>
            <h1>Profile Editor</h1>
            <form onSubmit={sendUpdateRequest}>
                <label>First Name</label> <br></br>
                <input type="text" name="firstName" defaultValue={user.firstName} /> <br></br>
                <label>Last Name</label> <br></br>
                <input type="text" name="lastName" defaultValue={user.lastName} /> <br></br>
                <label>Password</label> <br></br>
                <input type="password" name="password" placeholder='********' /> <br></br>
            {/*     <label>Profile Image : <input type="file" name="image" /> </label> <br></br>
                <img src={user.profileImage} alt="profile" width="100"></img><br></br> */}
                <button>Save</button>
            </form>
        </div>
    )
}

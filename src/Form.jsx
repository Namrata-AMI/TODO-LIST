import { useState } from "react"

export default function Form(){

    let [formData, setFormData] = useState({
        FullName: "",
        UserName: "",
    });

    let handleFormChange = (event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData)=>{
            return {...currData , [fieldName] : newValue};
        })
    }

    let handleSubmit = (event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            FullName: "",
            UserName: "",
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="FullName">Full Name</label>
            <input type="text" 
            placeholder="enter full name" 
            id="FullName" 
            value={formData.FullName}
            name="FullName"
            onChange={handleFormChange}
             >
            </input>

            <br></br><br></br>

            <label htmlFor="UserName">User Name</label>
            <input type="text" 
            placeholder="enter User name" 
            id="UserName" 
            value={formData.UserName} 
            name="UserName"
            onChange={handleFormChange}
            >
            </input>

            <button>Submit</button>
        </form>
    )
}
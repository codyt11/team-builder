import React, {useState} from "react";

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const changeHandler = (event) => {
       setMember({
           ...member,
        [event.target.name]: event.target.value
        })
    }
        
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            props.addMember(member)
            setMember({name: "", email: "", role: ""})
             }}>

            <label htmlFor = "name">Member Name</label>
            <input type="text" name = "name" placeholder= "Enter Name!" value={member.name} onChange={
                changeHandler}
            /> 

           <label htmlFor = "email">Member Email</label>
           <input type="text" name = "email" placeholder= "Enter Email!" value={member.email} onChange={
                changeHandler}/>
           <label htmlFor = "role">Member Role</label>
           <input type="text" name = "role" placeholder= "Enter Role!" value={member.role} onChange={
                changeHandler}/>
           <button type = "submit">Submit!</button>
        </form>
    )};

export default Form;
import React from "react";

const NewForm = props => {
    return(
        <div> 
            { props.members.map(member =>(
            <div className="member" key={member.name}>
                <h2>{member.name}</h2>
                <h3>{member.email}</h3>
                <h3>{member.role}</h3>
         </div>
        ))}
    </div>
    )
}

export default NewForm;
import React from "react";

function Contacts(props){
    
    return(
        <li onClick={()=>props.setCurrentUser(props.index)}>
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src={props.details.image} className="rounded-circle user_img"/>
									<span className={props.details.status}></span>
								</div>
								<div className="user_info">
									<span>{props.details.name}</span>
								</div>
							</div>
						</li>    
    )
}

export default Contacts;
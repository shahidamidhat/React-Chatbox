import React from "react";

function Chatwindow(props){
	console.log()
    return (
        <>
        <div class="card-header msg_head">
							<div class="d-flex bd-highlight">
								<div class="img_cont">
									<img src={props.details[props.index].image} class="rounded-circle user_img"/>
									<span class={props.details[props.index].status}></span>
								</div>
								<div class="user_info">
									<span>{props.details[props.index].name}</span>
									
								</div>
								<div class="video_cam">
									<span><i class="fas fa-video"></i></span>
									<span><i class="fas fa-phone"></i></span>
								</div>
							</div>
							<span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
							<div class="action_menu">
								<ul>
									<li><i class="fas fa-user-circle"></i> View profile</li>
									<li><i class="fas fa-users"></i> Add to close friends</li>
									<li><i class="fas fa-plus"></i> Add to group</li>
									<li><i class="fas fa-ban"></i> Block</li>
								</ul>
							</div>
						</div>
						<div class="card-body msg_card_body">
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img src={props.details[props.index].image} class="rounded-circle user_img_msg"/>
								</div>
								<div class="msg_cotainer">
									{props.chat[props.user].You[0]}
									
								</div>
							</div>
							{props.chat[props.user].Self.map((item)=>{
								return (
									<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									{item}
									
								</div>
								<div class="img_cont_msg">
                                <img src="https://tricksbystg.org/wp-content/uploads/2018/04/81aXdWV3UfL.png" class="rounded-circle user_img_msg"/>
                            	</div>
							</div>

								)
							})}
							
							
						</div>
        </>                    
    )
}

export default Chatwindow;

import './App.css';
import Contacts from './contact';
import Chatwindow from './chatwindow';
import { useState } from 'react';

function App() {
  let contacts=[
    {
      name:"Shubham",
      status:"online_icon",
      image:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"      
    },
    {
      name:"Hemant",
      status:"online_icon offline",
      image:"https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg"
    },
    {
      name:"Abhishek",
      status:"online_icon",
      image:"https://qphs.fs.quoracdn.net/main-qimg-3c837300887ae48bbb83dc77ffe2bb18"
      
    },
    {
      name:"Chinmay",
      status:"online_icon",
      image:"https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"
      
    },
    {
      name:"Jack",
      status:"online_icon offline",
      image:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
      
    }
  ]

  const[curUser,setcurUser]=useState(contacts[0].name);
  const[curind,setCurInd]=useState(0)
  const[newmsg,setText]=useState("")
  const[oldmsg,addNewMsg]=useState({ 
    Shubham:{
      You:["Hi","How's your classes going","Guitar??"],
      Self:["Hello mr","What classes??"]
    },
    Hemant:{
      You:["How's your day"],
      Self:["Fine"]
    },
    Abhishek:{
      You:["How about you??"],
      Self:["I'm good thanks man"]
    },
    Chinmay:{
      You:["Meeting at 9 A.M sharp"],
      Self:["okay"]
    },
    Jack:{
      You:["Hii"],
      Self:["Hello how are you??"]
    }

  }) 
  
  function setCurrentUser(index){
      setcurUser(contacts[index].name)      
      setCurInd(index);     
  }
  function renewchat(){    
    oldmsg[curUser].Self=[...oldmsg[curUser].Self,newmsg]
    addNewMsg({...oldmsg})
    setText("")
  }
  

  return (
    <div className="container-fluid h-100">
			<div className="row justify-content-center h-100">
				<div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="card-header">
						<div className="input-group">
							<input type="text" placeholder="Search..." name="" className="form-control search"/>
							<div className="input-group-prepend">
								<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div className="card-body contacts_body">
						<ui className="contacts">
              {contacts.map((con,index)=>{
                return <Contacts details={con} index={index} setCurrentUser={setCurrentUser}></Contacts>
              })}
					
						</ui>
					</div>
					<div className="card-footer"></div>
				</div></div>
				<div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<Chatwindow details={contacts} user={curUser} index={curind} chat={oldmsg}></Chatwindow>
						<div className="card-footer">
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<input id="text" className="form-control type_msg" placeholder="Type your message..." value={newmsg} onChange={(e)=>{return setText(e.target.value)}}/>
								<div className="input-group-append">
									<span className="input-group-text send_btn" onClick={renewchat}><i className="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default App;

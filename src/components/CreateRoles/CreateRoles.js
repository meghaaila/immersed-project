import React, {Component} from 'react';
import "./CreateRoles.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default class CreateRoles extends Component{

	constructor(props){
		super(props);
		this.state={
			checkFlag: false,
			businessName: "",
			businessSite: "",
			email: "",
			psw: "",
			options: [{ value: 'admin', label: 'Admin' },
        { value: 'team1', label: 'Team 1' },
  					{ value: 'team2', label: 'Team 2' },
  					{ value: 'team3', label: 'Team 3' }]
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleClick = (e) =>{
		const name= e.target.name;
		const val = e.target.value;
		if(val === "")
			this.setState({checkFlag: true})
		else{
			this.setState({[name]:val})
		}
	}
	handleSubmit = () =>{
		Object.keys(this.state).map((val) => {
			if(this.state[val] =="")
        this.setState({checkFlag: true})
		})
		if(!this.state.checkFlag){
      console.log("Submitted")
    }
    this.props.onClickCallBack(this.state)
	}

	render(){
		return(
      <Popup
   trigger={<button className="primary" id="createRoles">Create roles </button>}
   modal
   nested
 >
 {close => (
			<div className="create-roles">
				<div id="text">
					Tell us about yourself
				</div>
				 <form>
				    <div>
				    	<input type="text" placeholder="What is the name of your business?" required name="businessName" onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.businessName ==="" && this.state.checkFlag? "" : "hidden"}> Business name is required</label>

				      	<input type="text" placeholder="Business website"  required onChange={this.handleClick}  name="businessSite" onFocus={this.handleClick}/>
				      	<label className={this.state.businessSite ==="" && this.state.checkFlag? "" : "hidden"}> Business website is required</label>

						    <Dropdown options={this.state.options} onChange={(val)=> {this.setState({ticketing: val.value})}} value={this.state.ticketing} placeholder="Select team" name="options" className="datalist"/>
                	<label className={this.state.ticketing ==="" && this.state.checkFlag? "" : "hidden"}> Team name is required</label>


				      	<input type="text" placeholder="Your email"  name="email" required onChange={this.handleClick} onFocus={this.handleClick} />
				      	<label className={this.state.email ==="" && this.state.checkFlag? "" : "hidden"}> Email is required</label>

				      	<input type="password" placeholder="Password"  name="psw" required onChange={this.handleClick} onFocus={this.handleClick}/>
				      	<label className={this.state.psw ==="" && this.state.checkFlag? "" : "hidden"}> Password is required</label>

				      	<span id="terms"><input type="checkbox"  name="terms"/>I accept to the <a href="#">Terms of Service </a></span>
				    </div>
				  </form>
				   <button className = "primary" onClick={(e)=> {
             this.handleSubmit(e);
             close();
           }}>
				    	Sign up
				    </button>
			</div>
      )}
       </Popup>
		)
	}
}

import React from 'react'

class propsSend extends React.Component{

	constructor(props){
		super(props);
		alert(props);
	}

	render(){
		return(
			<div className = {fancyClass} onClick = {this.props.onClick}>{this.props.children}</div>
		);
	}

}

export default propsSend
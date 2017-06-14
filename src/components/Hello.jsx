
import React from 'react';


class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = {hello:<p>hello <a href = "http://www.react-cn.com"/>react China</p>};	
	}

	render(){
		return(
			<div>
				{this.state.hello}
			</div>
		)
	}

}



export default Hello;
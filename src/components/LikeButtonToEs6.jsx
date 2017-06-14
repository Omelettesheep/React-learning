import React from 'react'

class LikeButtonEs6 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			liked:false
		};
		this.handleClick =  this.handleClick.bind(this);
	}

	handleClick() {
    	this.setState({liked: !this.state.liked});
  	}

	render() {
	    var text = this.state.liked ? 'liked' : 'haven\'t liked';
	    return (
	      <p onClick={this.handleClick}>
	        You {text} this. Click to toggle. {this.props.yy}
	      </p>
	    );
	}
}
export default LikeButtonEs6
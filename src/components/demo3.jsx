import React from 'react'

var CheckLink = React.createClass({
  // propTypes: {
  //   yy: React.PropTypes.bool
  // },

  handleClick: function(event) {
  	console.log(this.props);
  	console.log(this.props.children)
    // this.setState({liked: !this.state.liked});
  },
  render: function() {
    // 这样会把 CheckList 所有的 props 复制到 <a>
    return <p onClick={this.handleClick} {...this.props}>{this.props.name}123123</p>
    // return <a {...this.props}>{'√ '}{this.props.children}</a>;
  }
});

export default CheckLink;
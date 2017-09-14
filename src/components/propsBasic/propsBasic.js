import React, { Component } from 'react';

class PropsBasic extends Component {
	render(){
		return(
			<div>
				<h1 className="title">Props basic</h1>
				<h3>Author: {this.props.author}</h3>
				<p>Comment: {this.props.comment}</p>
				<div className="break"></div>
			</div>
			)
	}
}


export default PropsBasic;
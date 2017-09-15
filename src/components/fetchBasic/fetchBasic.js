import React, { Component } from 'react';

class FetchBasic extends Component {

	constructor(props,context){
		super(props,context);

		this.state={
			title:'Look a giff from an api call',
			image:'https://tiltify.com/assets/default-avatar-5d89b08b793f205b5fe1d94ae58b00c6449b8b234666f2a29545d5a5cb3d981a.jpg'
		}

		this._displayContent = this._displayContent.bind(this);
	}


	_displayContent(response){
		this.setState({image: response.data[0].images.downsized_medium.url})
	}


	_fetchFunction(){
		fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=10')
		.then(function(response) {
			return response.json();
		}).then(

			this._displayContent
		).catch(function(error) {
			console.log("Shits all fucked up in fetchFunction ")
			// shit went wrong
		})

	}//End fetchFunction


	componentWillMount(){
		this._fetchFunction()
	}

	render(){
		return(
			<div>
			<h1 className="title">Fetch basic</h1>

			<h1>{this.state.title}</h1>
			<img src={this.state.image}/>

			<div className="break"></div>
			</div>
		)
	}//END render

}//END FetchBasic component

export default FetchBasic;
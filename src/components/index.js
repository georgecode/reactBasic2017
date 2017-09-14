import React from 'react';

const Hello = () =>{
	const greetings = ["hello","whats up","how are you","hey","yo"]
	return (
		<div>
			<h1>Greetings</h1>
			<ul>
				{greetings.map(greet=><li>{greet}</li>)}
			</ul>
		</div>
		)
}

export default Hello;
import React, { useState } from "react";

const Progress = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}


export default Progress;
// const App = () => (
// 	<>
// 		<h1>React Progress Bar</h1>
// 		<Progress done="70"/>
// 	</>


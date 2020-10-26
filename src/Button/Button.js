import React from 'react';

const Button = ({onClickChange}) => {
	return(
		<div className="mt7 w-40 center">
			<a 
				className="center f1 grow no-underline  ph3 pv2 mb2 dib washed-red" 
				style={{fontFamily:"Mak"}}
				onClick={onClickChange}
			>
			<p className="tc">Learn more about me</p>
			</a>
		</div>
	)
}

export default Button;
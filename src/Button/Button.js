import React from 'react';

const Button = ({onClickChange}) => {
	return(
		<div className="mt5 mb6 w-30 center">
			<a 
				className="center f1 grow no-underline  ph3 pv2 mb2 dib washed-red" 
				style={{fontFamily:"Mak"}}
				onClick={onClickChange}
			>
				<p className="tc pointer">Learn more</p>
			</a>
		</div>
	)
}

export default Button;
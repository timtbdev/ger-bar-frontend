import React from 'react';

function MenuIcon(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;

	return (
		<svg height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}>
		<polygon fill="none" points="38 46 6 43 6 5 38 2 38 46" stroke={fill}/>
		<line fill="none" x1="44" x2="44" y1="6" y2="42"/>
		<line fill="none" stroke={fill} x1="21" x2="21" y1="27" y2="35.25"/>
		<line fill="none" stroke={fill} x1="16" x2="26" y1="35" y2="35.5"/>
		<path d="M21,27a7,7,0,0,0,7-7,25.91,25.91,0,0,0-2-8.5L16,12a21.583,21.583,0,0,0-2,8A7,7,0,0,0,21,27Z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default MenuIcon;
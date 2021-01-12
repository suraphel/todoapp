import React from 'react';

const Rainbow = (WrappedComponent) => {
	const color = [ 'red', 'blue', 'black', 'grey', 'maron', 'green' ];
	const randomColor = color[Math.floor(Math.random() * 5)];
	const className = randomColor + '-text';

	return (props) => {
		return (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};
export default Rainbow;

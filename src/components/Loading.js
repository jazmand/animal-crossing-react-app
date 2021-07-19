import React from 'react';
import loading from '../img/loading.gif';

const Loading = () => {
	return (
		<div>
			<img className='loading-img' src={loading} alt='Loading' />
			<p className='loading-text'>Loading...</p>
		</div>
	);
};

export default Loading;

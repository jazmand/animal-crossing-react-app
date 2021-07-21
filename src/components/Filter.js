import React, {useState} from 'react';
import Header from './Header';

const Filter = ({getFilterName}) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getFilterName(q);
	};
	return (
		<header className='center'>
			<div className='header-container'>
				<Header />
				<div className='search center'>
					<form>
						<input
							type='text'
							className='form-control'
							placeholder='Search villagers by name'
							value={text}
							onChange={(e) => onChange(e.target.value)}
							autoFocus
						/>
					</form>
				</div>
			</div>
		</header>
	);
};

export default Filter;

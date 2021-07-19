import React, {useState} from 'react';

const Filter = ({getFilterName}) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getFilterName(q);
	};
	return (
		<div className='search'>
			<form>
				<input
					type='text'
					className='form-control'
					placeholder='Search villagers'
					value={text}
					onChange={(e) => onChange(e.target.value)}
					autoFocus
				/>
			</form>
		</div>
	);
};

export default Filter;

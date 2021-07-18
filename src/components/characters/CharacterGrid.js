import React from 'react';

const CharacterGrid = ({items, isLoading, filterName}) => {
	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<section className='cards'>
			{items
				.filter((item) =>
					item.name['name-USen']
						.toLowerCase()
						.includes(filterName.toLowerCase())
				)
				.map((item) => (
					<div key={item.id}>
						<h1>{item.name['name-USen']}</h1>
						<img src={item.icon_uri} alt='Villager' />
					</div>
				))}
		</section>
	);
};

export default CharacterGrid;

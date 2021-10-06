import React from 'react';
import VillagerCard from './VillagerCard';
import Loading from './Loading';

const VillagerGrid = ({items, visible, isLoading, filterName}) => {
	return isLoading ? (
		<Loading />
	) : (
		<section className='cards'>
			{items
				.filter((item) =>
					item.name['name-USen']
						.toLowerCase()
						.includes(filterName.toLowerCase())
				)
				.slice(0, visible)
				.map((item) => (
					<VillagerCard key={item.id} item={item} />
				))}
		</section>
	);
};

export default VillagerGrid;

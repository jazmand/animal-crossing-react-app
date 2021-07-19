import React from 'react';
import VillagerCard from './VillagerCard';
import Loading from './Loading';

const VillagerGrid = ({items, isLoading, filterName}) => {
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
				.map((item) => (
					<VillagerCard key={item.id} item={item} />
				))}
		</section>
	);
};

export default VillagerGrid;

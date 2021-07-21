import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Filter from './components/Filter';
import VillagerGrid from './components/VillagerGrid';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filterName, setFilterName] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			setIsLoading(true);
			const result = await axios(`http://acnhapi.com/v1a/villagers/`);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, [filterName]);

	return (
		<div className='container'>
			<Filter getFilterName={(e) => setFilterName(e)} />
			<VillagerGrid
				items={items}
				isLoading={isLoading}
				filterName={filterName}
			/>
		</div>
	);
};

export default App;

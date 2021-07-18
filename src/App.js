import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Filter from './components/characters/Filter';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filterName, setFilterName] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`http://acnhapi.com/v1a/villagers/`);

			console.log(result.data);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, []);

	const handleFilterChange = (event) => {
		console.log(event.target.value);
		setFilterName(event.target.value);
	};

	return (
		<div className='container'>
			<Filter filterName={filterName} handleFilterChange={handleFilterChange} />
			<CharacterGrid
				items={items}
				isLoading={isLoading}
				filterName={filterName}
			/>
		</div>
	);
};

export default App;

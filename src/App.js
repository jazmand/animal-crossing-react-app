import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Filter from './components/Filter';
import VillagerGrid from './components/VillagerGrid';

const App = () => {
	const itemNumber = 8;
	const [items, setItems] = useState([]);
	const [visible, setVisible] = useState(itemNumber);
	const [isLoading, setIsLoading] = useState(true);
	const [filterName, setFilterName] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			setIsLoading(true);
			const result = await axios(`http://acnhapi.com/v1a/villagers/`);
			setItems(result.data);
			setIsLoading(false);
			setVisible(itemNumber);
		};
		fetchItems();
	}, [filterName]);

	let totalItems = items.filter((item) =>
		item.name['name-USen'].toLowerCase().includes(filterName.toLowerCase())
	).length;

	const showMore = () => {
		setVisible((prevValue) => prevValue + itemNumber);
	};

	return (
		<div className='container'>
			<Filter getFilterName={(e) => setFilterName(e)} />
			<VillagerGrid
				items={items}
				isLoading={isLoading}
				filterName={filterName}
				visible={visible}
			/>
			{totalItems > visible ? (
				<div className='center'>
					<button onClick={showMore}>Show More</button>
				</div>
			) : null}
		</div>
	);
};

export default App;

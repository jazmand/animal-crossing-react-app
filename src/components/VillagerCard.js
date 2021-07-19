const VillagerCard = ({item}) => {
	return (
		<div className='card'>
			<div className='card-inner'>
				<div className='card-front'>
					<img
						className='front-image'
						src={item.image_uri}
						alt='Villager Back'
					/>
				</div>

				<div className='card-back'>
					<h1>
						{item.name['name-USen']}{' '}
						<img
							className='back-image'
							src={item.icon_uri}
							alt='Villager Back'
						/>
					</h1>
					<ul>
						<li>
							<strong>Species:</strong> {item.species}
						</li>
						<li>
							<strong>Gender:</strong> {item.gender}
						</li>
						<li>
							<strong>Birthday:</strong> {item['birthday-string']}
						</li>
						<li>
							<strong>Personality:</strong> {item.personality}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VillagerCard;

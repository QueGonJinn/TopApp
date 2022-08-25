import React, {useState} from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {	
	
	const [rating, setRating] = useState<number>(4);
	
	return (		
		<>
			<Htag tag='h1'>767</Htag>
			<Htag tag='h2'>Text2</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Ptag >dfgdfgd</Ptag>
			<Ptag size='l'>dfgdfgd</Ptag>
			<Ptag size='s'>dfgdfgd</Ptag>
			<Tag color='ghost'>Hello</Tag>
			<Tag color='red'>Hello</Tag>
			<Tag color='gray'>Hello</Tag>
			<Tag color='green'>Hello</Tag>
			<Tag color='primary' href='#'>Hello</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</>
	);
}

export default withLayout(Home);
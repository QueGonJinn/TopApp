import React from 'react';
import { Htag, Button, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
	
		<>
			<Htag tag='h1'>Text</Htag>
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
		</>
	);
}

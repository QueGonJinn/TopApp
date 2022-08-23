import React from 'react';
import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
	return (
	
		<>
			<Htag tag='h1'>Text</Htag>
			<Htag tag='h2'>Text2</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
		</>
	);
}

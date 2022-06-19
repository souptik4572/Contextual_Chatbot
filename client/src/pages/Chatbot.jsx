// // API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
import ChatBot from 'react-simple-chatbot';
import Fab from '@mui/material/Fab';
import { Chat, Close } from '@mui/icons-material';
import * as React from 'react';
import { Box } from '@mui/material';
import { steps } from '../helpers/config';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Chatbot = () => {
	const [chatbot, setChatbot] = React.useState(false);
	const location = useLocation();
	let { name } = useSelector((state) => state.user);
	if (!name) name = 'there';


	useEffect(() => {
		setChatbot(false);
	}, [location.pathname]);

	return (
		<Box
			sx={{
				position: 'fixed',
				right: '4%',
				bottom: '8%',
				float: 'right',
			}}
		>
			{chatbot ? (
				<>
					<ChatBot
						steps={steps(name, location.pathname)}
						botDelay={100}
						userDelay={10}
						width='30em'
						headerTitle='Groww ChatBot'
					/>
					<Fab color='primary' onClick={() => setChatbot(false)} sx={{ float: 'right' }}>
						<Close />
					</Fab>
				</>
			) : (
				<Fab
					color='primary'
					variant='extended'
					size='large'
					onClick={() => setChatbot(true)}
				>
					<Chat /> &nbsp; Chat
				</Fab>
			)}
		</Box>
	);
};

export default Chatbot;

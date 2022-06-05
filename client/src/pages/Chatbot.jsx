import ChatBot from 'react-simple-chatbot';
import { steps } from '../config';
import { useSelector } from 'react-redux';

const Chatbot = () => {
	const { name } = useSelector((state) => state.user);
	return (
		<ChatBot
			floating
			steps={steps(name)}
			botDelay={100}
			userDelay={10}
			width='30em'
			headerTitle='Groww ChatBot'
		/>
	);
};

export default Chatbot;

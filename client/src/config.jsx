import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Loading } from 'react-simple-chatbot';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFaqs } from './redux';

export const Answer = (props) => {
	console.log(props);
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState('');
	const { questionId, answer } = props.previousStep.value;

	const myFunc = async () => {
		//API CALL
		// await new Promise((resolve) => setTimeout(resolve, 3000));
		// answer to asked anFaq (chosenQuestionId)
		// NOTE: We can get this in the previous step itself no need to make an extra call

		setResult(answer);
		setLoading(false);
		// if (no more questions) {
		//   props.triggerNextStep({trigger: 3})
		// }
		props.triggerNextStep({
			value: questionId,
		});
	};

	useEffect(() => {
		myFunc();
	}, []);

	return <div>{loading ? <Loading /> : result}</div>;
};

export const Question = (props) => {
	console.log(props);
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState([]);
	const chosenQuestionId = props.previousStep.value;

	const { data: filteredFaqs } = useSelector((state) => state.faq);
	const dispatch = useDispatch();

	const myFunc = async () => {
		//API CALL to get Questions
		await new Promise((resolve) => setTimeout(resolve, 2500));

		// If not the first anFaq
		if (chosenQuestionId) {
			//fetch questions where parentFaqId === chosenQuestionId
			let currentFaqs = await dispatch(getAllFaqs({ parentFaqId: chosenQuestionId }));
			// await new Promise((resolve) => setTimeout(resolve, 2500));
			if (currentFaqs.length === 0) {
				currentFaqs = await dispatch(getAllFaqs({}));
			}
			setResult(currentFaqs);
		} else {
			// fetch questions where parentFaqId === -1 & filter(user, kyc, url/page)
			if (filteredFaqs.length === 0) {
				let currentFaqs = await dispatch(getAllFaqs({}));
				console.log(currentFaqs);
				setResult(currentFaqs);
			}
		}
		setLoading(false);
	};

	const renderQuestions = () => {
		console.log('RESULTS: ', result);
		return (
			<List>
				{result.map((anFaq) => {
					return (
						<ListItem
							alignItems='flex-start'
							button
							dense
							divider
							disableGutters
							disablePadding
							key={anFaq.id}
						>
							<ListItemButton
								onClick={() =>
									props.triggerNextStep({
										trigger: 2,
										value: {
											questionId: anFaq.id,
											answer: anFaq.description,
										},
									})
								}
							>
								<ListItemText primary={anFaq.question} />
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		);
	};

	useEffect(() => {
		myFunc();
	}, []);

	return <div>{loading ? <Loading /> : renderQuestions()}</div>;
};

// API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
export const steps = (name) => [
	{
		id: '0',
		message: `Hello ${name}! How can I help you?`,
		trigger: '1',
	},
	{
		id: '1',
		waitAction: true,
		component: <Question />,
		trigger: '2',
		asMessage: true,
	},
	{
		id: '2',
		waitAction: true,
		component: <Answer />,
		trigger: '1',
	},
	{
		id: '3',
		message: 'Bye!',
		end: true,
	},
];

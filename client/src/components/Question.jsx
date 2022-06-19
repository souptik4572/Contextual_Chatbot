import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Loading } from 'react-simple-chatbot';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFaqs } from '../redux';
import createFilterParams from '../helpers/createFilterParams';



const Question = (props) => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState([]);
	const chosenQuestionId = props.previousStep.value;
	const path = props.path;
	const pathDataArray = path
		.split('/')
		.filter((aParam) => aParam !== 'filter' && aParam !== '')
		.reverse();

	const { reverseMapper } = useSelector((state) => state.productType);
	const { isVerified } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const myFunc = async () => {
		// If not the first Faq
		const filterParams = createFilterParams(pathDataArray, reverseMapper);
		console.log(filterParams);
		if (chosenQuestionId) {
			//fetch questions where parentFaqId === chosenQuestionId
			let currentFaqs = await dispatch(
				getAllFaqs({ ...filterParams, parentFaqId: chosenQuestionId })
			);
			if (currentFaqs.length === 0) {
				currentFaqs = await dispatch(getAllFaqs({ ...filterParams }));
				if (!isVerified) {
					if (isVerified === null) {
						currentFaqs = [
							...currentFaqs,
							{
								id: currentFaqs[currentFaqs.length - 1].id + 1,
								question: 'How to verify my KYC',
								description:
									'Once you successfully register in our portal, you will have to provide your PAN card details and based on that, our experts will verify your KYC',
							},
						];
					} else {
						currentFaqs = [
							...currentFaqs,
							{
								id: currentFaqs[currentFaqs.length - 1].id + 1,
								question: 'When is my KYC going to be verified',
								description:
									'Our admin takes highest priority in verifying the KYC status of all of our users. If any delay is there it is mostly because of high number of KYC applicants. Your KYC will be verified within the next 24 hours for sure.',
							},
						];
					}
				}
			}
			setResult(currentFaqs);
		} else {
			// fetch questions where parentFaqId === -1 & filter(user, kyc, url/page using path)
			if (result.length === 0) {
				let currentFaqs = await dispatch(getAllFaqs({ ...filterParams }));
				if (!isVerified) {
					if (isVerified === null) {
						currentFaqs = [
							...currentFaqs,
							{
								id: currentFaqs[currentFaqs.length - 1].id + 1,
								question: 'How to verify my KYC',
								description:
									'Once you successfully register in our portal, you will have to provide your PAN card details and based on that, our experts will verify your KYC',
							},
						];
					} else {
						currentFaqs = [
							...currentFaqs,
							{
								id: currentFaqs[currentFaqs.length - 1].id + 1,
								question: 'When is my KYC going to be verified',
								description:
									'Our admin takes highest priority in verifying the KYC status of all of our users. If any delay is there it is mostly because of high number of KYC applicants. Your KYC will be verified within the next 24 hours for sure.',
							},
						];
					}
				}
				setResult(currentFaqs);
			}
		}
		setLoading(false);
	};

	const renderQuestions = () => {
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

export default Question;

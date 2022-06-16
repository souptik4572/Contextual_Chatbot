import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Grid,
	InputAdornment,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Stack,
	TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowForward, Search } from '@mui/icons-material';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../redux';
import { useEffect } from 'react';

const orderId = 'axis';

const OrdersPage = ({ path }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let { data: orders } = useSelector((data) => data.order);
	useEffect(() => {
		dispatch(getAllOrders());
	}, []);
	orders = orders.filter((anOrder) => anOrder.product.type.name === path);
	return (
		<React.Fragment>
			<NavBar page='orders' />
			<Container disableGutters maxWidth='lg' component='main' sx={{ pb: 6 }}>
				<Grid
					container
					rowSpacing={4}
					columnSpacing={4}
					justifyContent='center'
					alignItems='start'
				>
					<Grid item>
						<Paper variant='outlined'>
							<Stack direction='row' justifyContent='space-between'>
								<Typography
									variant='subtitle1'
									align='center'
									sx={{
										mt: 2,
									}}
								>
									Filter
								</Typography>
								<Button onClick={null} variant='contained' sx={{ my: 1, mx: 1.5 }}>
									Clear All
								</Button>
							</Stack>
							<TextField
								fullWidth
								hiddenLabel
								variant='filled'
								placeholder='Search...'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<Search />
										</InputAdornment>
									),
								}}
							/>
							<Divider />
							<Stack>
								<FormControlLabel
									control={<Checkbox />}
									label='Investment Orders'
								/>
								<FormControlLabel control={<Checkbox />} label='Redeem Orders' />
							</Stack>

							<Divider />
							<Stack>
								<FormControlLabel
									control={<Checkbox />}
									label='Orders in progress'
								/>
								<FormControlLabel
									control={<Checkbox />}
									label='Successful Orders'
								/>
								<FormControlLabel
									control={<Checkbox />}
									label='Unsuccessful Orders'
								/>
							</Stack>
						</Paper>
					</Grid>
					<Grid item xs={8}>
						{orders.map((anOrder) => (
							<>
								<ListItem
									secondaryAction={
										<Stack direction='row' spacing={4}>
											<Typography
												variant='subtitle2'
												color='text.secondary'
												gutterBottom
											>
												{anOrder.datetime}
											</Typography>
											<ArrowForward />
										</Stack>
									}
									disableGutters
								>
									<ListItemButton onClick={() => navigate(orderId)}>
										<ListItemText
											primary={anOrder.product.name}
											secondary={`Rs. ${anOrder.product.price}`}
										/>
									</ListItemButton>
								</ListItem>
								<Divider />
							</>
						))}
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default OrdersPage;

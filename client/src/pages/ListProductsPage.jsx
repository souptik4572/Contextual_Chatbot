import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
	Avatar,
	Grid,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux';
import { useEffect } from 'react';

const orderId = 'axis';

const ListProductsPage = ({ path }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let { data: products } = useSelector((state) => state.product);
	useEffect(() => {
		if (products.length === 0) dispatch(getAllProducts({}));
	}, []);
	products = products.filter((aProduct) => aProduct.type.name === path);
	return (
		<React.Fragment>
			<NavBar page='items' />
			<Container disableGutters maxWidth='lg' component='main' sx={{ pb: 6 }}>
				<Grid
					container
					rowSpacing={4}
					columnSpacing={4}
					justifyContent='start'
					alignItems='start'
				>
					{products.map((aProduct) => (
						<Grid item xs={8}>
							<ListItem
								alignItems='flex-start'
								divider
								disableGutters
								secondaryAction={
									<Typography
										variant='subtitle2'
										color='text.secondary'
										gutterBottom
									>
										12.56% 1Y returns
									</Typography>
								}
							>
								<ListItemButton onClick={() => navigate(`/${path}/${orderId}`)}>
									<ListItemAvatar>
										<Avatar>Axis </Avatar>
									</ListItemAvatar>
									<ListItemText primary={aProduct.name} secondary='Medium Risk' />
								</ListItemButton>
							</ListItem>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default ListProductsPage;

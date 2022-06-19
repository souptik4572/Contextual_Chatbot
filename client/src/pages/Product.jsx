import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
	Avatar,
	Button,
	CardMedia,
	Grid,
	InputAdornment,
	ListItem,
	ListItemAvatar,
	Paper,
	TextField,
} from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';
import { Share } from '@mui/icons-material';

const Product = () => {
	const { productId } = useParams();
	const {
		state: {
			name,
			price,
			type: { name: productType },
		},
	} = useLocation();
	return (
		<React.Fragment>
			<Container disableGutters maxWidth='lg' component='main' sx={{ pt: 8, pb: 6 }}>
				<Grid
					container
					rowSpacing={4}
					columnSpacing={4}
					justifyContent='center'
					alignItems='center'
				>
					<Grid item xs={8}>
						<ListItem secondaryAction={<Share />} disableGutters>
							<ListItemAvatar>
								<Avatar alt={name} variant='square' src='logo.svg' />
							</ListItemAvatar>
						</ListItem>
						<Typography variant='h4' color='text.secondary' gutterBottom>
							{name}
						</Typography>
						<Typography variant='h4' color='text.primary' gutterBottom display='inline'>
							23.45% &nbsp;
							<Typography variant='subtitle1' color='text.secondary' display='inline'>
								1Y annualized
							</Typography>
						</Typography>
						<CardMedia
							component='img'
							image='/stock.png'
							alt='image'
							// sx={{
							//   height: "60%",
							//   width: "60%",
							// }}
						/>
					</Grid>
					<Grid item>
						<Paper variant='outlined'>
							<TextField
								label='Amount'
								variant='filled'
								placeholder={price}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											{productType === 'us-stocks' ? '$' : '₹'}
										</InputAdornment>
									),
								}}
							/>
							<Button onClick={null} variant='contained' sx={{ my: 1, mx: 1.5 }}>
								Buy
							</Button>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Product;

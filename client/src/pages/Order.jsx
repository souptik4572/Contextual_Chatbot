import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Card, CardActions, CardContent, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

const Order = () => {
	const {
		state: {
			id: orderId,
			datetime: orderDateTime,
			product: {
				name,
				price,
				type: { name: productType },
			},
			status: { name: orderStatus },
			type: { name: orderType },
		},
	} = useLocation();
	return (
		<React.Fragment>
			<Container maxWidth='lg' component='main' sx={{ pt: 8, pb: 6 }}>
				<Typography
					variant='body1'
					sx={{
						mt: 2,
					}}
				>
					<Link to={-1}>Back</Link>
				</Typography>
				<Card variant='outlined'>
					<CardContent>
						<Typography variant='h5' component='div'>
							{name}
						</Typography>
						<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
							{productType === 'us-stocks' ? '$' : 'Rs'}. {price}
						</Typography>
						<Divider />
						<Typography variant='body2'>
							Order Id: {orderId}
							<br />
							placed on
						</Typography>
						<Typography sx={{ mb: 1.5 }} color='text.secondary'>
							{moment(orderDateTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}
						</Typography>
						<Typography variant='body2'>
							Order Status: {orderStatus}
							<br />
							Order Type: {orderType}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Repeat Order</Button>
					</CardActions>
				</Card>
			</Container>
		</React.Fragment>
	);
};

export default Order;

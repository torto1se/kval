import { Link } from 'react-router-dom'
import Cart from './Cart'

function OrderPage() {
	const products = [
		{ name: 'Молоко', price: 100, image: './moloko.png' },
		{ name: 'Печенье', price: 120, image: './cookie.png' },
		{ name: 'Колбаса', price: 200, image: './kolbasa.png' },
	]

	const token = localStorage.getItem('token')

	return (
		<>
			{token ? (
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div>
						<Cart products={products} />
					</div>
				</div>
			) : (
				<p>
					<Link to={'/login'}>Авторизуйтесь</Link>
				</p>
			)}
		</>
	)
}

export default OrderPage

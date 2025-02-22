import { useState } from 'react'

function Cart({ products }) {
	const [kolvo, setKolvo] = useState(products.map(() => 0))

	const Increment = i => {
		const updKolvo = [...kolvo]
		updKolvo[i] += 1
		setKolvo(updKolvo)
	}

	const Decrement = i => {
		const updKolvo = [...kolvo]
		if (updKolvo[i] > 0) {
			updKolvo[i] -= 1
			setKolvo(updKolvo)
		}
	}

	const totalPrice = products.reduce((total, product, i) => {
		return total + product.price * kolvo[i]
	}, 0)

	return (
		<div
			style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '15px',
				}}
			>
				{products.map((product, i) => (
					<div
						style={{
							border: '1px solid black',
							borderRadius: '10px',
							width: '200px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '10px',
						}}
						key={i}
					>
						<img
							src={product.image}
							alt={product.name}
							style={{ height: '100px', width: '170px' }}
						/>
						<h3>{product.name}</h3>
						<p>Цена: {product.price} руб.</p>
						<div style={{ gap: '5px', display: 'flex' }}>
							<button
								onClick={() => Decrement(i)}
								style={{
									border: 'none',
									padding: '5px',
									borderRadius: '5px',
									backgroundColor: '#acacac',
									cursor: 'pointer',
								}}
							>
								-
							</button>
							<span>{kolvo[i]}</span>
							<button
								onClick={() => Increment(i)}
								style={{
									border: 'none',
									padding: '5px',
									borderRadius: '5px',
									backgroundColor: '#acacac',
									cursor: 'pointer',
								}}
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>
			<h3>Итого: {totalPrice} руб.</h3>
		</div>
	)
}

export default Cart

function Card({ name, amount, price, image }) {
	return (
		<div>
			<div>
				<img src={image} alt={name} />
				<h3>{name}</h3>
				<p>{price}</p>
			</div>
		</div>
	)
}

export default Card

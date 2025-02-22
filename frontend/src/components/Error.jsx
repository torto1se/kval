function Error({ message }) {
	if (!message) {
		return null
	}
	return (
		<div
			style={{
				zIndex: 1000,
				backgroundColor: 'red',
				padding: '10px',
				position: 'fixed',
				top: '10px',
				right: '20px',
				color: 'white',
				borderRadius: '10px',
			}}
		>
			{message}
		</div>
	)
}

export default Error

import { Link, useNavigate } from 'react-router-dom'

function Header() {
	const login = localStorage.getItem('login')
	const token = localStorage.getItem('token')

	const navigate = useNavigate()

	const Logout = () => {
		localStorage.removeItem('login')
		localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<header
			style={{
				height: '70px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '20px',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '30%',
					borderBottom: '1px solid black',
					padding: '5px',
				}}
			>
				<div>Магазин</div>
				<div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
					<Link
						to={'/order'}
						style={{
							textDecoration: 'none',
							color: 'black',
							marginRight: '20px',
						}}
					>
						Продукты
					</Link>
					{token && (
						<div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
							<b>{login}</b>
							<div onClick={Logout} style={{ cursor: 'pointer' }}>
								Выйти
							</div>
						</div>
					)}
					{!token && (
						<div>
							<Link
								to={'/login'}
								style={{
									textDecoration: 'none',
									color: 'black',
								}}
							>
								Вход
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header

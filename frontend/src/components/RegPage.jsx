import { useState } from 'react'
import Error from './Error'
import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'

function RegPage() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const handleReg = async () => {
		if (!login || !password || !email) {
			setError('Все поля должны быть заполнены!')
			setTimeout(() => setError(''), 3000)
			return
		}

		const response = await fetch('http://localhost:3001/registration', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ login, email, password }),
		})

		const data = await response.json()
		if (response.ok) {
			console.log('Регистрация')
			navigate('/login')
		} else {
			setError(data.error)
		}
	}

	return (
		<div className={styles.form}>
			<Error message={error} />
			<div className={styles.form__inner}>
				<h2>Регитсрация</h2>
				<input
					type='text'
					placeholder='Логин'
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button onClick={handleReg}>Зарегестрироваться</button>
				<p>
					Уже есть аккаунт?{' '}
					<Link to={'/login'} className={styles.link}>
						Войти
					</Link>
				</p>
			</div>
		</div>
	)
}

export default RegPage

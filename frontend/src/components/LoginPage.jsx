import { useState } from 'react'
import Error from './Error'
import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const handleLogin = async () => {
		if (!login || !password) {
			setError('Все поля должны быть заполнены!')
			setTimeout(() => setError(''), 3000)
			return
		}

		const response = await fetch('http://localhost:3001/login', {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ login, password }),
		})

		const data = await response.json()
		if (response.ok) {
			localStorage.setItem('token', data.token)
			localStorage.setItem('login', data.login)
			setLogin('')
			setPassword('')
			console.log('Вход', data.token, data.login)
			navigate('/order')
		} else {
			setError(data.message)
			setTimeout(() => setError(''), 3000)
		}
	}

	return (
		<div className={styles.form}>
			<Error message={error} />
			<div className={styles.form__inner}>
				<h2>Авторизация</h2>
				<input
					type='text'
					placeholder='Логин'
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Войти</button>
				<p>
					Нет аккаунта?{' '}
					<Link to={'/registration'} className={styles.link}>
						Зарегистрироваться
					</Link>
				</p>
			</div>
		</div>
	)
}

export default LoginPage

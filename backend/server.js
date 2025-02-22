const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt')

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

const db = new sqlite3.Database('./database.db', err => {
	if (err) {
		console.error(err.message)
	}
	console.log('БД подключена!')
})

app.post('/registration', (req, res) => {
	const { login, email, password } = req.body

	bcrypt.hash(password, 10, (err, hash) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}

		db.run(
			`insert into users (login, password, email) values (?, ?, ?)`,
			[login, hash, email],
			function (err) {
				if (err) {
					return res.status.json({ message: err.message })
				}
				res.status(201).json({ message: 'Пользователь зарегистрирован!' })
			}
		)
	})
})

app.post('/login', (req, res) => {
	const { login, password } = req.body

	db.get(`select * from users where login = ?`, [login], (err, user) => {
		if (err || !user) {
			return res.status.json({ message: 'Неверный логин' })
		}

		bcrypt.compare(password, user.password, (err, match) => {
			if (!match) {
				return res.status.json({ message: 'Неверный пароль' })
			}

			const token = jwt.sign({ login: user.login }, 'secret', {
				expiresIn: '1h',
			})
			res.json({ token, login })
		})
	})
})

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`)
})

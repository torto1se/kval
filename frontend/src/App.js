import { Route, Routes } from 'react-router-dom'
import RegPage from './components/RegPage'
import LoginPage from './components/LoginPage'
import Footer from './components/Footer'
import Header from './components/Header'
import OrderPage from './components/OrderPage'

function App() {
	return (
		<div
			className='App'
			style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
		>
			<Header />
			<div
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Routes>
					<Route path='/registration' element={<RegPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/order' element={<OrderPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App

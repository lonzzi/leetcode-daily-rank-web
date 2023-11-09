import React from 'react'
import { Suspense } from 'react'
import Loading from './components/loading'

const Header = React.lazy(() => import('./components/Header'))
const Home = React.lazy(() => import('./pages/Home'))

function App() {
	return (
		<div className="flex flex-col justify-center">
			<Suspense fallback={<Loading />}>
				<Header />
				<Home />
			</Suspense>
		</div>
	)
}

export default App

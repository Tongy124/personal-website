import '../styles/globals.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <Nav/>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
}

export default MyApp

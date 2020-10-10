import '../styles/global.css'
import { Provider } from 'react-redux'
import store from '../store'

// https://github.com/FortAwesome/react-fontawesome#nextjs
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false
// ---

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

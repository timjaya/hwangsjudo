import '../styles/globals.css'
import AlertMUITemplate from "react-alert-template-mui";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

const options = {
  position: positions.MIDDLE,
  transition: transitions.FADE
};

function MyApp({ Component, pageProps }) {

  return (
    <>
    <AlertProvider template={AlertMUITemplate} {...options}>
      <Component {...pageProps} />
    </AlertProvider>
    
    </>
  )
}

export default MyApp

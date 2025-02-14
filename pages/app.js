import '../styles/globals.css'; // Ensure the correct path
import '../styles/your-other-global-styles.css'; // If you have multiple global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import { Provider } from 'react-redux';
import store from '../store';
// import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen">
        {/* <Sidebar /> */}
        <div className="flex-grow p-6 bg-gray-100">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;

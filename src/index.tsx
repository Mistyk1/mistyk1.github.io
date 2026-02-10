import './css/index.css';
import ReactDOM from 'react-dom/client';
import Navigator from './Navigator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Navigator/>
  </>
);
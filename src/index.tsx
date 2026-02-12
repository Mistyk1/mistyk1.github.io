import './css/index.css';
import ReactDOM from 'react-dom/client';
import Navigator from './Navigator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <div className="navbar">
      <a className="nav-title-link" href="../index.html">
        <span className="nav-title">Maxime Blot</span>
        <a className="nav-title-link" href="../formation.html"><span className="nav-subtitle">Formation</span></a>
        <a className="nav-title-link" href="../competences.html"><span className="nav-subtitle">Compétences</span></a>
        <a className="nav-title-link" href="../experiences.html"><span className="nav-subtitle">Expériences</span></a>
        <a className="nav-title-link" href="../projets.html"><span className="nav-subtitle">Projets</span></a>
        <a className="button" href="mailto:blotmaxime9@gmail.com">
          <span className="button-text">Me Contacter</span>
        </a>
      </a>
    </div>
    
    <>
      <Navigator/>
    </>
  </div>
);
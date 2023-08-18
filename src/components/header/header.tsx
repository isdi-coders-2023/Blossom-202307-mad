import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';

export function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1 className={`${styles.mainheader} ${styles.hidden}`}>Los Simpson</h1>

        <img
          className={styles['logo']}
          src="./public/Simpson_logo.png"
          alt="EL logo de Los Simpson"
        />

        <div className={styles['buttcontainer']}>
          <button
            onClick={() => navigate('/home')}
            className={styles['favbutton']}
          >
            HOME
          </button>
          <button
            onClick={() => navigate('/form')}
            className={styles['crearbutton']}
          >
            CREAR PERSONAJE
          </button>
        </div>
      </header>
    </>
  );
}

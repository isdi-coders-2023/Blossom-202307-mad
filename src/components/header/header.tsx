import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export function Header() {
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
          <Link to={'/home'} className={styles['favbutton']}>
            <h2>HOME</h2>
          </Link>
          <Link to={'/form'} className={styles['crearbutton']}>
            <h2>CREAR PERSONAJE</h2>
          </Link>
        </div>
      </header>
    </>
  );
}

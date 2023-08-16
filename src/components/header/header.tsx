import styles from './header.module.scss';

export function Header() {
  return (
    <>
      <header>
        <h1 className={`${styles.mainheader} ${styles.hidden}`}>Los Simpson</h1>
        <h2>
          <img
            className={styles['logo']}
            src="./public/Simpson_logo.png"
            alt="EL logo de Los Simpson"
          />
        </h2>
        <div className={styles['buttcontainer']}>
          <button className={styles['favbutton']}>FAVORITOS</button>
          <button className={styles['crearbutton']}>CREAR PERSONAJE</button>
        </div>
      </header>
    </>
  );
}

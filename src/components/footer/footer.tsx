import styles from './footer.module.scss';
export function Footer() {
  return (
    <footer className={styles['mainFooter']}>
      <address className={styles['address']}>
        Creadores: Jesus Alvarez, Sergio González, Alejandro de Oyarbide y
        Jefferson Asto.
      </address>
      <div className={styles['laneFooter']}></div>
      <img
        className={styles['imgFooter']}
        src="Simpson_logo.png"
        alt="logo simpsons footer"
      />
    </footer>
  );
}

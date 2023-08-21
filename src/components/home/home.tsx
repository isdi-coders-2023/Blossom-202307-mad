import { Link } from 'react-router-dom';
import styles from './home.module.scss';

export function Home() {
  return (
    <section className={styles['home']}>
      <h2 role="heading" className={styles['mainTitle']}>
        Descubre los personajes de tu serie favorita
      </h2>
      <img
        className={styles['mainImage']}
        src="./simpsonscharacters.jpeg"
        alt="Una imagen con personajes de Los Simpson"
      />

      <Link
        role="button"
        id="buttonSimpson"
        className={styles['buttonSimpson']}
        to={'/simpsons'}
      >
        <h3>Simpsonlandia</h3>
      </Link>
    </section>
  );
}

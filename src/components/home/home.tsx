import { useNavigate } from 'react-router-dom';
import styles from './home.module.scss';

export function Home() {
  const navigate = useNavigate();

  return (
    <section className={styles['home']}>
      <h2 className={styles['mainTitle']}>
        Descubre los personajes de tu serie favorita
      </h2>

      <img
        className={styles['mainImage']}
        src="./simpsonscharacters.jpeg"
        alt="Una imagen con personajes de Los Simpson"
      />

      <button
        id="buttonSimpson"
        className={styles['buttonSimpson']}
        onClick={() => navigate('/form')}
      >
        Simpsonlandia
      </button>
    </section>
  );
}

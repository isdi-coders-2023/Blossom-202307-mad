import styles from './pag-error.module.scss';

export default function PagError() {
  return (
    <main className={styles['mainError']}>
      <p className={styles['pError']}>
        <span>¡HORROR!</span> <span>¡EL ERROR 404!</span>
      </p>
      <img
        className={styles['imgError']}
        src="loop_error.gif"
        alt="gif de error 404"
      />
      <p className={styles['pNarices']}>
        <span>¿QUÉ NARICES</span> <span>ESTABAS BUSCANDO?</span>
      </p>
      <button className={styles['buttonAtras']}>ATRÁS</button>
    </main>
  );
}

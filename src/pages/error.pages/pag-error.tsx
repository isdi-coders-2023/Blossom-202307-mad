import styles from './pag-error.module.scss';

export default function PagError() {
  return (
    <main className={styles['mainError']}>
      <h2 className={styles['h2Error']}>
        <span>¡ HORROR !</span> <span>¡ EL 404 ERROR !</span>
      </h2>
      <img
        className={styles['imgError']}
        src="loop_error.gif"
        alt="gif de error 404"
      />
      <p className={styles['pNarices']}>
        <span>¿ QUÉ NARICES</span> <span>ESTABAS BUSCANDO ?</span>
      </p>
      <button className={styles['buttonAtras']}>ATRÁS</button>
    </main>
  );
}

import styles from './form.module.scss';

export function Form() {
  return (
    <form action="" className={styles['form']}>
      <h2 className={styles['formTitle']}>¡Crea tu propio personaje!</h2>
      <div className={styles['formContainer']}>
        <input
          type="text"
          placeholder="Escribe su nombre"
          name="name"
          className={styles['textForm']}
        />
        <input
          type="text"
          placeholder="Ahora sus apellidos"
          name="surname"
          className={styles['textForm']}
        />
        <input
          type="text"
          placeholder="¿Cuál es su trabajo?"
          name="job"
          className={styles['textForm']}
        />
        <div className={styles['fieldsed']}>
          <span className={styles['legend']}>¿Cuál es su estado?</span>

          <input
            type="radio"
            id="alive"
            name="state"
            value="alive"
            className={styles['input']}
          />
          <label htmlFor="alive">Vivo</label>

          <input
            type="radio"
            id="unknown"
            name="state"
            value="unknown"
            className={styles['input']}
          />
          <label htmlFor="unknown">Desconocido</label>

          <input
            type="radio"
            id="death"
            name="state"
            value="death"
            className={styles['input']}
          />
          <label htmlFor="death">Fallecido</label>

          <input
            type="radio"
            id="fictitious"
            name="state"
            value="fictitious"
            className={styles['input']}
          />
          <label htmlFor="fictitious">Ficticio</label>
        </div>

        <textarea
          placeholder="Añade una descripción"
          name="description"
          rows={4}
          cols={40}
          className={styles['textarea']}
        />
        <input
          type="text"
          placeholder="Pega la url de la imagen"
          name="job"
          className={styles['textForm']}
        />
      </div>
    </form>
  );
}

import { SyntheticEvent } from 'react';
import { CharacterNoId } from '../../model/character';
import styles from './form.module.scss';

export function Form() {
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;

    const newCharacter: CharacterNoId = {
      name: (formElement.elements.namedItem('name') as HTMLFormElement).value,
      gender: (formElement.elements.namedItem('gender') as HTMLFormElement)
        .value,
      job: (formElement.elements.namedItem('job') as HTMLFormElement).value,
      state: (formElement.elements.namedItem('state') as HTMLFormElement).value,
      history: (formElement.elements.namedItem('history') as HTMLFormElement)
        .value,
      image: (formElement.elements.namedItem('image') as HTMLFormElement).value,
      updatedAt: (
        formElement.elements.namedItem('updatedAt') as HTMLFormElement
      ).value,
    };
    console.log(newCharacter);
  };
  return (
    <form
      role="form"
      action=""
      onSubmit={handleSubmit}
      className={styles['form']}
    >
      <h2 className={styles['formTitle']}>¡Crea tu propio personaje!</h2>
      <div className={styles['formContainer']}>
        <input
          type="text"
          placeholder="Escribe su nombre"
          name="name"
          className={styles['textForm']}
          required
        />

        <div className={styles['genderBox']}>
          <legend className={styles['genderType']}>¿Género?</legend>
          <div className={styles['input']}>
            <input
              type="radio"
              name="gender"
              id="masc"
              className={styles['radioInput']}
            />
            <label htmlFor="masc">Masculino</label>
          </div>
          <div className={styles['input']}>
            <input
              type="radio"
              name="gender"
              id="fem"
              className={styles['radioInput']}
            />
            <label htmlFor="fem">Femenino</label>
          </div>
        </div>
        <input
          type="text"
          placeholder="¿Cuál es su trabajo?"
          name="job"
          className={styles['textForm']}
        />
        <div className={styles['fieldsed']}>
          <span className={styles['legend']}>¿Cómo se encuentra?</span>
          <div className={styles['select-container']}>
            <select name="state" id="state-select">
              <option value="alive">Vivo</option>
              <option value="dead">Fallecido</option>
              <option value="unknown">Desconocido</option>
              <option value="fition">Ficticio</option>
            </select>
          </div>
        </div>

        <textarea
          placeholder="Añade aquí su historia"
          name="history"
          rows={4}
          cols={40}
        />
        <input
          type="text"
          placeholder="Pega la url de la imagen"
          name="image"
          className={styles['textForm']}
        />
        <div className={styles['dateBox']}>
          <label htmlFor="updatedAt" className={styles['labelDate']}>
            ¿Cuándo apareció por última vez?
          </label>

          <input
            role="date"
            type="date"
            id="updatedAt"
            name="updatedAt"
            min="1989-12-17"
            max="2023-08-19"
            className={styles['inputDate']}
          />
        </div>
      </div>
      <button className={styles['buttonForm']} type="submit">
        Añadir
      </button>
    </form>
  );
}

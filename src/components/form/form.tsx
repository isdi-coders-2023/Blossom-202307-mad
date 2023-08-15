import { SyntheticEvent } from 'react';
import { CharacterNoId } from '../../model/character';
import styles from './form.module.scss';

export function Form() {
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;

    const newCharacter: CharacterNoId = {
      name: (formElement.elements.item(0) as HTMLFormElement).value,
      surname: formElement.elements.namedItem('surename').value,
      job: formElement.elements.namedItem('job').value,
      state: formElement.elements.namedItem('state').value,
      description: formElement.elements.namedItem('description').value,
      url: formElement.elements.namedItem('url').value,
    };
    return newCharacter;
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles['form']}>
      <h2 className={styles['formTitle']}>¡Crea tu propio personaje!</h2>
      <div className={styles['formContainer']}>
        <input
          type="text"
          placeholder="Escribe su nombre"
          name="name"
          className={styles['textForm']}
          required
        />
        <input
          type="text"
          placeholder="Ahora sus apellidos"
          name="surname"
          className={styles['textForm']}
          required
        />
        <input
          type="text"
          placeholder="¿Cuál es su trabajo?"
          name="job"
          className={styles['textForm']}
        />
        <div className={styles['fieldsed']}>
          <span className={styles['legend']}>¿Cuál es su estado?</span>
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
          placeholder="Añade una descripción"
          name="description"
          rows={4}
          cols={40}
        />
        <input
          type="text"
          placeholder="Pega la url de la imagen"
          name="url"
          className={styles['textForm']}
        />
      </div>
      <button className={styles['buttonForm']} type="submit">
        Añadir
      </button>
    </form>
  );
}

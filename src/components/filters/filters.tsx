import styles from './filters.module.scss';

export function Filters() {
  return (
    <div className={styles['filters']}>
      <label className={styles['filterPhrase']}>
        Puedes usar uno de estos filtros:
      </label>
      <div className={styles['box']}>
        <select className={styles['select']} name="gender" id="gender-select">
          <option value="">--Filtra por género--</option>
          <option value="men">Masculino</option>
          <option value="women">Femenino</option>
        </select>
      </div>
      <div>
        <select className={styles['select']} name="state" id="state-select">
          <option value="">--Filtra por estado--</option>
          <option value="alive">Vivo</option>
          <option value="dead">Fallecido</option>
          <option value="unknown">Desconocido</option>
          <option value="fictitious">Ficticio</option>
        </select>
      </div>
    </div>
  );
}

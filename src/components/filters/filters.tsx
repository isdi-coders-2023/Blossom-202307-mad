import styles from './filters.module.scss';

export function Filters() {
  return (
    <div className={styles['filterButtons']}>
      <p className={styles['filterPhrase']}>
        Puedes usar uno de estos filtros:
      </p>
      <div>
        <button id="filterGender" className={styles['buttonFilter']}>
          Género
        </button>

        <button id="filterState" className={styles['buttonFilter']}>
          Estado
        </button>
      </div>
    </div>
  );
}

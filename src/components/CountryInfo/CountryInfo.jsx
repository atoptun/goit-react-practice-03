import styles from './CountryInfo.module.css';

const CountryInfo = ({
  countryName,
  region,
  // links,
  flag,
  capitals,
  population,
  languages,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.flag}>
          <img
            className={styles.img}
            src={flag.svg || flag.png || 'img.png'}
            alt={countryName}
          />
        </div>
        <div className={styles.box}>
          <h1 className={styles.title}>
            {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
          </h1>

          <h2 className={styles.capital}>
            Capital:{' '}
            <span className={styles.accent}>{capitals.join(', ')}</span>
          </h2>

          <p className={styles.details}>
            Region: <span className={styles.accent}>{region}</span>
          </p>

          <p className={styles.details}>
            Population: <span className={styles.accent}>{population}</span>
          </p>

          <p className={styles.details}>
            Languages:{' '}
            <span className={styles.accent}>{languages.join(', ')}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;

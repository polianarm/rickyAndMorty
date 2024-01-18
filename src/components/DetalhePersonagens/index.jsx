import styles from "./DetalhePersonagens.module.css";

export default function DetalhePersonagens({ personagens, locations }) {
  return (
    <section className={styles.gridContainer}>
      <div className={styles.grid1ImagemLeft}>
        <img src={personagens.image} alt="" />
      </div>

      <div className={styles.grid2Info}>
        <h1>{personagens?.name}</h1>
        <div className={styles.gridQuestions}>
          <h2>Character Biography</h2>
          {personagens.status && (
            <p>
              Status : <span>{personagens.status}</span>
            </p>
          )}
          {personagens.species && (
            <p>
              Specie : <span>{personagens.species}</span>
            </p>
          )}
          {personagens.gender && (
            <p>
              Gender : <span>{personagens.gender}</span>
            </p>
          )}
          {personagens.type && (
            <p>
              What is this ? <span>{personagens.type}</span>
            </p>
          )}

          {personagens.location?.name && (
            <p>
              Origin : <span>{personagens.location.name}</span>
            </p>
          )}
          {locations.type && (
            <p>
              Type : <span>{locations.type}</span>
            </p>
          )}
          {locations.dimension && (
            <p>
              Dimension : <span>{locations.dimension}</span>
            </p>
          )}
        </div>
      </div>
      <div className={styles.grid1ImagemRight}>
        <img src={personagens.image} alt="" />
      </div>
    </section>
  );
}

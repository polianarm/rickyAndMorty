import styles from "./DetalhePersonagens.module.css";

export default function DetalhePersonagens({ personagens, locations }) {
  return (
    <section className={styles.gridContainer}>
    <div className={styles.grid1ImagemLeft}>
      <img src={personagens.image} alt="" />
    </div>

    <div className={styles.grid2Info}>
      <h1>{personagens?.name}</h1>
      {personagens.status && <h2>Status: {personagens.status}</h2>}
      {personagens.species && <h2>Espécie: {personagens.species}</h2>}
      {personagens.type && <h2>Tipo: {personagens.type}</h2>}
      {personagens.gender && <h2>Gênero: {personagens.gender}</h2>}

      {personagens.location?.name && <h2>Local onde habita: {personagens.location.name}</h2>}

      {personagens.origin?.name && <h2>Local de origem: {personagens.origin.name}</h2>}
      {locations.dimension && <h2>Dimensão: {locations.dimension}</h2>}
      {locations.type && <h2>Tipo: {locations.type}</h2>}
      {locations.name && <h2>Nome: {locations.name}</h2>}
    </div>
    <div className={styles.grid1ImagemRight}>
      <img src={personagens.image} alt="" />
    </div>
  </section>
  );
}

import styles from "./DetalhePersonagens.module.css";

export default function DetalhePersonagens({ personagens, locations }) {
  return (
    <section className={styles.gridContainer}>
      <div className={styles.grid1Imagem}>
        <img src={personagens.image} alt="" />
      </div>

      <div className={styles.grid2Info}>
        <h1>{personagens?.name}</h1>
        <h2>Status: {personagens.status}</h2>
        <h2>Espécie: {personagens.species}</h2>
        <h2>Tipo: {personagens.type}</h2>
        <h2>Gênero: {personagens.gender}</h2>

        <h2>Local onde habita:{personagens.location?.name}</h2>

        <h2>Local de origem:{personagens.origin?.name}</h2>
        <h2>Dimensão:{locations.dimension}</h2>
        <h2>Tipo:{locations.type}</h2>
        <h2>Nome:{locations.name}</h2>
      </div>
    </section>
  );
}

import styles from "./DetalhePersonagens.module.css";

export default function DetalhePersonagens({ personagens, locations }) {
  return (
    <section className={styles.gridContainer}>
      <div className={styles.grid1Imagem}>
        <img src={personagens.image} alt="" />
      </div>

      <div className={styles.grid2Info}>
        <h1>Nome: {personagens?.name}</h1>
        <h1>Status: {personagens.status}</h1>
        <h1>Espécie: {personagens.species}</h1>
        <h1>Tipo: {personagens.type}</h1>
        <h1>Gênero: {personagens.gender}</h1>

        <h1>Local onde habita:{personagens.location?.name}</h1>

        <h1>Local de origem:{personagens.origin?.name}</h1>
        <h1>Dimensão:{locations.dimension}</h1>
        <h1>Tipo:{locations.type}</h1>
        <h1>Nome:{locations.name}</h1>
      </div>
    </section>
  );
}

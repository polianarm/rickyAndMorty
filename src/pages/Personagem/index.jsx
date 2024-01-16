import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export default function Personagem() {
  const [personagens, setPersonagens] = useState([]);

  const getId = useParams()

  const getPersonagens = async () => {
    const res = await api.get(`/character/${getId.id}`)
    console.log(res.data.results);
    setPersonagens(res.data); // definir
  };

  useEffect(() => {
    getPersonagens(); // pegar e rodar a função
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>{personagens?.name}</h1>
        <h1>{personagens.location?.name}</h1>

      </div>
      {/* <Cards personagens={personagens} /> */}
      <Footer />
    </>
  );
}

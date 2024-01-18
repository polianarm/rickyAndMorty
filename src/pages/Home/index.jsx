import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Footer from "../../components/Footer";

export default function Home() {
  const [personagens, setPersonagens] = useState([]);

  const getPersonagens = async () => {
    const res = await api.get("/character");
    console.log(res.data.results);
    setPersonagens(res.data.results); // definir
  };

  useEffect(() => {
    getPersonagens(); // pegar e rodar a função
  }, []);

  return (
    <>
      <Header />
      <Cards personagens={personagens} />
      <Footer />
    </>
  );
}

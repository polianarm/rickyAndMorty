import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import DetalhePersonagens from "../../components/DetalhePersonagens";

export default function Personagem() {
  const [personagens, setPersonagens] = useState([]);
  const [locations, setLocations] = useState([]);

  const getId = useParams()

  const getPersonagens = async () => {
    const res = await api.get(`/character/${getId.id}`)
    console.log(res.data.results);
    setPersonagens(res.data); // definir
  };

  useEffect(() => {
    getPersonagens(); // pegar e rodar a função
  }, []);


  const getLocations = async () => {
    const res = await api.get(`/location/${getId.id}`)
    console.log(res.data.results);
    setLocations(res.data); // definir
  };

  useEffect(() => {
    getLocations(); // pegar e rodar a função
  }, []);


  return (
    <>
      <Header />
      <DetalhePersonagens personagens={personagens} locations={locations}/>
      <Footer />
    </>
  );
}

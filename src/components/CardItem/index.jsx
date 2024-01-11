import styles from "./CardItem.module.css";

export default function CardItem( { name, image, status, species, type}) {
  return (
    <>
      <div>
        <h1> {name} </h1>
        <img src={image} alt="" />
        <p> {status} </p>
        <p> {species}</p>
        <p> {type}</p>
      </div>
    </>
  );
}

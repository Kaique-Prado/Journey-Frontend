import Header from "../../components/layout/Header";
import style from "./Informacao.module.css";

function Informacao() {
  return (
    <>
      <Header />
      <div className={style.body}>
          <div className={style.container_informacao}>
            <h2>Quem somos</h2>
            <p>
              O Journey é um Organizador de viagens em grupo, você pode marcar
              uma viagem e chamar amigos para participar dela, compartilhar
              todos os detalhes da viagem.{" "}
            </p>
          </div>
      </div>
    </>
  );
}

export default Informacao;

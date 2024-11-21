import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../img/LogoMontanhaNome-Photoroom.png";
import user from "../../img/MaleUser.png"
import checkConfirmed from "../../img/CheckMark.png"
import { CircleCheck, Link2, CircleDashed, UserCog2 } from "lucide-react";
import Style from "./Home.module.css"
import {
  MapPin,
  Calendar,
  ArrowRight,
  Plus,
  Tag,
  X,
  Clock,
} from "lucide-react";
import { api } from "../../lib/axios";
import { useEffect } from "react";
import { format } from "date-fns";



interface Trip {
  id: bigint
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

function Home() {
  const {tripId} = useParams()
  const [isModalAtividade, setModalAtividade] = useState(false);
  const [isModalLink, setModalLink] = useState(false);
  const [isModalUser, setModalUser] = useState(false);
  const [trip, setTrip] = useState<Trip | undefined>()
  
  useEffect(() => {
    
    api.get(`trips/${tripId}`).then(response => setTrip(response.data))
  }, [tripId])

  const displayDate = trip ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL")) : null

  function AbrirModalCadastrarAtividade() {
    setModalAtividade(true);
  }
  function FecharModalCadastrarAtividade() {
    setModalAtividade(false);
  }

  function AbrirModalCadastrarLink() {
    setModalLink(true);
  }
  function FecharModalCadastrarLink() {
    setModalLink(false);
  }

  function AbrirModalUser() {
    setModalUser(true);
  }
  function FecharModalUser() {
    setModalUser(false);
  }
  return (
    <>
      <header className={Style.cabecalho}>
        <img src={logo} className={Style.logo} alt="logo" />
        
        <div className={Style.viagem}>
          <MapPin className={Style.map} />
          <p className={Style.local}>{trip?.destination}</p>
          
          <div className={Style.separacao}></div>
          
          <Calendar className={Style.calendar} />
          <p className={Style.data}>{displayDate}</p>
          
          <div className={Style.separacao2}></div>
          
          <button className={Style.alterar_button}>
            Alterar local/data
            <ArrowRight className={Style.arrow} />
          </button>
        </div>
        <img
          onClick={AbrirModalUser}
          src={user}
          className={Style.usuario}
          alt="usuario"
        />
      </header>

      <div className={Style.container}>

        <div className={Style.atividades}>
          <div className={Style.atv_info}>
            <h2 className={Style.atv_nome}>Passeios</h2>
            <button
              onClick={AbrirModalCadastrarAtividade}
              className={Style.atv_button}
            >
              Adicionar atividade
              <Plus />
            </button>
          </div>

          <div style={{overflowY: 'auto', height: '450px'}}>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <div style={{display: "flex",flexDirection: "row",alignItems: "baseline", gap: "10px"}}>
                <span style={{ fontSize: "20px", textIndent: "30px" }}>
                  Dia 17
                </span>
                <span style={{ fontSize: "16px", color: "#5a5a5a" }}>Sabado</span>
              </div>
              <p
                style={{ color: "#5a5a5a", fontSize: "16px", textIndent: "30px" }}
              >
                Nenhuma atividade cadastrada nessa data
              </p>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "20px", textIndent: "30px" }}>
                  Dia 18
                </span>
                <span style={{ fontSize: "16px", color: "#5a5a5a" }}>
                  Domingo
                </span>
              </div>

              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <div className={Style.div_atv_details} >
                  <img  style={{width: '25px', height: '25px'}}src={checkConfirmed} alt="" />
                  <span>Academia em grupo</span>
                  <span style={{marginLeft: 'auto', color: '#9a9a9a', fontSize: '15px'}}>08:00h</span>
                </div>
              </div>

              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <div className={Style.div_atv_details} >
                  <CircleDashed/>
                  <span>Academia em grupo</span>
                  <span style={{marginLeft: 'auto', color: '#9a9a9a', fontSize: '15px'}}>08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={Style.links}>
            <h3 className={Style.nome_link}>Links importantes</h3>
            <div style={{overflowY: 'auto', height: '150px'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px', gap: '2px'}}>
                  <span style={{textIndent: '20px', display: 'block'}}>Reserva da casa</span>
                  
                  <a href="https://www.google.com"  className={Style.url_links}>https://www.google.com</a>
                </div>
                <Link2 style={{marginRight: '10px'}} />
              </div>
            </div>

            <div className={Style.container_button_link}>
              <button
                onClick={AbrirModalCadastrarLink}
                className={Style.button_link}
              >
                Cadastrar novo link
                <Plus />
              </button>
            </div>
          </div>
          
          <div className={Style.participantes}>
            <h3 className={Style.nome_participantes}>Convidados</h3>
            
            <div style={{overflowY: 'auto', height: '200px'}}>
              
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  
                  <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px', gap: '2px'}}>
                    <span style={{textIndent: '20px', display: 'block'}}>Jessica Person</span>
                    
                    <span style={{fontSize: "13px", color: "#5a5a5a", textIndent: '20px', display: 'block', overflow: 'hidden',
                    textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '250px'}}>jessicaperson@gmail.com</span>
                  </div>
                  <CircleDashed style={{marginRight: '10px'}} />
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  
                  <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px', gap: '2px'}}>
                    <span style={{textIndent: '20px', display: 'block'}}>Haarvey Specter</span>
                    
                    <span style={{fontSize: "13px", color: "#5a5a5a", textIndent: '20px', display: 'block', overflow: 'hidden',
                    textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '250px'}}>harveyspecter@gmail.com</span>
                  </div>
                  <img src={checkConfirmed} alt=""  style={{height: '25px', width: '25px', marginRight: '10px'}}/>
                </div>

            </div>

            <div className={Style.container_button_participantes}>
              <button className={Style.button_participantes}>
                Gerenciar convidados
                <UserCog2 />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalAtividade && (
        <div className={Style.background_modal_adicionar_atividade}>
          <div className={Style.modal_adicionar_atividade}>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h3 className={Style.titulo_adicionar_atividade}>
                Cadastrar atividade
              </h3>
              <X
                onClick={FecharModalCadastrarAtividade}
                style={{
                  marginTop: "2vh",
                  marginRight: "2vh",
                  cursor: "pointer",
                }}
              />
            </div>
            <form>
              <div className={Style.div_input_nome_atividade}>
                <Tag style={{ height: "2vh", marginLeft: "1vh" }} />
                <input
                  type="text"
                  placeholder="Nome da atividade"
                  className={Style.input_nome_atividade}
                ></input>
              </div>

              <div style={{ display: "flex" }}>
                <div className={Style.div_input_data_atividade}>
                  <Calendar style={{ height: "2vh", marginLeft: "1vh" }} />
                  <input
                    type="text"
                    placeholder="data"
                    className={Style.input_data_atividade}
                  ></input>
                </div>

                <div className={Style.div_input_hora_atividade}>
                  <Clock style={{ height: "2vh", marginLeft: "1vh" }} />
                  <input
                    type="text"
                    placeholder="horário"
                    className={Style.input_hora_atividade}
                  ></input>
                </div>
              </div>

              <button
                style={{
                  backgroundColor: "#14ae5c",
                  width: "90%",
                  height: "6vh",
                  border: "none",
                  borderRadius: "15px",
                  marginLeft: "5%",
                  marginTop: "3vh",
                  cursor: "pointer",
                }}
              >
                Cadastrar Atividade
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalLink && (
        <div className={Style.background_modal_adicionar_link}>
          <div className={Style.modal_adicionar_link}>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h3 className={Style.titulo_adicionar_link}>Cadastrar Link</h3>
              <X
                onClick={FecharModalCadastrarLink}
                style={{
                  marginTop: "2vh",
                  marginRight: "2vh",
                  cursor: "pointer",
                }}
              />
            </div>
            <form>
              <div className={Style.div_input_nome_link}>
                <Tag style={{ height: "2vh", marginLeft: "1vh" }} />
                <input
                  type="text"
                  placeholder="Nome do link"
                  className={Style.input_nome_link}
                ></input>
              </div>

              <div className={Style.div_input_url_link}>
                <Tag style={{ height: "2vh", marginLeft: "1vh" }} />
                <input
                  type="text"
                  placeholder="Url do link"
                  className={Style.input_url_link}
                ></input>
              </div>

              <button
                style={{
                  backgroundColor: "#14ae5c",
                  width: "90%",
                  height: "50px",
                  border: "none",
                  borderRadius: "15px",
                  marginLeft: "5%",
                  marginTop: "3vh",
                  cursor: "pointer",
                }}
              >
                Cadastrar Link
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalUser && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
            backgroundColor: "rgb(0 0 0 / 0.7)",
          }}
        >
          <div className={Style.modal_user}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontWeight: "normal",
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                Informações Pessoais
              </h3>
              <X
                style={{
                  display: "flex",
                  position: "relative",
                  left: "15px",
                  cursor: "pointer",
                }}
                onClick={FecharModalUser}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Link to="/trips">
                <button style={{ backgroundColor: "#14ae5c" }}>
                  Minhas viagens
                </button>
              </Link>
              <button style={{ backgroundColor: "#5856d6" }}>
                Viagens que eu participo
              </button>
              <button style={{ backgroundColor: "#ff4848" }}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

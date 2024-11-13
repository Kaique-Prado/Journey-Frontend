import User from "../../img/MaleUser.png";
import { useState } from "react";
import Style from "./Viagens.module.css";
import { Link } from "react-router-dom";
import { X, Plus } from "lucide-react";

function Viagens() {
  const [isModalUser, setModalUser] = useState(false);

  function AbrirModalUser() {
    setModalUser(true);
  }
  function FecharModalUser() {
    setModalUser(false);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <img
          onClick={AbrirModalUser}
          src={User}
          alt="User"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#252525",
          width: "500px",
          height: "500px",
          borderRadius: "15px",
        }}
      >
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
          <h2 style={{marginTop: '10px'}}>Viagens</h2>
          <Link to='/trip/create'><button style={{display: 'flex', marginTop: '10px' , position: 'relative', left: '160px', backgroundColor:'#14ae5c', border: 'none', width: '50px', height:'30px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', cursor: 'pointer'}}>
            <Plus />
          </button>
          </Link>
        </div>
        <div>

        </div>
      </div>

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
                  Suas viagens
                </button>
              </Link>
              <button style={{ backgroundColor: "#5856d6" }}>
                Viagens que você participa
              </button>
              <button style={{ backgroundColor: "#ff4848" }}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Viagens;

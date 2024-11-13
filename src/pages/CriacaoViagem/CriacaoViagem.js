import { useState } from 'react'
import {Link} from 'react-router-dom'
import style from './CriacaoViagem.module.css'
import { MapPin, Calendar, AtSign, X, Plus  } from 'lucide-react'
import { DayPicker} from "react-day-picker";
import { format } from 'date-fns'
import "react-day-picker/style.css";
import classNames from "react-day-picker/style.module.css";


function CriacaoViagem() {
    const [isModalEmail, setModalEmail] = useState(false)
    const [emailInvite, setEmailInvite] = useState([])
    const [isDatePicker, setDatePicker] = useState(false)
    const [isDateStartEnd, setDateStartEnd] = useState()
    const [destination, setDestination] = useState('')
    
    const css = '.today{ color: #ffff }'

    const displayDate = isDateStartEnd ? format(isDateStartEnd.from, "d' de 'LLL").concat(' até ').concat(format(isDateStartEnd.to, "d' de 'LLL")) : null


    function openDatePicker(){
        return setDatePicker(true)
    }

    function closeDatePicker(){
        return setDatePicker(false)
    }

    function openModalEmail(){
        setModalEmail(true)
    }
    function closeModalEmail(){
        setModalEmail(false)
    }

    function createTrip(event) {
        event.preventDefault()
        console.log(destination)
        console.log(isDateStartEnd)
        console.log(emailInvite)
    }

    function addEmail(event){
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email = data.get('email')

        if(!email){
            return
        }

        if(emailInvite.includes(email)){
            return 
        }
        
        setEmailInvite([
            ...emailInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function deleteEmail(emailToRemove){
        const newEmailList = emailInvite.filter( email => email !== emailToRemove)   
        setEmailInvite(newEmailList)
    }
    return(
        <>
            <style>{css}</style>
            <div className={style.div_create_trip}>
                <div style={{display: 'flex'}}> 
                    <h3>Criação viagem</h3>
                    <Link to='/trips'>< X style={{display: 'flex', position: 'relative', left: '140px', marginTop: '1vh'}} /></Link>
                </div>
                <form onSubmit={createTrip}>
                    <div className={style.div_local_data}>
                        <div className={style.div_local}>
                            <MapPin style={{height: '3vh', marginLeft: '0.5vw', marginRight: '0.5vw' }} />
                            <input onChange={event => setDestination(event.target.value)} className={style.input_local} type="text" placeholder='local da viagem' />
                        </div>
                        <div className={style.div_data}>
                            <Calendar style={{height: '3vh', marginLeft: '0.5vw', marginRight: '0.5vw'}} />
                            <span onClick={openDatePicker} style={{fontSize: '13px' ,color: '#7a7a7a', display: 'flex', justifyContent: 'center', marginRight:'10px', cursor:'pointer'}}>
                                {displayDate || 'Data da viagem'}
                            </span>
                        </div>
                    </div>
                    <div className={style.div_email}>
                        <AtSign style={{height: '3vh', marginLeft: '0.5vw', marginRight: '0.5vw'}} />                  
                        {emailInvite >= 0 ? (
                            <span onClick={openModalEmail} style={{fontSize: '13px' ,color: '#7a7a7a', display: 'flex', justifyContent: 'center'  }}>Email do participante</span>
                        ):(
                            <span onClick={openModalEmail} style={{fontSize: '13px' ,color: '#ffff', display: 'flex', justifyContent: 'center'  }}>{emailInvite.length} pessoa(s) convidada(s)</span>
                        )}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button type='submit'className={style.button_create_trip}>Criar</button>
                    </div>
                </form>
            </div>

            {isModalEmail && (
               <div className={style.background}>
                    <div className={style.modal}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <h3 style={{textIndent:'15px',marginBottom: '10px'}}>Adicionar participante</h3>
                            <X onClick={closeModalEmail} style={{cursor: 'pointer', marginRight:'10px', marginTop:'2px'}} />
                        </div>
                        
                        {emailInvite.map(email => {
                            return (
                                <div key={email} style={{display: 'flex',flexWrap: 'wrap'}}>
                                    <div className={style.participants_email}>
                                    <span style={{fontSize: '13px'}}>{email}</span>
                                    < X style={{height: '3vh'}} onClick={() => deleteEmail(email)} />
                                    </div>
                                </div>
                            )
                        })}
                        
                        <div style={{ backgroundColor: '#1a1a1a', width: '95%', height: '2px', marginLeft: '10px', marginRight: '10px'}} />
                        
                        <form onSubmit={addEmail} className={style.form_email_modal}>
                            <AtSign style={{height: '3vh', width: '3vh'}} />
                            <input type="email" name='email' placeholder='digite o email do convidado' style={{backgroundColor: '#3a3a3a', height: '40px', width: '300px', border: 'none', outline: 'none'}} />
                            
                            <button type='submit' className={style.button}>
                                Convidar
                                < Plus style={{width:'3vw', height: '3vh'}}/>
                            </button>
                        </form>
                    </div>
               </div>
            )}

            {isDatePicker &&(
                <div className={style.background} >
                    <div className={style.modal_date}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <h3 style={{textIndent:'15px',marginBottom: '10px'}}>data</h3>
                            <X onClick={closeDatePicker} style={{cursor: 'pointer', marginRight:'10px', marginTop:'2px'}} />
                        </div>
                        
                        <div style={{display: 'flex', justifyContent: 'center'}}    >
                        <DayPicker mode="range" selected={isDateStartEnd} onSelect={setDateStartEnd} modifiersClassNames={{today: 'today', DayButton: 'select' }} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CriacaoViagem
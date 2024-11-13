import style from "./PrimaryInput.module.css"

function Input({name, value, onChange, label, type, placeholder}){
    return (
        <div className={style.input_container}>
            <label className={style.label}>{label}</label>
            <input className={style.input} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default Input
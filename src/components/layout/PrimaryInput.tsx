import style from "./PrimaryInput.module.css"

interface input {
    type: string | undefined
    placeholder: string
    value: string | undefined
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    label: string
}


function Input({name, value, onChange, label, type, placeholder} : input ){
    return (
        <div className={style.input_container}>
            <label className={style.label}>{label}</label>
            <input className={style.input} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default Input
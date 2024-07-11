const Button = ({ titulo, type, evento, className = "btn btn-primary" }) => {

    return (
        <button className={className} type={type} onClick={evento}>{titulo}</button>
    )
}
export default Button
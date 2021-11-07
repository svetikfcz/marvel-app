import img from './icons8-error-64.png';

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: "64px", height: "64px",objectFit: 'contain', margin: "0 auto"}} src={img} alt="Error"/>  
    )
}

export default ErrorMessage;

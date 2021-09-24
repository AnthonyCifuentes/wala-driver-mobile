import './WalaLogo.scss';

const WalaLogo = ({size = "default", color = "success"}) => {
    return (
        <h3 id="wala-logo" className={`${size} ${color}`}>Walá!</h3>
    )
}

export default WalaLogo

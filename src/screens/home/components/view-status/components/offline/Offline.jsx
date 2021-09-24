import { IonButton, IonIcon } from '@ionic/react'
import { bagHandle } from 'ionicons/icons';
import './Offline.scss';

const Offline = ({setOnline}) => {
    return (
        <div className="view_status_offline">

        <div className="view_status_offline_icon">
            <IonIcon icon={bagHandle} color="secondary" />
        </div>
        <div className="view_status_offline_title">
        <h3>Estás desconectado</h3>
        <p>Preciona INICIAR para recibir ordenes.</p>
        <IonButton onClick={() => setOnline(true)} mode="md" className="wala-button" color="success" expand="full" shape="round">
            INICIAR
        </IonButton>
        </div>

    </div>
    )
}

export default Offline

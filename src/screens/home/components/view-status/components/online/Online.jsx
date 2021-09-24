import { IonButton, IonIcon } from '@ionic/react';
import { bagHandle } from 'ionicons/icons';
import './Online.scss';

const Online = ({setOnline}) => {
    return (

        <div className="sonar-wrapper">
            <IonIcon className="sonar-icon" icon={bagHandle} color="ligth" />
            <div className="sonar-emitter">
                <div className="sonar-wave"></div>
            </div>
            <div className="title">
                <h3>Estas conectado</h3>
                <p>Buscando ordenes...</p>
                <IonButton onClick={() => setOnline(false)} mode="md" className="wala-button" color="danger" expand="full" shape="round">
                    DESCONECTARME
                </IonButton>
            </div>
        </div>
        
    )
}

export default Online

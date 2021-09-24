import { IonButton, IonIcon } from '@ionic/react'
import './RoundButton.scss';

const RoundButton = ({icon, color="medium", size="default"}) => {
    return (
        <IonButton className={size} id="round_button" color={color} fill="solid" mode="md">
            <IonIcon icon={icon} slot="icon-only" />
        </IonButton>
    )
}

export default RoundButton

import { IonIcon, IonItem, IonLabel, IonReorder } from '@ionic/react';
import { reorderFourOutline } from 'ionicons/icons';
import './ItemDetailIcon.scss';

const ItemDetailIcon = ({ children, itemColor="light", color = "dark", lines = "inset", icon, detail=false, title, subtitle, onClick = () => {} }) => {
    return (
        <IonItem color={itemColor} lines={lines} id="item_detail_icon" button detail={detail} onClick={onClick}>
            {icon && <IonIcon color={color} icon={icon} slot="start" />}
            <IonLabel color={color}>
                <h3>{title}</h3>
                {subtitle && <p>{subtitle}</p>}
            </IonLabel>
            {children}
        </IonItem>
    )
}

export default ItemDetailIcon

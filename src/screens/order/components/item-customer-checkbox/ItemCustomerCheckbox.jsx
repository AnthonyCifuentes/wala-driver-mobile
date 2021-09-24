import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import { useState } from 'react';
import RoundButton from '../../../../components/common/round-button/RoundButton';
import './ItemCustomerCheckbox.scss';

const ItemCustomerCheckbox = ({onChecked}) => {

    const [checked, setChecked] = useState(false);

    const onChange = ({detail}) => {
        setChecked(detail.checked);
        onChecked(detail.checked);
    }

    return (
        <IonItem id="item_customer_checkbox" button lines="full" detail={false}>
            <IonCheckbox value={checked} slot="start" color="tertiary" onIonChange={onChange}/>
            <IonLabel>
                <h3>Andres Lopez</h3>
                <p>A12341</p>
            </IonLabel>  
            <RoundButton icon={ellipsisVertical} size="small" />
        </IonItem>
    )
}

export default ItemCustomerCheckbox

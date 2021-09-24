import { useState } from 'react';
import Offline from './components/offline/Offline';
import Online from './components/online/Online';
import './ViewStatus.scss';

const ViewStatus = () => {

    const [online, setOnline] = useState(false);

    return (
        <div className="view_status">
            
            {online ? <Online setOnline={setOnline} /> : <Offline setOnline={setOnline} />}

        </div>
    )
}

export default ViewStatus

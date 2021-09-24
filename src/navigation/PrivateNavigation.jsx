import { Redirect, Route } from 'react-router-dom';

/* Screens */
import { MENU_SCREENS } from './menuScreens';
import { SCREENS } from './sreens';

const PrivateNavigation = () => {

    return (
        <>                
            {MENU_SCREENS.map(screen => (
                <Route key={screen.label} exact path={screen.path} render={(props) => (screen.screen(props))} />
            ))}
            {SCREENS.map(screen => (
                <Route key={screen.label} exact path={screen.path} render={(props) => (screen.screen(props))} />
            ))}
            {/* <Route exact path="/">
                <Redirect to="/login" />
            </Route> */}
        </>
    )
}

export default PrivateNavigation;

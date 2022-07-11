import { NavLink } from 'react-router-dom';
import { RoutePathDefinition } from '../../routes/routes';
import styles from './navigation.module.scss';

interface INavigation {
    routes: RoutePathDefinition[];
}

const NavigationItem = ({ route }: { route: RoutePathDefinition }) => {
    return (
        <NavLink key={route.path} style={{ textDecoration: 'none' }} to={route.path}>
            <div className={styles.nav_item_wrapper} key={route.title}>
                <div>
                    <div>
                        <div className={styles.nav_item}>{route.title.toUpperCase()}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

const NavigationOptions = ({ routes }: INavigation) => {
    return (
        <div className="flex flex-col py-2">
            {routes.map((route) => (
                <NavigationItem key={route.path} route={route} />
            ))}
        </div>
    );
};

export default NavigationOptions;

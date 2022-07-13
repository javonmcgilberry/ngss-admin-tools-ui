/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import { useState } from 'react';
import routes from '../../routes/routes';
import { DominosLogo } from '../common/Common';
import MarketSelector from '../marketSelector/MarketSelector';
import Navigation from '../navigation/Navigation';
import Typography from '../typography/Typography';
import User from '../user/User';
import styles from './sidebar.module.scss';

export type MarketOption = {
    value: string;
    label: string;
};

const MARKET_OPTIONS = [
    { value: 'us', label: 'U.S. Market' },
    { value: 'us1', label: 'Test Market 1' }
];

const LogoutIcon = () => {
    const handleLogout = () => {
        return '';
    };
    return (
        <svg
            onClick={handleLogout}
            width="1.25rem"
            height="1.25rem"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                fill="white"
            />
        </svg>
    );
};

const Sidebar = () => {
    const [selectedVal, setSelectedVal] = useState<MarketOption>({ value: '', label: '' });
    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside
            className={clsx(styles.sidebar_container, {
                [styles.open]: isOpen,
                [styles.closed]: !isOpen
            })}
        >
            <div className={styles.logo_header}>
                <DominosLogo onClick={() => handleSidebar()} />
                {isOpen ? (
                    <div className={styles.ngss_wrapper}>
                        <Typography variant="h5" color="white" condensed bold>
                            NGSS Admin
                        </Typography>
                    </div>
                ) : null}
            </div>
            <div className={styles.user_panel}></div>
            {isOpen ? <Navigation routes={routes} /> : null}
            <div
                className={clsx(styles.sidebar_footer, {
                    [styles.footer_open]: isOpen,
                    [styles.footer_closed]: !isOpen
                })}
            >
                {isOpen ? <User /> : null}
                <LogoutIcon />
            </div>
        </aside>
    );
};

export default Sidebar;

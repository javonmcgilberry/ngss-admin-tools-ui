import { useState } from 'react';
import routes from '../../routes/routes';
import MarketSelector from '../marketSelector/MarketSelector';
import Navigation from '../navigation/Navigation';
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

const Sidebar = () => {
    const [selectedVal, setSelectedVal] = useState<MarketOption>({ value: '', label: '' });

    return (
        <aside className={styles.sidebar_container}>
            <div className={styles.user_panel}>
                <User />
                <MarketSelector
                    marketOptions={MARKET_OPTIONS}
                    selectedVal={selectedVal}
                    setSelectedVal={setSelectedVal}
                />
            </div>
            <Navigation routes={routes} />
        </aside>
    );
};

export default Sidebar;

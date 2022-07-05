import { SetStateAction } from 'react';
import { MarketOption } from '../sidebar/Sidebar';
import styles from './marketSelector.module.scss';

type MarketSelectorProps = {
    selectedVal: MarketOption;
    setSelectedVal: React.Dispatch<SetStateAction<MarketOption>>;
    marketOptions: MarketOption[];
};

const MarketSelector = ({ selectedVal, setSelectedVal, marketOptions }: MarketSelectorProps) => {
    return (
        <div className={styles.market_selector_wrapper}>
            {/* <StyledSelect
                defaultValue={selectedVal.value}
                onChange={(val) => console.log('VALUE', val)}
            >
                {marketOptions.map((option) => {
                    return (
                        <MenuItem
                            onChange={() => {
                                // const value = val as unknown as string;
                                setSelectedVal(option);
                            }}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    );
                })}
            </StyledSelect> */}
        </div>
    );
};

export default MarketSelector;

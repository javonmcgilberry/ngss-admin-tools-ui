import Typography from '../typography/Typography';
import styles from './Common.module.scss';

interface IContainerComponent {
    children: React.ReactNode | React.ReactNode[];
}
export const Row = ({ children }: IContainerComponent) => {
    return <div className={styles.row}>{children}</div>;
};

export const Column = ({ children }: IContainerComponent) => {
    return <div className={styles.column}>{children}</div>;
};

export const Title = ({ title }: { title: string }) => {
    return <h1>{title}</h1>;
};

export const SectionHeader = ({ title }: { title: string }) => {
    return <h1>{title}</h1>;
};

export const PageWrapper = ({ children }: IContainerComponent) => {
    return <div className={styles.page_container}>{children}</div>;
};

const Hr = () => {
    return (
        <div className={styles.hr_wrapper}>
            <div className={styles.hr_styling}></div>
        </div>
    );
};

export const Section = ({ title, children }: { children: React.ReactNode; title: string }) => {
    return (
        <div className={styles.page_section}>
            <div className={styles.page_title_wrapper}>
                <Typography variant={'h4'} color={''} condensed>
                    {title.toUpperCase()}
                </Typography>
                <Hr />
            </div>
            <div className={styles.page_section_content}>{children}</div>
        </div>
    );
};

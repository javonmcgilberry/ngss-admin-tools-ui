import styles from './main.module.scss';

const Main = ({ children }: { children: React.ReactNode }) => {
    return <main className={styles.main_container}>{children}</main>;
};

export default Main;

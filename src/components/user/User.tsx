import Typography from '../typography/Typography';
import styles from './user.module.scss';
const User = () => {
    return (
        <div className={styles.user}>
            <Typography variant="h4" color="white">
                J. Johnson
            </Typography>
            <Typography variant={'subheading1'} color={'white'}>
                SIGN OUT
            </Typography>
        </div>
    );
};

export default User;

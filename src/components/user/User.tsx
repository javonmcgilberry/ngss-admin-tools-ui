import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectUsername, setUsername } from '../../state/user/userSlice';
import Typography from '../typography/Typography';
import styles from './user.module.scss';

const User = () => {
    const dispatch = useAppDispatch();
    const username = useAppSelector((state) => selectUsername(state));
    useEffect(() => {
        dispatch(setUsername({ firstName: 'Johnny', lastName: 'Johnson' }));
    }, [dispatch]);
    return (
        <div className={styles.user}>
            <Typography variant="h4" color="white">
                {username}
            </Typography>
            <Typography variant={'subheading1'} color={'white'}>
                SIGN OUT
            </Typography>
        </div>
    );
};

export default User;

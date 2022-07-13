import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectUsername, setUsername } from '../../state/user/userSlice';
import Typography from '../typography/Typography';
import styles from './user.module.scss';

const User = () => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(selectUsername);
    const role = useAppSelector((state) => state.user.role);
    // useEffect(() => {
    //     dispatch(
    //         setUsername({ firstName: 'Johnny', lastName: 'Johnson', role: 'I.T. Administrator' })
    //     );
    // }, [dispatch, role]);
    return (
        <div className={styles.user}>
            <div>
                <Typography variant="subheading1" color="white" bold>
                    {username?.toUpperCase()}
                </Typography>
                <Typography variant="subheading2" color="white">
                    {role?.toUpperCase()}
                </Typography>
            </div>
        </div>
    );
};

export default User;

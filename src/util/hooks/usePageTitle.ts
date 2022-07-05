import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../../routes/routes';

const usePageTitle = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string | undefined>('');

    useEffect(() => {
        if (location) {
            const title = routes.find((route) => route.path.includes(location.pathname))?.title;
            setCurrentPage(title);
        }
    }, [location]);

    return currentPage;
};

export default usePageTitle;

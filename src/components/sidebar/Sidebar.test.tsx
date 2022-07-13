import { renderWithProviders } from '../../test-utils/setupStore';
import Sidebar from './Sidebar';
import { fireEvent, screen } from '@testing-library/react';

describe('Sidebar', () => {
    it('should handle collapsing and expanding', () => {
        renderWithProviders(<Sidebar />);
        let headerText = screen.queryByText('NGSS Admin');
        expect(headerText).toBeFalsy();
        const dominosLogo = screen.getByTestId('dominos-logo');
        expect(dominosLogo).toBeInTheDocument();
        fireEvent.click(dominosLogo);
        headerText = screen.getByText('NGSS Admin');
        expect(headerText).toBeInTheDocument();
    });
    it('should only display user name and role when expanded', () => {
        renderWithProviders(<Sidebar />, {
            preloadedState: {
                user: { firstName: 'Johnny', lastName: 'Johnson', role: 'Administrator' }
            }
        });
        let usernameText = screen.queryByText('Johnson');
        let roleText = screen.queryByText('Admin');

        expect(usernameText).toBeFalsy();
        expect(roleText).toBeFalsy();

        const dominosLogo = screen.getByTestId('dominos-logo');
        expect(dominosLogo).toBeInTheDocument();
        fireEvent.click(dominosLogo);
        usernameText = screen.getByText('J. JOHNSON');
        roleText = screen.getByText('ADMINISTRATOR');
        expect(usernameText).toBeInTheDocument();
    });
});

import { Root } from 'react-dom/client';
import { RootState } from '../store';
import userSlice, { selectUsername, setUsername, UserSlice } from './userSlice';

describe('user reducer', () => {
    const initialState: UserSlice = {
        firstName: '',
        lastName: '',
        role: ''
    };
    it('should handle initial state', () => {
        const state = userSlice(undefined, { type: 'unknown' });
        expect(state).toEqual({
            firstName: '',
            lastName: '',
            role: ''
        });
    });
    it('should handle change of first and last name', () => {
        const action = setUsername({ firstName: 'Johnny', lastName: 'Johnson', role: 'Boss Man' });
        const state = userSlice(initialState, action);
        expect(state).toEqual({
            firstName: 'Johnny',
            lastName: 'Johnson',
            role: 'Boss Man'
        });
    });
});

describe('user selectors', () => {
    it('should handle selecting username from first and last name', () => {
        const user: UserSlice = {
            firstName: 'Benjamin',
            lastName: 'Franklin',
            role: 'Founding father'
        };
        const result = selectUsername({ user } as RootState);
        expect(result).toEqual(`B. Franklin`);
    });
});

import {
    Action,
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
    PreloadedState,
    ThunkAction
} from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice, { LOGOUT } from './user/userSlice';

const persistConfig = {
    key: 'root',
    storage
};
const combinedReducer = combineReducers({
    user: userSlice
});

const clearReduxStateOnLogout = (action: AnyAction) => {
    return combinedReducer(undefined, action);
};

const reducer = (
    state: CombinedState<ReturnType<typeof combinedReducer>> | undefined,
    action: AnyAction
) => {
    // logout action clears state;
    if (action.type === LOGOUT) {
        return clearReduxStateOnLogout(action);
    } else {
        return combinedReducer(state, action);
    }
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: reducer,
        preloadedState
    });
};

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);

type Store = typeof store;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppStore = ReturnType<typeof setupStore>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetStateFromReducers<T> = T extends (...args: any[]) => infer Ret
    ? Ret
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends Record<any, any>
    ? {
          [K in keyof T]: GetStateFromReducers<T[K]>;
      }
    : T;

export type GlobalState = GetStateFromReducers<typeof combinedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

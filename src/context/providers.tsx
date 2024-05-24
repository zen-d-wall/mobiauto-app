'use client';

import UserPreferencesProvider from './userPreferences';

export function Providers({ children }: any) {
    return (
        <UserPreferencesProvider>
            {children}
        </UserPreferencesProvider>
    );
}
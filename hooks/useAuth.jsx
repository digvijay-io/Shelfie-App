// hooks/useAuth.js
import { useEffect } from 'react';
import { useUser } from './useUser';
import { router } from 'expo-router';

export function useAuth(requireAuth = true) {
    const { user, loading } = useUser();

    useEffect(() => {
        if (!loading) {
            if (requireAuth && !user) {
                router.replace('/Login');
            } else if (!requireAuth && user) {
                router.replace('/(tabs)/home');
            }
        }
    }, [user, loading, requireAuth]);

    return { user, loading };
}
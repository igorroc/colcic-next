"use client"

import { TUser } from '@/types/user';
import { useUserToken } from '@/utils/handleUserToken';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type TUserError = {
    error: boolean
}

const AuthContext = createContext(
    { authUser: null as TUser | null | TUserError }
);

export const AuthProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const { token } = useUserToken()

    const [authUser, setAuthUser] = useState<TUser | null | TUserError>(null);

    useEffect(() => {
        async function get() {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/users/auth/${token}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                } as RequestInit)

                console.log(res)

                if (res.ok) {
                    const userRes: TUser = await res.json()

                    return userRes
                } else {
                    return { error: true }
                }
            } catch (err) {
                console.error(err)
                return { error: true }
            }
        }

        get().then((user) => {
            setAuthUser(user)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider value={{ authUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
import { LOCAL_STORAGE_KEY } from "@/constants/storage"
import { useEffect, useState } from "react"

export function useUserToken() {
	const isClient = typeof window !== "undefined"
	const storedToken = isClient
		? window.localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)
		: null
	const [token, setToken] = useState(storedToken || "")

	useEffect(() => {
		if (isClient && storedToken) {
			setToken(storedToken)
		}
	}, [isClient, storedToken])

	const setUserToken = (newToken: string) => {
		setToken(newToken)
		if (isClient) {
			window.localStorage.setItem(`${LOCAL_STORAGE_KEY}user-token`, newToken)
		}
	}

	const removeUserToken = () => {
		setToken("")
		if (isClient) {
			window.localStorage.removeItem(`${LOCAL_STORAGE_KEY}user-token`)
		}
	}

	return { token, setUserToken, removeUserToken }
}

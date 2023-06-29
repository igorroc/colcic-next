import { LOCAL_STORAGE_KEY } from "@/constants/storage"

export function getToken() {
	return localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)
}

export function setToken(token: string) {
	return localStorage.setItem(`${LOCAL_STORAGE_KEY}user-token`, token)
}

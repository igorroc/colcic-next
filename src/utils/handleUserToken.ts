import { LOCAL_STORAGE_KEY } from "@/constants/storage"

export function getUserToken() {
	return localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)
}

export function setUserToken(token: string) {
	return localStorage.setItem(`${LOCAL_STORAGE_KEY}user-token`, token)
}

export function removeUserToken() {
	return localStorage.removeItem(`${LOCAL_STORAGE_KEY}user-token`)
}

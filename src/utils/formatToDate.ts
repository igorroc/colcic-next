export function formatToDate(date: string) {
	const dateObject = new Date(date)
	let day: any = dateObject.getDate()
	let month: any = dateObject.getMonth()
	if (month < 10) month = `0${month}`
	if (day < 10) day = `0${day}`
	let year = dateObject.getFullYear()
	return `${day}/${month}/${year}`.replaceAll(" ", "")
}

export default function slugCleaner(slug: string): string {
	// Replace all accented chars with regular ones
	let newSlug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

	// Replace all non-alphanumeric characters with -
	// Lowercase the string
	newSlug = newSlug.replace(/[^a-z0-9]/gi, "-").toLowerCase()

	// Replace multiple dashes with a single dash
	newSlug = newSlug.replace(/-+/g, "-")

	// Return the sanitized slug
	return newSlug
}

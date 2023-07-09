export default function slugCleaner(slug: string): string {
	// Replace all non-alphanumeric characters with -
	// Lowercase the string
	let newSlug = slug.replace(/[^a-z0-9]/gi, "-").toLowerCase()

	// Replace multiple dashes with a single dash
	newSlug = newSlug.replace(/-+/g, "-")

	// Return the sanitized slug
	return newSlug
}

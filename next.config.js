/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "example.com",
			},
			{
				protocol: "https",
				hostname: "media.discordapp.net",
			},
		],
	},
}

module.exports = nextConfig

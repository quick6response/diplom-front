/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: [],
		},
	},
	
	async headers() {
		return [
			{
				source: '/:path',
				headers: [
					{
						key: 'pathname',
						value: '/:path',
					}
				],
			},
		]
	},
};

export default nextConfig;

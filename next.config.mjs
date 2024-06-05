/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
	
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

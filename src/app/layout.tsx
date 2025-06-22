import type { Metadata } from 'next';
import { Providers } from './provider';
import '@/styles/global.sass';

export const metadata: Metadata = {
	title: 'DnD',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<Providers>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}

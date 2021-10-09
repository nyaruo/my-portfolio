import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "HP by Nextjs" }) {
    return (
        <div className="flex justify-center items-center  bg-blue-50 flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title> {title} </title>
            </Head>

            <div className="sticky top-0 z-50">
            <header>
                <nav className="bg-white w-screen border-b-2 border-gray-100">
                    <div className="flex items-center pl-8 h-14">
                        <div className="flex space-x-4">
                            <Link href="/">
                                <a className="text-lg text-gray-600 hover:text-gray-400 px-5 py-2 rounded">
                                    TANIKAWA&apos;s Portfolio
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            </div>

            <main className="flex flex-1 flex-col items-center">
                {children}
            </main>

            <footer className="w-full h-12 flex justify-center items-center text-gray-500 text-base border-t">
                <a>
                    Ayaka Tanikawa©2021-2022
                </a>
            </footer>

        </div>
    );
}
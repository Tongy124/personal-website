function Footer() {
    return (
        <footer className="p-4 bg-salmon rounded-t-xl shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
                    {/* <img src="/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BrunoBold</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-white sm:text-center">© 2022 BrunoBold. All Rights Reserved.</span>
        </footer>
    )
}

export default Footer;
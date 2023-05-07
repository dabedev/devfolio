
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold">My Portfolio</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-6">
                        <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    </div>
                    <div className="mr-6">
                        <a href="#" className="text-gray-300 hover:text-white">About</a>
                    </div>
                    <div className="mr-6">
                        <a href="#" className="text-gray-300 hover:text-white">Portfolio</a>
                    </div>
                    <div>
                        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
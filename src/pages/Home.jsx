
const Home = () => {
    return (
        <>
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-2">Welcome to My Portfolio</h1>
                    <p className="text-gray-800 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">View Portfolio</a>
                </div>
            </section>
            <section className="bg-gray-200 py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">My Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <img src="https://via.placeholder.com/640x360" alt="Project Image" className="rounded-md mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                            <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat libero sit amet risus bibendum pharetra.</p>
                            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">View Project</a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;
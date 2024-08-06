import {FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-x-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div className="grid mb-8 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-medium tracking-wide text-white">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">News</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">World</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Games</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">References</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-white">Apples</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Web</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">eCommerce</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Business</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Entertainment</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Portfolio</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-white">Cherry</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Media</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Brochure</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Non Profit</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Education</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Projects</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-white">Business</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Infopreneur</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Personal</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Wiki</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Forum</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">Projects</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                            <p className="font-medium tracking-wide text-white">Suscribe for Updates</p>
                            <form className="mt-4 flex flex-col md:flex-row">
                                <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white text-black border-gray-300 rounded shadow-md aspect-auto md:mr-2 md:mb-2 focus:border-purple-400 focus:outline-none" />
                                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-lg
                                hover:bg-indigo-500 hover:text-white focus:outline-none border">Suscribe</button>
                            </form>
                            <p className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iure libero officiis incidunt sed. Cupiditate sit beatae quas atque possimus rerum tempore quod. Nesciunt corrupti suscipit eos dolore sint eaque?
                            </p>
                        </div>

                </div>


                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                        <p className="text-sm text-white">© Copyright 2024 | All rights reserved.</p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">

                            <a href="" className="text-white transition-all duration-300 hover:text-gray-400"><FaXTwitter className='h-6 w-6'/></a>

                            <a href="" className="text-white transition-all duration-300 hover:text-red-400"><FaInstagram className='h-6 w-6'/></a>

                            <a href="" className="text-white transition-all duration-300 hover:text-blue-600"><FaFacebook className='h-6 w-6'/></a>

                        </div>
                    </div>


            </div>
        </div>
    )
}

export default Footer
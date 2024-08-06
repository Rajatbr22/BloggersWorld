const Modal = ({isOpen, onClose}) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? " " : "hidden"}`}>
            <div className="modal-contrainer">
                <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded-md shadow-lg">

                    {/* modal content */}
                    <h2 className="text-xl font-semibold mt-6 mb-5 uppercase">
                        Please Login Here!
                    </h2>
                    <form className="px-4">

                        <div className="mb-5">
                            <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-lg"/>
                        </div>

                        <div className="mb-5">
                            <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-lg"/>
                        </div>

                        <div>
                            <button className="hover:shadow-lg rounded-lg bg-[#6a64f1] hover:bg-white hover:text-black py-3 px-8 text-base font-semibold text-white outline-none transition duration-200">Login</button>
                        </div>
                    </form>

                    {/* close button */}
                    <button onClick={onClose} className=" bg-white text-black hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md inline-flex items-center mt-5 transition duration-200">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
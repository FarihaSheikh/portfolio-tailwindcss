function Contact() {
    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-7">
            <h1 className="text-3xl font-bold mb-5 text-center">Contact Me</h1>
            <form className="sm:ml-4 mx-auto"> {/* Adjust form's margin for small screens */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto border border-gray-300">
                    <div className="mb-5">
                        <label htmlFor="FullName" className="block text-sm font-medium text-black mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            name="FullName"
                            className="w-full px-4 py-2 text-sm text-black placeholder-white bg-rose-300 rounded focus:outline-none shadow md:text-base md:px-6 md:py-3" // Adjusts size on medium screens
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            className="w-full px-4 py-2 text-sm text-black placeholder-white bg-rose-300 rounded focus:outline-none shadow md:text-base md:px-6 md:py-3"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-black mb-1">Contact Number</label>
                        <input
                            type="text"
                            placeholder="Enter your contact number"
                            name="contactNumber"
                            className="w-full px-4 py-2 text-sm text-black placeholder-white bg-rose-300 rounded focus:outline-none shadow md:text-base md:px-6 md:py-3"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
                        <textarea
                            placeholder="Your message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-2 text-sm text-black placeholder-white bg-rose-300 rounded focus:outline-none shadow md:text-base md:px-6 md:py-3"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="px-6 py-2 bg-rose-400 text-white font-bold rounded hover:bg-blue-600 transition duration-200">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;

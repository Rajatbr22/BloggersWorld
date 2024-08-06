import BlogPage from "../components/BlogPage";
import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function Blogs() {
    return (
        <div>
            <div className="px-4 py-32 bg-gray-900 mx-auto text-white text-center">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blogs Page</h1>
                <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
                Welcome to our blog, your go-to destination for insightful articles, tips, and stories on a wide range of topics. Join our community of curious minds and embark on a journey of discovery, learning, and growth together.
                </p>

                <div>
                    <Link to="/" className="font-medium hover:text-indigo-400 inline-flex items-center py-1">Learn more <FaArrowRight className="mt-1 ml-2"/></Link>
                </div>
            </div>

            {/* { all blogs container } */}
            <div className="max-w-7xl mx-auto">
                <BlogPage/>
            </div>

        </div>
    )
}

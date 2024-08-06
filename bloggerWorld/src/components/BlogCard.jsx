import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const BlogCard = ({blogs, currPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currPage - 1) * pageSize, currPage * pageSize);
    
    // console.log(filteredBlogs);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8' >
            {
                filteredBlogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-xl shadow-gray-950 rounded-md cursor-pointer'>
                    <div>
                        <img src={blog.image} alt="" className='w-full'/>
                    </div>
                    <h3 className='mt-4 mb-2 text-white hover:text-indigo-500 cursor-pointer'>{blog.title}</h3>
                    <p className='mb-2 text-gray-400'><FaUser className='inline-flex items-center mr-2 text-white'/>{blog.author}</p>
                    <p className='text-sm text-gray-400'>Published: {blog.published_date}</p>
                </Link>)
            }
        </div>
    )
}

export default BlogCard;


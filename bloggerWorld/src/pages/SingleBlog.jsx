import { useLoaderData } from "react-router-dom"
import {FaUser} from "react-icons/fa"
import { FaClock } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";

const SingleBlog = () => {

    const data = useLoaderData();
    const {title, image ,category, author, published_date, reading_time, content} = data[0];

    return (
        <div>
            {/* <div className="py-40 bg-black text-center text-white px-4">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Single Blog Page</h2>
            </div> */}

            {/* { blog details} */}
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img src={image} alt="" className="w-full mx-auto rounded"/>
                    </div>
                    <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
                    <p className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mr-2"/> {author} | {published_date}</p>

                    <p className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-2"/>{reading_time}</p>
                    <p className="text-base text-gray-500 mb-6">{content}</p>

                    <div className="text-base text-gray-500 mb-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab voluptatum corrupti ipsum provident, consequatur expedita cumque dolores laborum, saepe dolorum sequi quas at obcaecati. Expedita velit ex fugit eveniet!
                        </p><br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quos vel asperiores facilis numquam, omnis adipisci sapiente alias corporis voluptatibus quidem accusamus aliquid veritatis beatae animi cumque non. Ratione, quasi?
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores magni nobis odit modi, a praesentium recusandae dolores aut earum quidem deleniti at error, fugiat alias laborum. Eum facere dolor excepturi?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis natus molestiae? Suscipit nulla et odit reiciendis a sit saepe fugiat in facere maxime debitis rem, sed assumenda animi. Eaque?
                        </p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam molestiae cum optio, fugit eius minus rem doloremque asperiores, hic alias, atque laudantium! Quae omnis eligendi expedita, assumenda voluptatem illum!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi debitis ullam accusamus, libero quasi temporibus accusantium praesentium, aspernatur ab autem vel nesciunt officia fugit! Esse, minus. Cum, ab? Corporis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis natus molestiae? Suscipit nulla et odit reiciendis a sit saepe fugiat in facere maxime debitis rem, sed assumenda animi. Eaque?
                        </p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam molestiae cum optio, fugit eius minus rem doloremque asperiores, hic alias, atque laudantium! Quae omnis eligendi expedita, assumenda voluptatem illum!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi debitis ullam accusamus, libero quasi temporibus accusantium praesentium, aspernatur ab autem vel nesciunt officia fugit! Esse, minus. Cum, ab? Corporis!</p>
                    </div>
                </div>

                    <div className="lg:w-1/2">
                        <Sidebar/>
                    </div>
            </div>
        </div>
    )
}

export default SingleBlog
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

export default function BlogPage(){
    const [blogs, setBlogs] = useState([])
    const [currPage, setCurrPage] = useState(1);
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?page=${currPage}&limit=${pageSize}`;

            // filter
            if(selectedCategory){
                url += `&cetegory=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currPage, pageSize, selectedCategory])

    // page changing btn
    const handlePageChange = (pageNumber) =>{
        setCurrPage(pageNumber);
    }

    const handleCategoryChange = (category) =>{
        setSelectedCategory(category);
        setCurrPage(1);
        setActiveCategory(category);
    }

    return(
        <div>
            {/* { category section } */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
            </div>

            {/* { blog cards section } */}
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCard blogs={blogs} currPage={currPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

                {/* { sidebar component } */}
            <div>
                <Sidebar/>
            </div>

            </div>

            {/* { pagination section } */}
            <div>
                <Pagination onPageChange={handlePageChange} currPage={currPage} blogs={blogs} pageSize={pageSize}/>
            </div>
        </div>
    )
}

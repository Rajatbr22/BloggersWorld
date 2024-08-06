const Pagination = ({ onPageChange, currPage, blogs, pageSize }) => {

    const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => { onPageChange(pageNumber);}}>{pageNumber}</a>
            </li>
        ));
    };

    return (
        <ul className="pagination my-8 flex-wrap gap-4">
            <li>
                <button  className="hover:text-indigo-500" onClick={() => onPageChange(currPage - 1)} disabled={currPage === 1}>Previous</button>
            </li>
            <div className="flex gap-1">{renderPaginationLinks()}</div>
            <li>
                <button className="hover:text-indigo-500" onClick={() => onPageChange(currPage + 1)} disabled={currPage === totalPages}>Next</button>
            </li>
        </ul>
    );
};

export default Pagination;

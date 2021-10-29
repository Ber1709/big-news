import React, {useState} from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";


const NewsList = ({ articles, isLoading, newsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // Get currents news
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = articles.slice(indexOfFirstNews, indexOfLastNews);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div>
            
            <NewsItem articles={currentNews} isLoading={isLoading}/>
            <Pagination 
                newsPerPage={newsPerPage} 
                totalNews={articles.length} 
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>     
    )       
}

export default NewsList;
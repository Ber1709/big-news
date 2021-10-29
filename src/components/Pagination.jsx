import React, { Component } from "react";

const Pagination = ({ newsPerPage, totalNews, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="mt-4" style={{marginLeft: '25%'}}>
            <div className="container">
                <nav>
                    <ul className="pagination">
                        <li clasNames="page-item"><a onClick={() => paginate(currentPage - 1)} className="page-link" href="#">Anterior</a></li>
                            {pageNumbers.map(number => (
                                <li key={number} className="page-item">
                                    <a onClick={() => paginate(number)} href="#" className="page-link">
                                        {number}
                                    </a>
                                </li>
                            )
                            )}
                        <li className="page-item"><a onClick={() => paginate(currentPage + 1)} className="page-link" href="#">Proximo</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}

export default Pagination
import './App.css';
import NewsList from './components/NewsList'
import React, { useState, useEffect } from "react";
import axios  from "axios"
import ChangeProp from './components/ChangeProp';
import Navbar from './components/Navbar';


const App = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [newsPerPage] = useState(10);
  const [pageSize] = useState(100);
  const [query, setQuery] = useState('apple');

  // Escriba su API_KEY aqui, o cree una variable de entorno y llamela en su lugar
  const API_KEY = "2894d6038d874fb7a5e299c6ca7f7d88";

  useEffect(() => {
    let apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=${pageSize}`;

    const fetchNews = async () => {
        setLoading(true);
        const res = await axios.get(apiUrl);
        setArticles(res.data.articles);
        setLoading(false);
    }
         
    fetchNews();
  }, []);


  const onSearch = querySearch => {
    setQuery(querySearch);

    let apiUrl = `https://newsapi.org/v2/everything?q=${querySearch}&apiKey=${API_KEY}&pageSize=${pageSize}`;
    setArticles([]);
      setLoading(true);
      axios.get(apiUrl)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      }
      );
      
  }
  const changeCategory = category => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}&pageSize=${pageSize}`;
    setArticles([]);
      setLoading(true);
      axios.get(apiUrl)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      }
      );
  }

  const changeCountry = country => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}`;
    setArticles([]);
      setLoading(true);
      axios.get(apiUrl)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      }
      );
  }

  const changeSortBy = orderBy => {
    let apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=${pageSize}&sortBy=${orderBy}`;
    setArticles([]);
      setLoading(true);
      axios.get(apiUrl)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      }
      );
  }

  return (
    <div>
      <Navbar props={onSearch} category={changeCategory}/>
      <h1 className='text-center mb-4 mt-4'><i className="far fa-newspaper"> Big News</i></h1>
      <NewsList 
              articles={articles} 
              newsPerPage={newsPerPage}
              />

      <ChangeProp 
              country={changeCountry} 
              orderBy={changeSortBy} 
              />
    </div>
  );
}

export default App;

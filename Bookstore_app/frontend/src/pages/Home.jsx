import React,{useState,useEffect} from 'react';
import axios from 'axios';
import spinner from '../components/spinner';
import {link} from 'react-router-dom';
import {AioutlineEdit} from 'react-icons/ai';
import {BsInfocircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/bookstable';


const Home = () => {
    const [books,setBooks] = useState([]);
    const [loading,setloading] = useState(false);
    const [showType,setShowType] = useState('table');
    useEffect(() => {
        setloading(true);
        axios
        .get('http://localhost:5555/books')
        .then((response) => {
            setBooks(response.data.data);
            setloading(false);
        })
        .catch((error) =>{
            console.log(error);
            setloading(false);
        });
    }, []);
  return (
     <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={()=>setShowType('table')}>
                Table
            </button>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={()=>setShowType('table')}>
                card
            </button>
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Books List</h1>
            <Link to='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
        </div>
        {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
        
     </div>
  );

};

export default Home;
import React,{useEffect, useState} from 'react';
import BackButton from '../components/BackButton';
import spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {useSnackbar} from 'notistack';
import { set } from 'mongoose';
import { Alert } from 'bootstrap';

const EditBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishyear] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://localhost:5555/books/${id}`)
    .then((response) => {
      setAuthor(response.data.author);
      setPublishyear(response.data.publishYear);
      setTitle(response.data.title)
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error occured');
      console.log(error);
    });
  },[])

  const handleEditBook = () =>{
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
    .post(`http://localhost:5555/books/${id}`,data)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Edited',{variant:'success'});
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar('Error',{variant: 'error'});
      console.log(error);
    });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3Xl my-4'>Create Book</h1>
      {loading ? <spinner/> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
       < div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
          type="number"
          value={publishYear}
          onChange={(e) => setPublishyear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook
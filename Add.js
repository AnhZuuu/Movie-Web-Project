import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
// import '../style/FormEdit.css';

const URL = 'https://6533531ed80bd20280f66792.mockapi.io/Movie';

const initialState = {
    name: '',
    producer: '',
    image: '',
    info: '',
    clip: '',
}

const error_init = {
    name_err: '',
    producer_err: '',
    image_err: '',
    info_err: '',
    clip_err: '',
}
const FormAddEdit = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState(initialState);
    const { name, producer, image, info, clip } = state;
    const [errors, setErrors] = useState(error_init);

    const getOneMovie = async (id) => {
        const res = await axios.get(`${URL}/${id}`);
        if (res.status === 200) {
            setState(res.data);
        }
    }

    useEffect(() => {
        if (id) getOneMovie(id);
        console.log(id);
    }, [id]);

    const updateMovie = async (id, data) => {
        const res = await axios.put(`${URL}/${id}`, data);
        console.log("1111");
        if (res.status === 200) {
            toast.success('Updated Movie with ID: ${id} successfully ~');
            navigate('/dashboard');
        }
    }

    const addNewMovie = async (data) => {
        const res = await axios.post(`${URL}`, data);
        if (res.status === 200 || res.status === 201) {
            toast.success("New Movie has been added successfully ~");
            navigate('/dashboard');
        }
    }

    // validate
    const validateForm = () => {
        let isValid = true;
        let errors = { ...error_init };

        if (name.trim() === '') {
            errors.name_err = 'Name is Required';
            isValid = false;
        }
        if (producer.trim() === '') {
            errors.name_err = 'Producer is Required';
            isValid = false;
        }
        if (image.trim()==='') {
            errors.image_err = 'Movie image is required';
            isValid = false;
        }
        if (info.trim() === '') {
            errors.info_err = 'Description is required';
            isValid = false;
        }
        if (clip.trim() === '') {
            errors.clip_err = 'Movie trailer is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (id) updateMovie(id, state);
            else addNewMovie(state);
        } else {
            toast.error("Some info is invalid ~ Pls check again");
        }
    }

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        setState((state) => ({ ...state, [name]: value }));
    }

    return (
        <div className='container-edit'>
            <div className="form-edit">
                <h2>{id ? "Update Form" : "Add New Movie"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name='name' value={state.name} onChange={handleInputChange} />
                        {errors.name_err && <span className='error'>{errors.name_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="producer">producer: </label>
                        <input type="text" name='producer' value={state.producer} onChange={handleInputChange} />
                        {errors.producer_err && <span className='error'>{errors.producer_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input type="text" name='image' value={state.image} onChange={handleInputChange} />
                        {errors.image_err && <span className='error'>{errors.image_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="info">Description: </label>
                        <input type="text" name='info' value={state.info} onChange={handleInputChange} />
                        {errors.info_err && <span className='error'>{errors.info_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="clip">Trailer: </label>
                        <input type="text" name='clip' value={state.clip} onChange={handleInputChange} />
                        {errors.clip_err && <span className='error'>{errors.clip_err}</span>}
                    </div>
                    <button type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddEdit;
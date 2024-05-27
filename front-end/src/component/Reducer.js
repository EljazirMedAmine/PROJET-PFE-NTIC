import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'axios'; // Adjust this import to your axios instance path
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyleToast = {};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchAll',
  async () => {
    const toastId = toast.loading('Loading...', StyleToast);
    try {
      const response = await axiosInstance.get('/api/reservations');
      toast.dismiss(toastId);
      toast.success('Reservations fetched successfully', StyleToast);
      return response.data.reservations;
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(`Error: ${error.response.data.message}`, StyleToast);
      throw error;
    }
  }
);


export const fetchChambres = createAsyncThunk(
    'chambres/fetchAll',
    async () => {
        const toastId = toast.loading('Loading...', StyleToast);
        try {
            const response = await axiosInstance.get('/api/chambres');
            toast.dismiss(toastId);
            toast.success('Chambres fetched successfully', StyleToast);
            return response.data.chambres;
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(`Error: ${error.response.data.message}`, StyleToast);
            throw error;
        }
    }
);



export const addReservation = createAsyncThunk(
    'reservations/add',
    async (reservationData) => {
        const toastId = toast.loading('Loading...', StyleToast);
        try {
            const response = await axiosInstance.post('/api/reservations', reservationData);
            toast.dismiss(toastId);
            toast.success('Reservation added successfully', StyleToast);
            return response.data.reservation;
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(`Error: ${error.response.data.message}`, StyleToast);
            throw error;
        }
    }
);




export const deleteReservation = createAsyncThunk(
    'reservations/delete',
    async (id) => {
        const toastId = toast.loading('Loading...', StyleToast);
        try {
            await axiosInstance.delete(`/api/reservations/${id}`);
            toast.dismiss(toastId);
            toast.success('Reservation deleted successfully', StyleToast);
            return id;
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(`Error: ${error.response.data.message}`, StyleToast);
            throw error;
        }
    }
);




export const searchReservations = createAsyncThunk(
    'reservations/search',
    async (filters) => {
        const toastId = toast.loading('Loading...', StyleToast);
        try {
            const response = await axiosInstance.get('/api/reservations/search', {
                params: filters
            });
            toast.dismiss(toastId);
            toast.success('Reservations fetched successfully', StyleToast);
            return response.data.reservations;
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(`Error: ${error.response.data.message}`, StyleToast);
            throw error;
        }
    }
);





export const addReservationWithValidation = createAsyncThunk(
    'reservations/addWithValidation',
    async (reservationData) => {
        const toastId = toast.loading('Loading...', StyleToast);
        try {
            const response = await axiosInstance.post('/api/reservations/store1', reservationData);
            toast.dismiss(toastId);
            toast.success('Reservation added successfully', StyleToast);
            return response.data.reservation;
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(`Error: ${error.response.data.message}`, StyleToast);
            throw error;
        }
    }
);

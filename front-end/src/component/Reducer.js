import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ReducerStore=createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    chambres: [],
    action_status:''
  },
  extraReducers: (builder)=>{
      builder.addCase(fetchReservations.pending, (state) => {
        state.action_status = 'loading';
      });
      builder.addCase(fetchReservations.fulfilled, (state, action) => {
          state.action_status = 'succeeded';
          state.reservations = action.payload;
      });
      builder.addCase(fetchReservations.rejected, (state) => {
          state.action_status = 'failed';
      });



  }
})
export default ReducerStore.reducer;


export const fetchReservations = createAsyncThunk(
  'reservations/fetchAll',
  async () => {
    try {
      const response = await axios.get('/api/reservations');
      return response.data.reservations;
    } catch (error) {
      throw console.log(error);
    }
  }
);

export const fetchChambres = createAsyncThunk(
  'chambres/fetchAll',
  async () => {
    try {
      const response = await axios.get('/api/chambres');
      return response.data.chambres;
    } catch (error) {
      throw console.log(error);
    }
  }
);

export const addReservation = createAsyncThunk(
  'reservations/add',
  async (reservationData) => {
    try {
      const response = await axios.post('/api/reservations', reservationData);
      return response.data.reservation;
    } catch (error) {
      throw console.log(error);
    }
  }
);

export const deleteReservation = createAsyncThunk(
  'reservations/delete',
  async (id) => {
    try {
      await axios.delete(`/api/reservations/${id}`);
      return id;
    } catch (error) {
      throw console.log(error);
    }
  }
);

export const searchReservations = createAsyncThunk(
  'reservations/search',
  async (filters) => {
    try {
      const response = await axios.get('/api/reservations/search', {
        params: filters
      });
      return response.data.reservations;
    } catch (error) {
      throw console.log(error);
    }
  }
);

export const addReservationWithValidation = createAsyncThunk(
  'reservations/addWithValidation',
  async (reservationData) => {
    try {
      const response = await axios.post('/api/reservations/store1', reservationData);
      return response.data.reservation;
    } catch (error) {
      throw console.log(error);
    }
  }
);

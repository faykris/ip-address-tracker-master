import { configureStore } from '@reduxjs/toolkit';
import { IPActions } from './actions';

export interface RootState {
  ip: string,
  location: string,
  timezone: string,
  isp: string,
  lat: number,
  lng: number
}

const initialState: RootState = {
  ip: '192.212.174.101',
  location: 'South San Gabriel',
  timezone: '-08:00',
  isp: 'Southern California Edison',
  lat: 34.04915,
  lng: -118.09462
};

const store = configureStore({
  reducer: (state = initialState, action: IPActions) => {
    switch (action.type) {
      case 'AddIP':
        return action.payload;
      default:
        return state;
    }
  }
});

export default store;

import { createAction } from '@reduxjs/toolkit'
import {RootState} from "./store";

interface AddIP {
	type: 'AddIP',
	payload: object
}

// eslint-disable-next-line
const AddIP = createAction('AddIP', function prepare(data: RootState) {
	return {
		payload: data
	}
});

export type IPActions = AddIP;

export { AddIP };

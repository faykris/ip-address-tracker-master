import { createAction } from '@reduxjs/toolkit'

interface AddIP {
	type: 'AddIP',
	payload: object
}

// eslint-disable-next-line
const AddIP = createAction('AddIP', function prepare(data: any) {
	return {
		payload: data
	}
})

export type IPActions = AddIP 

export { AddIP }

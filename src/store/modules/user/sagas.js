import { takeLatest, all } from 'redux-saga/effects';

import types from './types';

function* exampleAsync({ payload }) {
	yield payload;
}

export default all([takeLatest(types.EXAMPLE, exampleAsync)]);

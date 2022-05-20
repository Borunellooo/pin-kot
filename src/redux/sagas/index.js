import {
  call, put, takeEvery, select,
} from 'redux-saga/effects'
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  LOAD_POST, LOAD_NEXT_PAGE, requestError, requestSuccess,
} from '../actions';
import { afterSelector } from '../selectors';

export function* workerSaga() {
  try {
    const data = yield call(
      () => axios.get(
        'https://www.reddit.com/r/cats.json',
        {},
      ),
    )
    const { after } = data.data.data
    const dataFilter = data.data.data.children.filter(item => item.data.selftext === '')
    const slideFilter = dataFilter.filter(item => !item.data.media_metadata)
    const list = slideFilter.map(el => ({
      id: el.data.id,
      title: el.data.title,
      media: el.data.media === null ? { photo: el.data.url, video: '' } : { photo: '', video: el.data.media.reddit_video.fallback_url },
    }))
    yield put(requestSuccess({ list, after }))
  } catch (error) {
    yield put(requestError());
  }
}

export function* workerNextPageSaga() {
  const markNext = yield select(afterSelector)
  try {
    const data = yield call(
      () => axios.get(
        `https://www.reddit.com/r/cats.json?&after=${markNext}`,
        {},
      ),
    )
    const { after } = data.data.data
    const dataFilter = data.data.data.children.filter(item => item.data.selftext === '')
    const slideFilter = dataFilter.filter(item => !item.data.media_metadata)
    const list = slideFilter.map(el => ({
      id: el.data.id,
      title: el.data.title,
      media: el.data.media === null ? { photo: el.data.url, video: '' } : { photo: '', video: el.data.media.reddit_video.fallback_url },
    }))

    yield put(requestSuccess({ list, after }))
  } catch (error) {
    yield put(requestError());
  }
}

export function* watchSaga() {
  yield takeEvery(LOAD_POST, workerSaga)
  yield takeEvery(LOAD_NEXT_PAGE, workerNextPageSaga)
}

export default function* rootSaga() {
  yield watchSaga();
}

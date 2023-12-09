import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { END_POINT_NAME, STATUS, TYPE_API } from './query/endPointName'
import { apiReducer } from './reducer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type PATH_API = keyof typeof apiReducer
export const useStatus = (path: PATH_API, typeApi: TYPE_API, endPointName: END_POINT_NAME): STATUS => {
  const api = useAppSelector((state: RootState) => state[path]) as any;

  const objRequest = api[typeApi];
  let status = STATUS.NULL;

  Object.keys(objRequest).forEach((key) => {
    if(objRequest[key]?.endpointName === endPointName) {
      status = objRequest[key]?.status;
    }
  });

  return status;
}
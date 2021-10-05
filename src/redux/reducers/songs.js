import { createReducer } from '@reduxjs/toolkit'
import { setSongs, setSongsIsLoading } from 'actions/songs'

export const songs = createReducer([], {
  [setSongs]: (s, { payload }) => payload
})

export const songIsLoading = createReducer(false, {
  [setSongsIsLoading]: (s, { payload }) => payload
})

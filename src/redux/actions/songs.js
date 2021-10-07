import { createAction } from '@reduxjs/toolkit'
import { API_OPTIONS } from 'tools/constant'
import { getLocalStorage, setLocalStrage } from 'tools/localstorage'
import request from 'tools/request'

export const setSongs = createAction('SONGS')
export const setSongsIsLoading = createAction('IS_SONG_LOADING')

export function getSongs() {
  const songs = getLocalStorage('tracks')
  return dispatch => {
    if (songs.length) {
      return dispatch(setSongs(songs))
    }
    dispatch(setSongsIsLoading(true))
    request
      .request(API_OPTIONS)
      .then(({ data }) => {
        setLocalStrage('tracks', data.tracks)
        dispatch(setSongs(data.tracks))
      })
      .finally(() => dispatch(setSongsIsLoading(false)))
  }
}

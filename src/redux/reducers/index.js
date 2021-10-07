import { combineReducers } from '@reduxjs/toolkit'
import { songs, songIsLoading } from './songs'
export default combineReducers({ songs, songIsLoading })

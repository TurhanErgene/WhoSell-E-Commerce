import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


const store = () => {
  const middlewares = [thunk]


function getFromLocalStorage() {
  try {
    const localStorageState = localStorage.getItem('statePersist')
    const reduxState = localStorageState ? JSON.parse(localStorageState) : []
    return reduxState
  } catch (error) {
    console.log('error ', error);
    return undefined
  }
}

  const reduxStore = createStore(
    rootReducer,
    getFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
  )
    reduxStore.subscribe(()=>{
      localStorage.setItem('statePersist', JSON.stringify(reduxStore.getState()))
    })
    return reduxStore

}

export default store
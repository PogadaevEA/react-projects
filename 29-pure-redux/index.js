import store from './redux/store.js'
import { addCurrentTime, clearAllTimes } from './redux/actionCreators.js'

const addTimeBtn = document.getElementById('addTime')
addTimeBtn.addEventListener('click', () => store.dispatch(addCurrentTime()))

const clearTimesBtn = document.getElementById('clearTimes')
clearTimesBtn.addEventListener('click', () => store.dispatch(clearAllTimes()))

const timesList = document.getElementById('timesList')
store.subscribe(() => {
  const times = store.getState()
  timesList.innerHTML = ''
  times.forEach((time) => {
    const li = document.createElement('li')
    li.textContent = time
    timesList.appendChild(li)
  })
})

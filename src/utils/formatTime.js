import {format} from 'date-fns'

const formatTime = (time) => {

    return format(time,"HH:MM aa")
} 

export default formatTime
import {Set_job,Add_job,Delete_job, Set_fix} from './constan'

export const setJob = payload => {
    return {
        type: Set_job,
        payload
    }
}
export const addJob = ()=> {
    return {
        type: Add_job
    }
}
export const deleteJob = (payload)=> {
    return {
        type: Delete_job,
        payload
    }
}
export const setFix = (payload) => {
    return {
     type: Set_fix,
     payload
    }
        
}

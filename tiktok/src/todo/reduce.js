import {Set_job,Add_job,Delete_job,Set_fix} from './constan'
const storage = (JSON.parse(localStorage.getItem('jobs'))) ?? []
 export const initstate = {
    job: '',
    jobs: storage
}
const reduce = (state, action) => {
    switch (action.type) {
        case Set_job:
            return {
                ...state,
                job: action.payload
            }
        case Add_job:
            if(state.job.trim()) {
                return {
                    ...state,
                    jobs: [...state.jobs,state.job.trim()],
                }
            }
            else {
                return {
                    ...state
                }
            }
        case Delete_job:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload,1)
            return {
                ...state,
                jobs: newJobs
            }
        case Set_fix: 
            const fixJobs = [...state.jobs]
            fixJobs.splice(action.payload,1,state.job)
            return {
                ...state,
                jobs: fixJobs
            }

        default:
            throw new Error('invalid action')
    }
}
export default reduce
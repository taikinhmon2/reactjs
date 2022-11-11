import { Set_job, Add_job, Delete_job,Fix_State} from "./action";
const initState = {
    job: '',
    jobs: []
}
const reduce = (state, action) => {
    switch (action.type) {
        case Set_job:
            return {
                ...state,
                job: action.payload
            }
        case Add_job:
            return {
                ...state,
                jobs: [...state.jobs, state.job]
            }
        case Delete_job:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        case Fix_State:
            const newFix = [...state.jobs]
            newFix.splice(action.payload,1,state.job)
            return {
                ...state,
                jobs: newFix
            }
        default:
            throw new Error('Invalid action')
    }
}
export { initState }
export default reduce
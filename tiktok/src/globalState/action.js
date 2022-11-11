const Set_job = 'set_job'
const Add_job = 'add_job'
const Delete_job = 'delete_job'
const Fix_State = 'fix_state'
const Setjob = (payload)=> {
    return {
        payload,
        type: Set_job
    }
}
const Addjob = () => {
    return {
        type: Add_job
    }
}
const Deletejob = (payload)=> {
    return {
        payload,
        type: Delete_job
    }
}
const Fixstate = (payload)=> {
    return {
        payload,
        type: Fix_State
    }
}
export {Set_job,Add_job,Delete_job,Fix_State,Fixstate,Setjob,Addjob,Deletejob}
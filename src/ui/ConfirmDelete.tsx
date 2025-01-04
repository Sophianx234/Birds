import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBird } from "../services/hooks"
import { Dispatch, SetStateAction } from "react"
export type confirmDeleteProps = {
    id: string
    handleOpenDelete: Dispatch<SetStateAction<boolean>>
}
function ConfirmDelete({id,handleOpenDelete}:confirmDeleteProps) {
    const queryClient = useQueryClient()
    const{mutateAsync:handleDelete} = useMutation({
        mutationFn: deleteBird,
        onMutate:()=>{
            toast.loading('Deleting....',{
                duration: 2000
            })

        },
        onSuccess:()=>{
            toast.success('Deleted successfully')
            queryClient.invalidateQueries({queryKey:['birds']})
            setTimeout(function(){
                handleOpenDelete(state=>!state)
            },2000)

        },
        onError:()=>{
            toast.error('Could not delete ')

        }

    })
    return (
        <div>
           <h1 className="font-bold font-Montserrat">Are you sure you want to delete file</h1>
           <div className="flex justify-between mx-24 pt-6">
            <button className="bg-teal-400 px-4 py-1 rounded-md text-teal-800 font-bold" onClick={()=>{
                handleDelete(id)
            }}>comfirm</button>
            <button className="bg-red-400 px-4 py-1 rounded-md text-red-800 font-bold" onClick={()=>handleOpenDelete(state=>!state)}>cancel</button>
            </div> 
        </div>
    )
}

export default ConfirmDelete

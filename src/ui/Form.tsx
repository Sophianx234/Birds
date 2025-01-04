import { SubmitHandler, useForm } from "react-hook-form"
import { Bird } from "./Table"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBird } from "../services/hooks"
import toast, { Toaster } from "react-hot-toast"
import { Dispatch, SetStateAction } from "react"


  export type BirdExtended = Bird&{
    size: string,
    color: string[]
  }

  type formProps = {
    id: string,
    handleOpenEdit: Dispatch<SetStateAction<boolean>>
  }
function Form({id,handleOpenEdit}: formProps) {
    const {register, handleSubmit} = useForm<BirdExtended>()
    const queryClient = useQueryClient()
    const {mutateAsync:handleUpdate} = useMutation({
        mutationFn: updateBird,
        onMutate:()=>{
            toast.loading('Updating....',{
                duration: 2000
            })

        },
        onSuccess:()=>{
            toast.success('Updated successfully')
            queryClient.invalidateQueries({queryKey:['birds']})
            setTimeout(function(){
                handleOpenEdit(state=>!state)
            },2000)

        },
        onError:()=>{
            toast.error('Could not update ')

        }
    })

    const onSubmit: SubmitHandler<BirdExtended> = (data:BirdExtended)=>{
        const {size,color,...rest} = data
        const appearance = {size,color}
        const modifiedData = {...rest,appearance}
        console.log(modifiedData)
        console.log(id)
        handleUpdate({id,updatedData:modifiedData})
    }
    return (
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4 px-6 mx-6 border pb-4 shadow-lg">
       <span className="font-Montserrat font-bold"> Edit Bird Information </span>
        <input type="text" placeholder="Edit bird common name" {...register('commonName')} className="border py-2 px-3 rounded-md w-full" />
        <input type="text" placeholder="Edit bird scientific name" {...register('scientificName')} className="border py-2 px-3 rounded-md w-full" />
        <input type="text" className='border py-2 px-3 rounded-md w-full' placeholder="Edit bird description" {...register('description')} />
        <input type="text" className='border py-2 px-3 rounded-md w-full' placeholder="Edit bird habitat" {...register('habitat')} />
        <input type="text" className='border py-2 px-3 rounded-md w-full' placeholder="Edit bird size" {...register('size')} />
        <input type="text" className='border py-2 px-3 rounded-md w-full' placeholder="Edit bird color" {...register('color')} />
        <button className="bg-teal-400 w-full rounded-md py-2 font-bold">Save</button>
        <Toaster position="top-center"/>
     </form>
    )
}

export default Form

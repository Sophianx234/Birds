import { Dispatch, ReactNode, SetStateAction, useEffect } from "react"

export type ModalProps = {
    children: ReactNode
    handleOpenView: Dispatch<SetStateAction<boolean>>
}
function Modal({children,handleOpenView}:ModalProps) {
    useEffect(function(){
        document.addEventListener('keydown',function(e){
            if(e.key ==='Escape'){
                handleOpenView(false)
            }

        },[])
    })
    
    return (
        <div className="fixed inset-0 bg-[#474645] ">
            <div className="flex justify-center items-center mt-16">

  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>handleOpenView(state=>!state)}>✕</button>
    </form>
    <p>{children}</p>
    
  </div>
            
        </div>
        </div>
    )
}

export default Modal

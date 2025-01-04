import { useQuery } from "@tanstack/react-query"
import { getBirds } from "../services/hooks"
import Skeleton from "./Skeleton"
import Table from "./Table"
import { HashLoader } from "react-spinners"

function AppLayout() {
    
    const {isLoading,data,error} = useQuery({
        queryKey:['birds'],
        queryFn: getBirds
    })
    
    if(isLoading) return <div className="absolute inset-0 flex justify-center items-center">

        <HashLoader size={60} color="#38B2AC"/>
    </div>
    if(error) return <>error</>
    console.log(data)
    return (
        <div>
            <Table  birds={data.birds}/>
            
                
        </div>
    )
}

export default AppLayout

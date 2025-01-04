import { Bird } from "./Table"

type cardProps = {
    bird: Bird |null
}
function Card({bird}:cardProps) {
    return (
       <div className="grid grid-cols-2 gap-y-3 ">
        
        <div className="text-xs text-center">
        <h1 className="font-bold font-inter text-sm">Bird Name</h1>
       <span className="w-24"> {bird?.commonName} </span>
        </div>
        <div className="text-xs   text-center">
        <h1 className="font-bold font-inter text-sm">Description</h1>
        <span className="">{bird?.description} </span>
        </div>

        
        <div className="text-xs ">
        <h1 className="font-bold font-inter text-sm">Habitat</h1>
        {bird?.habitat}
        </div>
        <div className="text-xs">
        <h1 className="font-bold font-inter text-sm">Scientific Name</h1>
        {bird?.scientificName}
        </div>

        
        <div className="text-xs">
        <h1 className="font-bold font-inter text-sm justify-between">Size</h1>
        {bird?.appearance.size}
        </div>
        <div className="text-xs">
        <h1 className="font-bold font-inter text-sm">Color</h1>
        {bird?.appearance.color}
        </div>
        </div>
    )
}

export default Card

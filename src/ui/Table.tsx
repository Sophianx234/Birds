import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Card from "./Card";
import ConfirmDelete from "./ConfirmDelete";
import Form from "./Form";
import Modal from "./Modal";

export type Bird = {
  _id: string;
  commonName: string;
  scientificName: string;
  description: string;
  habitat: string[];
  appearance: { size: string; color: string[] };
  photos: string[];
};
export type TableProps = {
  birds: Bird[];
};
function Table({ birds }: TableProps) {
  const [openView, setOpenView] = useState<boolean>(false);
  const [selectedBird, setSelectedBird] = useState<Bird| null>(null);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  return (
    <div className=" mx-10 mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="font-Montserrat ">
            <tr className="bg-gray-100">
              <th className="px-4 py-3 border">Common Name</th>
              <th className="px-4 py-2 border ">Scientific Name</th>
              <th className="px-4 py-2 border">Habitat</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {birds.map((bird: Bird) => (
              <tr key={bird._id} className="hover:bg-gray-50 ">
                <td className="px-4 py-6 pl-4 border bg-green-300 font-semibold text-green-800">
                  {bird.commonName}
                </td>
                <td className="px-4 border text-center bg-[#FEF3E7] font-semibold text-[#4c4945]">
                  {bird.scientificName}
                </td>
                <td className="px-4 border text-center bg-yellow-200 text-yellow-800 font-semibold">
                  {bird.habitat.join(", ")}
                </td>
                <td className="px-4 border text-center ">
                  <div className="flex gap-2 justify-center">
                    <button
                      className=" border text-xs py-1 gap-1 px-2 rounded-sm shadow-sm flex items-center hover:border-teal-400 duration-150"
                      onClick={() => {
                        setSelectedBird(bird)
                        
                        setOpenView((state) => !state)}}
                    >
                      <IoEyeOutline size={16} />
                      View
                    </button>
                    
                    <button
                      className=" border text-xs py-1 px-2 rounded-sm gap-1 shadow-sm flex items-center hover:border-blue-400 duration-150"
                      onClick={() => {
                        setSelectedBird(bird)
                        setOpenEdit(true)}} 
                    >
                    
                      <RiEdit2Line size={16} />
                      Edit
                    </button>
                    <button
                      className=" border text-xs py-1 gap-1 px-2 rounded-sm shadow-sm flex items-center
                  hover:border-red-400 duration-150"
                      //   onClick={() => onDelete(bird._id)}
                      onClick={() => {
                        setSelectedBird(bird)
                        setOpenDelete((state) => !state)}}
                    
                    >
                      <RiDeleteBin6Line size={16} />
                      Delete
                    </button>
                    {openView && (
                      <Modal handleOpenView={setOpenView}><Card bird={selectedBird}/></Modal>
                    )}
                    
                      {openEdit&&<Modal handleOpenView={setOpenEdit}><Form id={selectedBird?._id!} handleOpenEdit={setOpenEdit}/></Modal>}
                    
                      { openDelete && <Modal handleOpenView={setOpenDelete}><ConfirmDelete handleOpenDelete={setOpenDelete} id={selectedBird?._id!}/></Modal>}
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

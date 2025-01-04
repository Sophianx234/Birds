import axios from "axios";
import { Bird } from "../ui/Table";

const BASE_URL = "http://localhost:8000"

export type updateBirdProps = {
  id: string,
  updatedData: Bird
}

export async function getBirds(){
    const {data} = await axios.get(`${BASE_URL}/bird`)
    return data

}

export const updateBird = async ({id, updatedData}:updateBirdProps): Promise<any> => {
    const { data } = await axios.patch(`${BASE_URL}/bird/${id}`, updatedData);
    return data;
  };
  
  export const deleteBird = async (id:string) => {
    const { data } = await axios.delete(`${BASE_URL}/bird/${id}`);
    return data;
  };



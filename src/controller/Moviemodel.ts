import { Response, Request } from 'express';
import { fetchAllMovie } from "../utils/services"


export const getMovieNames = async (req: Request, res: Response)=>{
    try {
        const response = await fetchAllMovie();


        if (!response) {
            res.status(404).json({ message: " Error data not found"})
        }
        res.status(200).json({ message: " successful", response})
    } catch (error) {
        console.log(error.message)
    }
}

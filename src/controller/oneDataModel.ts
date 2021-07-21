import { Request, Response } from "express"
import axios from 'axios'

export const getAMovie = async (req: Request, res: Response)=> {
    try {
        const id = req.params.id 
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        const data = response.data;
        if (data) {
            res.status(200).json({message:" successful", data})
        }
        res.status(400).json({ message: " bad request"})
    } catch (error) {
        console.log(error.message)
    }
}

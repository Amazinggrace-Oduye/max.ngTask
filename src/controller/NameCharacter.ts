import { Request, Response } from "express";
import { fetchCharacterBYName } from "../utils/services";


export const getCharacterByName = async (req:Request, res: Response) =>{
    try {
        const QueryString = req.query.search as string;
        if (!QueryString) return res.status(400).json({ message: "bad request " });
        const response = await fetchCharacterBYName(QueryString)
        if (!response) {
            return res.status(404).json({ message: "no result found" });
        }
        return res.status(200).json({ message: "successful", response });
    }catch (error) {
    console.log(error.message);
}
}
    


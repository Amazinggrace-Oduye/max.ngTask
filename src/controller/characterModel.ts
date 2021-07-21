import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

interface Character {
    characterInfo: Record<string, any>[],
    totalCharacter: number,
    charactersTotalHeight: string,
}


export const getMovieCharacters = async (req: Request, res: Response) => {
    try {
        const sortBy = req.query.sortBy as string;
        const direction = req.query.direction as string;
        const gender = req.query.gender as string;

        const id: any = req.params.id 
        if (id > 6 || id < 1) return res.status(400).json({ message: ' bad request' });

        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        const info = response.data;
        
        let characterArray:Record<string, any>[] = [];
        let characterUrl: string = '';
        // let sortedData: any;
        // let heightCount = 0;
        // let heightInfo: string;
        // let result: Character;
        for (let i = 0; i < info.characters.length; i++) {
            characterUrl = info.characters[i]
            let characterDetails = await axios.get(characterUrl)
            let characterData = characterDetails.data

            characterArray.push(characterData)
            // for (let j = 0; j < info.length; j++) {
            // }
        }
        const result = await fetchAPI(gender, sortBy, direction, characterArray)
        console.log(result)
        if (!result) {
            return res.status(404).json({ message: "Error data not found" })
        }
        return res.status(200).json({ message: "Successful", result})

    } catch (error) {
        console.log(error.message);

        return res.status(400).json({ message: 'Error retrieving Data' })
    }
}
async function fetchAPI(gender = '', sortBy = "id", direction = "asc", characterArray: Record<string, any>[]) {
    let data;
    const sortValue = ['height', 'name']
    const genderValue = ['male', 'female']

    if (sortValue.includes(sortBy)) {
        if (direction == 'asc') {
            data = characterArray.sort((a, b) => a[sortBy] - b[sortBy])
            // return data
        } else if (direction == 'desc') {
            data = characterArray.sort((a, b) => b[sortBy] - a[sortBy])
            // return data
        } else {
            throw new Error("sortBy parameter is invalid")
        }
    } else {
        throw new Error("sortBy parameter is invalid")
    }
    if (genderValue.includes(gender)) {
        data = characterArray.filter((item:Record<string,any>) => item.gender === gender)
    }
    return data
}


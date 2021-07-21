import axios, { AxiosResponse } from "axios";
import { FILM } from "../type/types";
import { CommentModel } from "../controller/comment.model";

const uri ="https://swapi.dev/api/films";

export const fetchAllMovie = async (): Promise<AxiosResponse<FILM>> => {
    try {

        const response = await axios.get(uri);
        const results = response.data.results.sort((a: any, b: any) => {
            var first: any = new Date(b.release_date);
            var last: any = new Date(a.release_date);
            return last - first;
        })

        
        const result = results.map((films: FILM, index:number) => {
            return ({ "id": index + 1, tilte: films.title, opening_crawl: films.opening_crawl})
        })

        return result;

    } catch (error) {
        throw new Error(error.data.error.message)
    }
}

export const fetchCharacterBYName = async (search: string) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/films/?search=${search}`)
       return response.data
    } catch (error) {
        console.log(error.data.error.message)
    }
    
}
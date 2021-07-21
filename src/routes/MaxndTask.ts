import express, { Router } from "express";
const router = Router();
import { getMovieNames } from '../controller/Moviemodel';
import { getCharacterByName } from '../controller/NameCharacter';
import { getMovieCharacters } from '../controller/characterModel';


router.get("/", getMovieNames );

router.get("/singleMovie", getCharacterByName)
router.get("/characters/:id", getMovieCharacters)
export default router;

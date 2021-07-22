import express, { Router } from "express";
const router = Router();
import { getMovieNames } from '../controller/Moviemodel';
import { getCharacterByName } from '../controller/NameCharacter';
import { getMovieCharacters } from '../controller/characterModel';
import { CommentController } from "../controller/comment.controller";
import { getAMovie } from "../controller/oneDataModel"


router.get("/comments", CommentController.getAllComments);
router.get("/:id", getAMovie)
router.get("/", getMovieNames);
router.get("/singleMovie", getCharacterByName)
router.get("/characters/:id", getMovieCharacters)
router.post("/comment/create", CommentController.makeCommment);
router.get("/comment/:id", CommentController.findByMovie);

export default router;

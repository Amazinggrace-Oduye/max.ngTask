import express, { Router } from "express";
const router = Router();
import { getMovieNames } from '../controller/Moviemodel';
import { getCharacterByName } from '../controller/NameCharacter';
import { getMovieCharacters } from '../controller/characterModel';
import { CommentController } from "../controller/comment.controller";
import { getAMovie } from "../controller/oneDataModel"



router.get("/one-movie/:id",getAMovie)
router.get("/", getMovieNames );
router.get("/singleMovie", getCharacterByName)
router.get("/characters/:id", getMovieCharacters)
router.get("/comment", CommentController.getAllComments);
router.post("/comment/create", CommentController.makeCommment);
router.get("/:id", CommentController.findByMovie);

export default router;

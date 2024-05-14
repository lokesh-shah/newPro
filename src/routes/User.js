import express from 'express';
import { addUserData, getUser } from '../controller/index.js';

const router = express.Router();

export const getUserData = router.get('/getAllUser', getUser);
export const postUserData = router.post('/addUser', addUserData);

import express from "express";
const router = express.Router();
import { addSchool, listSchools } from "../controllers/schoolController.js";

/**
 * @swagger
 * /addSchool:
 *   post:
 *     summary: Add a new school
 *     tags: [Schools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *               - latitude
 *               - longitude
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               latitude:
 *                 type: Number
 *               longitude:
 *                 type: Number
 *     responses:
 *       200:
 *         description: School added successfully
 *       400:
 *         description: Validation error
 */
router.post("/addSchool", addSchool);

/**
 * @swagger
 * /listSchools:
 *   get:
 *     summary: List all schools near a location
 *     tags: [Schools]
 *     parameters:
 *       - in: query
 *         name: latitude
 *         schema:
 *           type: Number
 *         required: true
 *         description: User's latitude
 *       - in: query
 *         name: longitude
 *         schema:
 *           type: Number
 *         required: true
 *         description: User's longitude
 *     responses:
 *       200:
 *         description: A list of schools
 *       400:
 *         description: Missing or invalid query parameters
 */
router.get("/listSchools", listSchools);

export default router;

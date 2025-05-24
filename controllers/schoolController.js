import db from "../db/config.js";
import calculateDistance from "./../utils/distance.js";

//  Add School Controller
export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    //  Step 1: Validate input types and non-empty values
    if (
      typeof name !== "string" ||
      name.trim() === "" ||
      typeof address !== "string" ||
      address.trim() === "" ||
      typeof latitude !== "number" ||
      isNaN(latitude) ||
      typeof longitude !== "number" ||
      isNaN(longitude)
    ) {
      return res.status(400).json({
        error:
          "Invalid input: Ensure name, address, latitude, and longitude are properly provided.",
      });
    }

    //  Step 2: Insert into DB
    const query = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [
      name.trim(),
      address.trim(),
      latitude,
      longitude,
    ]);

    //  Step 3: Respond with success message
    return res.status(201).json({
      message: "School added successfully",
      schoolId: result.insertId,
    });
  } catch (err) {
    console.error("Error in addSchool:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    //  Validate user input
    if (isNaN(userLat) || isNaN(userLon)) {
      return res.status(400).json({ error: "Invalid coordinates" });
    }

    //  Fetch all schools
    const [schools] = await db.execute("SELECT * FROM schools");

    //  Calculate distance for each and sort
    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);
  } catch (err) {
    console.error("Error in listSchools:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

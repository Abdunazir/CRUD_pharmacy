const db = require("../config/db");

exports.getAllMedicine_type = (req, res) => {
  db.query("SELECT * FROM medicine_type", (error, results) => {
    if (error) {
      console.log("Error getting Medicine Type: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createMedicine_type = (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO medicine_type (name) VALUES(?)", [name], (error) => {
    if (error) {
      console.log("Error create Medicine Type : ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({
      message: "Medicine Type created Successfully",
    });
  });
};

exports.getMedicine_typeById = (req, res) => {
  const medtId = req.params.id;
  db.query(
    "SELECT * FROM medicine_type WHERE id=?",
    [medtId],
    (error, results) => {
      if (error) {
        console.log("Error get by id medicine_type: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Not Found!" });
      }
      res.json(results);
    }
  );
};

exports.updateMedicine_typeById = (req, res) => {
  const medtId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicine_type SET name=? WHERE id=?",
    [name, medtId],
    (error, results) => {
      if (error) {
        console.log("Error Updating medicine_type: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Not Found !" });
      }
      res.json({ message: "medicine_type updated Successfully" });
    }
  );
};

exports.deleteMedicine_typeById = (req, res) => {
  const medtId = req.params.id;
  db.query(
    "DELETE FROM medicine_type WHERE id=?",
    [medtId],
    (error, results) => {
      if (error) {
        console.log("Error Deleting : ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Not found!" });
      }
      res.json({ message: "Deleted Successfully" });
    }
  );
};

const db = require("../config/db");

exports.getAllRegion = (req, res) => {
  db.query("SELECT * FROM region", (error, results) => {
    if (error) {
      console.log("Error getting region: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createRegion = (req, res) => {
  const { id, name } = req.body;
  db.query("INSERT INTO region (id,name) VALUES(?,?)", [id, name], (error) => {
    if (error) {
      console.log("Error create region: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({
      message: "Region created Successfully",
    });
  });
};

exports.getRegionById = (req, res) => {
  const regionId = req.params.id;
  db.query("SELECT * FROM region WHERE id=?", [regionId], (error, results) => {
    if (error) {
      console.log("Error get region by id: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Region not found !" });
    }
    res.json(results[0]);
  });
};

exports.updateRegionById = (req, res) => {
  const regionId = req.params.id;
  const { id, name } = req.body;
  db.query(
    "UPDATE region set id=? , name=? WHERE id=?",
    [id, name, regionId],
    (error) => {
      if (error) {
        console.log("Error updating region: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Region updated Successfully" });
    }
  );
};

exports.deleteRegionById = (req, res) => {
  const regionId = req.params.id;
  db.query("DELETE FROM region WHERE id=?", [regionId], (error, results) => {
    if (error) {
      console.log("Error deleting region: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found!" });
    }
    res.json({ message: "Deleted Successfully" });
  });
};

const db = require("../config/db");

exports.getAllDistrict = (req, res) => {
  db.query("select * from district", (error, results) => {
    if (error) {
      console.log("Getting Information Error: ", error);
      return res.status(500).json({ error: "Interval Server Error" });
    }
    res.json(results);
  });
};

exports.createDistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "insert into district(name,region_id) values(?,?)",
    [name, region_id],
    (error, results) => {
      if (error) {
        console.log("Inserting error: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Insered Successfully" });
    }
  );
};

exports.getDistrictById = (req, res) => {
  const dicId = req.params.id;
  db.query("select * from district where id=?", [dicId], (error, results) => {
    if (error) {
      console.log("Getting error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Not found!" });
    }
    res.json(results);
  });
};

exports.updateDistrictById = (req, res) => {
  const dicId = req.params.id;
  const { name, region_id } = req.body;
  db.query(
    "update district set name=?,region_id=? where id=?",
    [name, region_id, dicId],
    (error, results) => {
      if (error) {
        console.log("Updating error: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Not found!" });
      }
      res.json({ message: "Updating Successfully" });
    }
  );
};

exports.deleteDistrictById = (req, res) => {
  const dicId = req.params.id;
  db.query("delete from district where id=?", [dicId], (error, results) => {
    if (error) {
      console.log("Updating error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found!" });
    }
    res.json({ message: "Deleting Successfully" });
  });
};

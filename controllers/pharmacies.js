const db = require("../config/db");

exports.getAllPharmacies = (req, res) => {
  db.query("select * from pharmacies", (error, results) => {
    if (error) {
      console.log("Error getting info", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.getPharmaciesById = (req, res) => {
  const pharmId = req.params.id;
  db.query(
    "select * from pharmacies where id=?",
    [pharmId],
    (error, results) => {
      if (error) {
        console.log("getting info error: ", error);
        return res.status(500).json({ error: "Interval Server Error" });
      }
      if (results.affectedRows == 0) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json(results);
    }
  );
};

exports.createPharmacies = (req, res) => {
  console.log("come");
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "insert into pharmacies(name,address,location,phone,email,region_id,district_id) values(?,?,?,?,?,?,?)",
    [name, address, location, phone, email, region_id, district_id],
    (error) => {
      if (error) {
        console.log("insert info error: ", error);
        return res.status(500).json({ error: "Interval Server Error" });
      }
      res.json({ message: "insert info successfully" });
    }
  );
};

exports.updatePharmaciesById = (req, res) => {
  const pharmId = req.params.id;
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "update pharmacies set name=?, address=?, location=?, phone=?, email=?, region_id=?, district_id=? where id=?",
    [name, address, location, phone, email, region_id, district_id, pharmId],
    (error, results) => {
      if (error) {
        console.log("updating info error: ", error);
        return res.status(500).json({ error: "Interval Server Error" });
      }
      if (results.affectedRows == 0) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json({ message: "Successfully updated" });
    }
  );
};

exports.deletePharmaciesById = (req, res) => {
  const pharmId = req.params.id;
  db.query("delete from pharmacies where id=?", [pharmId], (error, results) => {
    if (error) {
      console.log("deleting info error: ", error);
      return res.status(500).json({ error: "Interval Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json({ message: "Successfully deleted" });
  });
};

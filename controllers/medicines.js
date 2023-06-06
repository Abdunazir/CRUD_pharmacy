const db = require("../config/db");

// "select medicines.name, pharmacies.name,pharmacies.address,pharmacies.location from medicines join stock on stock.medicine_id = medicines.id join pharmacies on stock.pharmacy_id = pharmacies.id where name=?"

exports.getInfoByName = (req, res) => {
  const { name } = req.body;
  db.query(
    "select medicines.name, pharmacies.name,pharmacies.address,pharmacies.location from medicines join stock on stock.medicine_id = medicines.id join pharmacies on stock.pharmacy_id = pharmacies.id where medicines.name=?",
    [name],
    (error, results) => {
      if (error) {
        console.log("Error getting info", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ results });
    }
  );
};

exports.getAllMedicines = (req, res) => {
  db.query("select * from medicines", (error, results) => {
    if (error) {
      console.log("Error getting info", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.getMedicinesById = (req, res) => {
  const medId = req.params.id;
  db.query("select * from medicines where id=?", [medId], (error, results) => {
    if (error) {
      console.log("Error getting info", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(results);
  });
};

exports.createMedicine = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "insert into medicines(name,manufacturer,medicine_type_id,price,expiry_date,info) values(?,?,?,?,?,?)",
    [name, manufacturer, medicine_type_id, price, expiry_date, info],
    (error, results) => {
      if (error) {
        console.log("Error insert info", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "insert info Succesfully" });
    }
  );
};

exports.updateMedicineById = (req, res) => {
  const medId = req.params.id;
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "update medicines set name=?, manufacturer=?, medicine_type_id=?, price=?, expiry_date=?, info=? where id=?",
    [name, manufacturer, medicine_type_id, price, expiry_date, info, medId],
    (error, results) => {
      if (error) {
        console.log("Error updating info", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.affectedRows == 0) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json({ message: "Successfully Updated" });
    }
  );
};

exports.deleteMedicineById = (req, res) => {
  const medId = req.params.id;
  db.query("delete from medicines where id=?", [medId], (error, results) => {
    if (error) {
      console.log("Error updating info", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json({ message: "Succesfully deleted" });
  });
};

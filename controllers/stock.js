const db = require("../config/db");

exports.getAllStock = (req, res) => {
  db.query("select * from stock", (error, results) => {
    if (error) {
      console.log("Getting stock error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createStock = (req, res) => {
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "insert into stock(pharmacy_id,medicine_id,quantity) values(?,?,?)",
    [pharmacy_id, medicine_id, quantity],
    (error) => {
      if (error) {
        console.log("Insert item error: ", error);
        return res.status(500).json({ error: "Inerval Server Error" });
      }
      res.json({ message: "Insert info successfully" });
    }
  );
};

exports.getStockById = (req, res) => {
  const stockId = req.params.id;
  db.query("select * from stock where id=?", [stockId], (error, results) => {
    if (error) {
      console.log("Error getting region: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(results);
  });
};

exports.updateStockById = (req, res) => {
  const stockId = req.params.id;
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "update stock set pharmacy_id=?, medicine_id=?, quantity=? where id=?",
    [pharmacy_id, medicine_id, quantity, stockId],
    (error, results) => {
      if (error) {
        console.log("Error getting region: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.affectedRows == 0) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json({ message: "Successfully updated" });
    }
  );
};

exports.deleteSrockByid = (req, res) => {
  const stockId = req.params.id;
  db.query("delete from stock where id=?", [stockId], (error, results) => {
    if (error) {
      console.log("Error deleting region: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows == 0) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json({ message: "Successfully deleted" });
  });
};

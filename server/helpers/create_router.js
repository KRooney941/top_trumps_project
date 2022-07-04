const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

  const router = express.Router();


  //index route
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });
 
  //show route
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  //Create route. collection is database information. puts the data from result(res is short for result) to the top of the list at the result.ops. 
  router.post('/', (req, res) => {
    const newData = req.body; 
    collection
    .insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });


  //Destroy route. Use collection (this is basically our seeds) as that's what we want to change. Line 56 makes changes to json. 
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    collection
    .deleteOne({_id: ObjectId(id)})
    .then((docs) => result.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  //Update route. 
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
    .updateOne(
      {_id: ObjectId(id)},
      {$set: updatedData}
    )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });    
  })

  return router;
};




module.exports = createRouter;
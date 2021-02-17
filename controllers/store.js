const express = require('express');
const router = express.Router();
const Store = require('../models/storeSchema');

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// router.get('/store', (req, res) => {
//   Store.create(
//     [
//       {
//         name: 'apple',
//         description: 'red',
//         img:
//           'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/10896998_XL1.jpg',
//         price: 100,
//         qty: 10,
//       },
//       {
//         name: 'grape',
//         entry: 'green',
//         img:
//           'https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg',
//         price: 50,
//         qty: 0,
//       },
//       {
//         name: 'avocado',
//         entry: 'green',
//         img:
//           'https://solidstarts.com/wp-content/uploads/introducing-avocado-to-babies.jpg',
//         price: 150,
//         qty: 20,
//       },
//     ],
//     (err, data) => {
//       res.redirect('/store');
//     },
//   );
// });

router.post('/', (req, res) => {
  Store.create(req.body, (err, createdStore) => {
    res.redirect('/store');
  });
});

router.get('/', (req, res) => {
  Store.find({}, (err, allStore) => {
    res.render('index.ejs', {
      store: allStore,
    });
  });
});

router.get('/:id', (req, res) => {
  Store.findById(req.params.id, (err, foundStore) => {
    res.render('show.ejs', {
      store: foundStore,
    });
  });
});

router.delete('/:id', (req, res) => {
  Store.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/store');
  });
});

router.get('/:id/edit', (req, res) => {
  Store.findById(req.params.id, (err, foundStore) => {
    //find the store
    res.render('edit.ejs', {
      store: foundStore, //pass in found Store
    });
  });
});

router.put('/:id', (req, res) => {
  Store.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect('/store');
    },
  );
});

module.exports = router;

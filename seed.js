const db = require ('./models');

 db.sync({force: true})
  .then(async () => {
    console.log('Database synced!')
    db.close() // only if using a version of node without `finally`
    let tomato = Vegetable.create({
      name: 'tomato',
      color: 'red',
      planted_on: '11/12/18'
    })
    // tomato = await tomato.save()

  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close()
  })

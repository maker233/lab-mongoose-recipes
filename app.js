const mongoose = require('mongoose');
const data = require('./data');
const Recipe = require('./models/recipes')

mongoose.connect('mongodb://localhost/recipeApp')
    .then(() => {
        console.log('Connected to Mongo!');

        Recipe.create({ title: 'Paella', cuisine: "Spanish" })
            .then(recipe => { console.log('El registro se ha creado con éxito con este valor: ', recipe) })
            .catch(err => { console.log('Un error ha ocurrido, vamos a morir todos!!! Sale este error: ', err) });

        Recipe.insertMany(data)
            .then(recipe => { console.log('Se ha importado el array copn éxito: ', recipe) })
            .catch(err => { console.log('La hemos liao pollito:', err) });

        Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
            .then((update) => { console.log('La duracion del rigatonni se ha actualizado perfect!!', update) })
            .catch(err => { console.log('ERRROOOOOOOOOOOOOR!!!:', err) })

        Recipe.remove({ title: { $eq: 'Carrot Cake' } })
            .then(deleted => { console.log('A tomar vientos!!!', deleted) })
            .catch(err => { console.log('No se ha borrado nada!!:', err) });


    }).catch(err => {
        console.error('Error connecting to mongo', err);
    })

mongoose.logout(
    console.log('Chao pescao!')
)
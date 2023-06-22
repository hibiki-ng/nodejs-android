var express = require('express');
var router = express.Router();
// use axios
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Homepage');
});

router.get('/test', (req, res) => {
  res.send('Working!');
});

router.get("/books", async (req, res) => {
  const booksArray = [
    { 
      id: 1,
      title: 'EXPLOITEZ AU MIEUX CHAT GPT',
      author: 'Jean-Luc Harais',
      genre: 'Pédagogie et apprentissage',
      synopsis: 'Dans ce livre, vous découvrirez les possibilités illimitées de ChatGPT, un modèle de langue développé par OpenAI...'
    },
    {
      id: 2,
      title: 'Le temps des tempêtes',
      author: 'Nicolas Sarkozy',
      genre: 'Politique',
      synopsis: 'À compter du 16 mai 2007, j\'étais seul. Bien sûr, il y avait le peuple français, mais sa force collective ne s\'exprime pas dans le quotidien des décisions à prendre, ou des nominations à effectuer. J\'avais une équipe, des conseillers, des amis...'
    },
    {
      id: 3,
      title: 'The Witcher: Le Dernier Vœu',
      author: 'Andrzej Sapkowski',
      genre: 'Fantaisie',
      synopsis: 'Geralt de Riv, le sorceleur, mène sa mission sans faillir dans un monde hostile et corrompu, dépourvu d\'espoir. Sa renommée légendaire n\'a d\'égales que la peur et la haine qu\'il inspire chez ceux qu\'il traque sans pitié.'
    },
    {
      id: 4,
      title: 'Guide Corée du Nord 2019 Petit Futé',
      author: 'Petit Futé',
      genre: 'Tourisme et voyages',
      synopsis: 'La Corée du Nord fait constamment parler d\'elle, à travers ses gesticulations nucléaires et des relations difficiles avec ses voisins et les Etats-Unis. Mais que sait-on réellement de ce pays, sinon son régime?'
    },
    {
      id: 5,
      title: 'Pablo Escobar, trafiquant de cocaïne',
      author: 'Thierry Noël',
      genre: 'Biographie',
      synopsis: 'Il commandita un attentat contre un avion de ligne, fit assassiner, outre ses concurrents, des hommes d\'État, des policiers ou des journalistes qui tentaient de dénoncer ses exactions. Dans la Colombie des années 1970 et 1980, Pablo Escobar s\'est imposé comme un trafiquant hors normes, non seulement un baron de la cocaïne à la tête de l\'un des plus puissants réseaux du pays, mais aussi un combattant sans scrupules, à l\'origine de la mort ou de la disparition de milliers de personnes.'
    },
  ];
  
  res.json(booksArray);
});

module.exports = router;

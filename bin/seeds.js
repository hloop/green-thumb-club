const mongoose = require('mongoose');
const Plant    = require('../models/plant');

const dbName = 'green-thumb-club';
mongoose.connect(`mongodb://localhost/${dbName}`);

const plants = [
  {
    species : 'Vanda aliceae',
    family: 'Orchidaceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Level 5',
    image: '../images/vanda-aliceae.jpg',
  },
  {
    species : 'Asplenium nidus',
    family: 'Aspleniaceae',
    light: 'Partial to full shade',
    climate: 'Tropical',
    maintenance: 'Level 1',
    image: '../images/asplenium-nidus.jpg',

  },
  {
    species : 'Polytrichum juniperinum',
    family: 'Polytrichaceae',
    light: 'Bright light to full shade',
    climate: 'arctic, boreal, cool temperate, cool semiarid, and cool mesothermal',
    maintenance: 'Level 1',
    image: '../images/polytrichum-juniperinum.jpg',
  },
  {
    species : 'Ravenea rivularis',
    family: 'Arecaceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Level 3',
    image: '../images/ravenea-rivularis.jpg',
  },
  {
    species : 'Cordyline fruticosa',
    family: 'Asparagaceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Level 3',
    image: '../images/cordyline-fruticosa.jpg',
  },
  {
    species : 'Echinopsis pachanoi',
    family: 'Cactaceae',
    light: 'Direct sunlight',
    climate: 'Arid',
    maintenance: 'Level 1',
    image: '../images/echinopsis-pachanoi.jpg',
  },
  {
    species : 'Opuntia microdasys',
    family: 'Cactaceae',
    light: 'Direct sunlight',
    climate: 'Arid',
    maintenance: 'Level 1',
    image: '../images/opuntia-microdasys.jpg',
  },
  {
    species : 'Philodendron hederaceum',
    family: 'Araceae',
    light: 'Partial to full shade',
    climate: 'Tropical',
    maintenance: 'Level 2',
    image: '../images/philodendron-hederaceum.jpg',
  },
  {
    species : 'Monstera deliciosa',
    family: 'Araceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Level 3',
    image: '../images/monstera-deliciosa.jpeg',
  },
  {
    species : 'Crassula ovata',
    family: 'Crassulaceae',
    light: 'Direct sunlight',
    climate: 'Cool semiarid and cool mesothermal',
    maintenance: 'Level 1',
    image: '../images/crassula-ovata.jpg',
  },
  {
    species : 'Ficus lyrata',
    family: 'Moraceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Level 3',
    image: '../images/ficus-lyrata.png'
  },
  {
    species : 'Aloe vera',
    family: 'Asphodelaceae',
    light: 'Direct sunlight',
    climate: 'Arid, tropical, and mesothermal',
    maintenance: 'Level 1',
    image: '../images/aloe-vera.jpg'
  },
]

Plant.create(plants)
.then((result)=>{
    console.log(`created ${result.length} plants`);
    mongoose.disconnect();
})
.catch((err)=>{
    console.log(err)
})
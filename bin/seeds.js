const mongoose = require('mongoose');
const Plant    = require('../models/plant');

mongoose.connect('mongodb://localhost/green-thumb-club');

// mongoose.connect(process.env.MONGODB_URI);

const plants = [
  {
    species : 'Asplenium nidus',
    family: 'Aspleniaceae',
    light: 'Partial to full shade',
    climate: 'Tropical',
    maintenance: 'Low',
    image: '../images/asplenium-nidus.jpg',
  },
  {
    species : 'Polytrichum juniperinum',
    family: 'Polytrichaceae',
    light: 'Bright light to full shade',
    climate: 'Boreal, temperate, semiarid, and mesothermal',
    maintenance: 'Low',
    image: '../images/polytrichum-juniperinum.jpg',
  },
  {
    species : 'Ravenea rivularis',
    family: 'Arecaceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Medium',
    image: '../images/ravenea-rivularis.jpg',
  },
  {
    species : 'Cordyline fruticosa',
    family: 'Asparagaceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Medium',
    image: '../images/cordyline-fruticosa.jpg',
  },
  {
    species : 'Echinopsis pachanoi',
    family: 'Cactaceae',
    light: 'Direct sunlight',
    climate: 'Arid',
    maintenance: 'Low',
    image: '../images/echinopsis-pachanoi.jpg',
  },
  {
    species : 'Opuntia microdasys',
    family: 'Cactaceae',
    light: 'Direct sunlight',
    climate: 'Arid',
    maintenance: 'Low',
    image: '../images/opuntia-microdasys.jpg',
  },
  {
    species : 'Philodendron hederaceum',
    family: 'Araceae',
    light: 'Partial to full shade',
    climate: 'Tropical',
    maintenance: 'Low',
    image: '../images/philodendron-hederaceum.jpg',
  },
  {
    species : 'Monstera deliciosa',
    family: 'Araceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Medium',
    image: '../images/monstera-deliciosa.jpeg',
  },
  {
    species : 'Crassula ovata',
    family: 'Crassulaceae',
    light: 'Direct sunlight',
    climate: 'Semiarid and mesothermal',
    maintenance: 'Low',
    image: '../images/crassula-ovata.jpg',
  },
  {
    species : 'Euphorbia lactea',
    family: 'Euphorbiaceae',
    light: 'Direct sunlight',
    climate: 'Arid',
    maintenance: 'Low',
    image: '../images/euphorbia-lactea.jpg'
  },
  {
    species : 'Ficus lyrata',
    family: 'Moraceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'Medium',
    image: '../images/ficus-lyrata.png'
  },
  {
    species : 'Vanda aliceae',
    family: 'Orchidaceae',
    light: 'Bright light',
    climate: 'Tropical',
    maintenance: 'High',
    image: '../images/vanda-aliceae.jpg',
  },
  {
    species : 'Aloe vera',
    family: 'Asphodelaceae',
    light: 'Direct sunlight',
    climate: 'Arid, tropical, and mesothermal',
    maintenance: 'Low',
    image: '../images/aloe-vera.jpg'
  },
  {
    species : 'Saintpaulia',
    family: 'Gesneriaceae',
    light: 'Direct sunlight',
    climate: 'Tropical',
    maintenance: 'Low',
    image: '../images/saintpaulia.jpg'
  },
  {
    species : 'Sathiphyllum',
    family: 'Araceae',
    light: 'Partial to full shade',
    climate: 'Topical',
    maintenance: 'Medium',
    image: '../images/spathiphyllum.jpg'
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
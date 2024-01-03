import Category from "./models/category";

const categoryOne = new Category("Car");
var ListCars = ["Car Painting", "Engine Changes", "Car Rentals", "Car Sells"];
categoryOne.setList(ListCars);

const categoryTwo = new Category("Gaming");
var ListGames = [
  "Game Creation",
  "Game Editing",
  "Audio Spicing",
  "Game Matrix",
];
categoryTwo.setList(ListGames);

const categoryThree = new Category("Crypto");
var ListCrypto = [
  "money transfer",
  "Smart Contracts",
  "Internet Of Things",
  "Personal Identity Security",
  "HealthCare",
  "Logistics",
];
categoryThree.setList(ListCrypto);

const categoryFour = new Category("Data");
var ListData = [
  "Internet Searching",
  "Security",
  "Transportation",
  "Manufacturing",
  "Energy",
  "Education",
];
categoryFour.setList(ListData);

const categoryFive = new Category("Drone");
var ListDrone = [
  "traffic surveillance",
  "cargo",
  "entertainment",
  "security",
  "surveillance",
];
categoryFive.setList(ListDrone);

const categorySix = new Category("Housing");
var ListHousing = [
  "House Leasing",
  "Rentals",
  "House Furnishing",
  "House Building",
];
categorySix.setList(ListHousing);

const categorySeven = new Category("Logistics");
var ListLogistics = [
  "Warehousing",
  "Inventory Management",
  "Transportation",
  "Distribution",
];
categorySeven.setList(ListLogistics);

const categoryEight = new Category("Media");
var ListMedia = [
  "Public Opinion",
  "Providing Entertainment",
  "Delivering News",
  "VideoGraphy",
  "Social Media",
];
categoryEight.setList(ListMedia);

const categoryNine = new Category("Medical");
var ListMedical = [
  "Xray Scanning",
  "Sickness Treatment",
  "Medical Check Up",
  "Other Medical Services",
];
categoryNine.setList(ListMedical);

const categoryTen = new Category("Metaverse");
var ListMetaverse = [
  "Metaverse Services",
  "Metaverse Consulting",
  "3D modelling",
  "Customer Services",
];
categoryTen.setList(ListMetaverse);

const categoryEleven = new Category("Development");
var ListDevelopment = [
  "Game Development",
  "Web Development",
  "Mobile app development",
  "BackEnd Development",
];
categoryEleven.setList(ListDevelopment);

var categories = [
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
  categoryFive,
  categorySix,
  categorySeven,
  categoryEight,
  categoryNine,
  categoryTen,
];

export default categories;

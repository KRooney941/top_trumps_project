use top_trumps;
db.dropDatabase();

db.players.insertMany([
    {
      name: "Kieran",
      avatar: "https://ibb.co/NKGV9jc",
      wins: 3,
      draws: 1,
      losses: 2, 
      deck: []
    },
    {
      name: "Lou",
      avatar: "https://ibb.co/3vTW1M9",
      wins: 5,
      draws: 0,
      losses: 0, 
      deck: []
    },
    {
      name: "Michael",
      avatar: "https://ibb.co/fdWK8FN",
      wins: 7,
      draws: 1,
      losses: 1, 
      deck: []
    }
  ]);

  db.cards.insertMany([
    {
     name: "Ally",
     sprite: "https://ibb.co/2kdZF4L",
     skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
    {
      name: "Andrew",
      sprite: "https://ibb.co/2kdZF4L", 
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
    {
      name: "Bob",
      sprite: "https://ibb.co/2kdZF4L",
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
  {
      name: "Cammy",
      sprite: "https://ibb.co/2kdZF4L",
      skills: [ {"power": 25},
    {"top_spin": 25},
    {"back_spin": 40},
    {"smash": 10},
]},
{
      name: "Chris",
      sprite: "https://ibb.co/2kdZF4L",
      skills: [ {"power": 25},
    {"top_spin": 25},
    {"back_spin": 40},
    {"smash": 10},
]},
{
      name: "David",
      sprite: "https://ibb.co/2kdZF4L",
      skills: [ {"power": 25},
    {"top_spin": 25},
    {"back_spin": 40},
    {"smash": 10},
    ]},
    {
      name: "Dev",
      sprite: "https://ibb.co/2kdZF4L",
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
  {
    name: "Ewan",
    sprite: "https://ibb.co/2kdZF4L",
    skills: [ {"power": 25},
   {"top_spin": 25},
   {"back_spin": 40},
   {"smash": 10},
]},
{
  name: "Iain H",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]}, 
{
  name: "Ian W",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Jonny",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},{
  name: "Josh",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Ken",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Kieran",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Lou",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Michael",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Nadia",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Nick",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Shuna",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Simona",
  sprite: "https://ibb.co/2kdZF4L",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 40},
 {"smash": 10},
]}
  ]);
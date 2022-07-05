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
     sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
     skills: [ {"power": 15},
     {"top_spin": 35},
     {"back_spin": 30},
     {"smash": 20},
  ]},
    {
      name: "Andrew",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png", 
      skills: [ {"power": 40},
     {"top_spin": 10},
     {"back_spin": 10},
     {"smash": 40},
  ]},
    {
      name: "Bob",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 20},
     {"top_spin": 30},
     {"back_spin": 30},
     {"smash": 20},
  ]},
  {
      name: "Cammy",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 40},
    {"top_spin": 40},
    {"back_spin": 10},
    {"smash": 10},
]},
{
      name: "Chris",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 25},
    {"top_spin": 25},
    {"back_spin": 40},
    {"smash": 10},
]},
{
      name: "David",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 25},
    {"top_spin": 25},
    {"back_spin": 25},
    {"smash": 25},
    ]},
    {
      name: "Dev",
      sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
      skills: [ {"power": 30},
     {"top_spin": 30},
     {"back_spin": 20},
     {"smash": 20},
  ]},
  {
    name: "Ewan",
    sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
    skills: [ {"power": 35},
   {"top_spin": 35},
   {"back_spin": 15},
   {"smash": 15},
]},
{
  name: "Gillian",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 30},
 {"top_spin": 20},
 {"back_spin": 30},
 {"smash": 20},
]},
{
  name: "Iain H",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 50},
 {"top_spin": 15},
 {"back_spin": 15},
 {"smash": 20},
]}, 
{
  name: "Ian W",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 60},
 {"top_spin": 20},
 {"back_spin": 10},
 {"smash": 10},
]},
{
  name: "Jonny",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 40},
 {"top_spin": 40},
 {"back_spin": 15},
 {"smash": 5},
]},{
  name: "Josh",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 20},
 {"top_spin": 20},
 {"back_spin": 50},
 {"smash": 10},
]},
{
  name: "Ken",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 30},
 {"top_spin": 20},
 {"back_spin": 40},
 {"smash": 10},
]},
{
  name: "Kieran",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 10},
 {"smash": 40},
]},
{
  name: "Lou",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 35},
 {"top_spin": 15},
 {"back_spin": 25},
 {"smash": 25},
]},
{
  name: "Michael",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 30},
 {"smash": 20},
]},
{
  name: "Nadia",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 20},
 {"top_spin": 20},
 {"back_spin": 30},
 {"smash": 30},
]},
{
  name: "Nick",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 20},
 {"top_spin": 20},
 {"back_spin": 50},
 {"smash": 10},
]},
{
  name: "Shuna",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 25},
 {"top_spin": 25},
 {"back_spin": 20},
 {"smash": 30},
]},
{
  name: "Simona",
  sprite: "https://i.ibb.co/02NxzQZ/anon-avatar.png",
  skills: [ {"power": 40},
 {"top_spin": 20},
 {"back_spin": 10},
 {"smash": 30},
]}
  ]);

db.avatars.insertMany([
  { 
    name: "car",
    sprite: "https://i.ibb.co/1r08fYN/Car.jpg"
  },
  {
    name: "sun",
    sprite: "https://i.ibb.co/2FNmw7N/Sun.jpg"
  },
  {
    name: "dog",
    sprite: "https://i.ibb.co/jrSKwr2/Dog.jpg"
  },
  {
    name: "sunglasses",
    sprite: "https://i.ibb.co/zPpCXHP/Sunglasses.jpg"
  },
  {
    name: "nerd",
    sprite: "https://i.ibb.co/Fqxzp0j/Nerd.jpg"
  },
  {
    name: "hotdog",
    sprite: "https://i.ibb.co/vBZGZLg/HotDog.jpg"
  },
  {
    name: "rainbow",
    sprite: "https://i.ibb.co/0h62cdL/Rainbow.jpg"
  },
  {
    name: "poop",
    sprite: "https://i.ibb.co/QbQH4RR/Poop.jpg"
  },
  {
    name: "pizza",
    sprite: "https://i.ibb.co/WxkjrnF/Pizza.jpg"
  },
  {
    name: "hand",
    sprite: "https://i.ibb.co/NxhgnvW/Hand.jpg"
  },
  {
    name: "space-invader",
    sprite: "https://i.ibb.co/80F7bcm/Space-Invader.jpg"
  },
  {
    name: "robot",
    sprite: "https://i.ibb.co/QDYw4qh/Robot.jpg"
  },
  {
    name: "football",
    sprite: "https://i.ibb.co/T8FZLv4/Football.jpg"
  },
  {
    name: "starstruck",
    sprite: "https://i.ibb.co/J7pYHDN/Star-Struck.jpg"
  },
  {
    name: "ghost",
    sprite: "https://i.ibb.co/99NzM06/Ghost.jpg"
  },
  {
    name: "skull",
    sprite: "https://i.ibb.co/PDRJ3Wp/Skull.jpg"
  },
  
]);
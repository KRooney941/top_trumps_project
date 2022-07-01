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
     name: "John",
     sprite: "https://ibb.co/54Hj4sH",
     skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
    {
      name: "Beth",
      sprite: "https://ibb.co/YpwhDZ1", 
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
    {
      name: "Craig",
      sprite: "https://ibb.co/55VGDzv",
      skills: [ {"power": 25},
     {"top_spin": 25},
     {"back_spin": 40},
     {"smash": 10},
  ]},
  ]);
const baseURL = "http://localhost:9000/api/cards";

const GameService = {

    getCards() {
        return fetch(baseURL)
          .then(res => res.json());
    },
  
}

export default GameService;
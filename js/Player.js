class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.health = 500;
      this.punch = 0;

    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        health:this.health,
        punch:this.punch,
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    isTouching(o1,o2){
      if (o1.x - o2.x < o2.width/2 + o1.width/2)
      
        //&& o2.x - o1.x < o2.width/2 + o1.width/2)
        {
          return true;
      }
    }
  }
  
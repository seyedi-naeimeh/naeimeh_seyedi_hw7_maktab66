class Media {
    constructor(title) {
      this.title = title;
      
    }
  
    title() {
        
      return this.title;
    }
   
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this.author = author;
      this.pages = pages;
    }
  
    author() {
      return this.author;
    }
  
    pages() {
      return this.pages;
    }
  }
  

  
  class Film extends Media {
    constructor(director, title, runTime) {
      super(title);
      this.director = director;
      this.runTime = runTime;
    }
  
    director() {
      return this.director;
    }
  
    runTime() {
      return this.runTime;
    }
  }
  
 
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this.artist = artist;
      this.songs = songs;
    }
    artist() {
        return this.artist;
      }
    songs() {
        return this.songs;
      }
  }

  const circle = new Film('Speed', 'Jan de Bont', 116)
  console.log(circle)
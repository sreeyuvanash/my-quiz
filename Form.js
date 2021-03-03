class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h1');
      this.sre = createElement('h2');
        this.title = createElement('h1')
        
        //i am sree yuvanash......................
    }
    hide(){
      //this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h1')
      this.title.html("Quiz Game");
      this.title.position(canvas.width/2-45, 0,50,100);
  
      this.input.position(350,300);
      this.button.position(420,400);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();

        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(canvas.width-780, 50);

        this.sre.html("What is easy to get into, but hard to get out of ? ")
        this.sre.position(300, 200);

        this.b1 = createButton("Trouble")
        this.b1.position(100,400);

        this.b2 = createButton("Door")
        this.b2.position(300,450);

        this.b3 = createButton("Happy")
        this.b3.position(500,400);

        this.b4 = createButton("Sad")
        this.b4.position(700,450);

        this.b1.mousePressed(()=>{
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.title.hide()

            this.sre.hide()
            this.greeting.hide()
            back3.visible=true
           });
           this.b2.mousePressed(()=>{
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.sre.hide()
            this.greeting.hide()
            this.title.hide()

            sree.visible=true
           });
           this.b3.mousePressed(()=>{
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            sree.visible=true
            this.sre.hide()
            this.title.hide()

            this.greeting.hide()
           });
           this.b4.mousePressed(()=>{
            this.b1.hide()
            this.b2.hide()
            this.b3.hide()
            this.b4.hide()
            this.sre.hide()
            this.greeting.hide()
            this.title.hide()
            sree.visible=true
           });

      });
    
  
    }
  }
  

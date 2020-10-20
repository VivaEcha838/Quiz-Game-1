class Quiz{
    constructor(){
this.q1 = null;
    }
    display(){
        var question = createElement('h2');
        this.fetchQuestion();
        console.log(this.q1);
        question.html(this.q1)
        question.position(displayWidth / 2, displayHeight / 2);

    }
    fetchQuestion(){
 var questionFetchRef = database.ref("Questions/Question 1/Question Text");
 questionFetchRef.on("value",(data)=>{
     this.q1 = data.val();
     console.log(data.val());
     console.log(this.q1);
 })
    }
}
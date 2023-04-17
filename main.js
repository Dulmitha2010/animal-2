//https://teachablemachine.withgoogle.com/models/2Ugr5IVYm/
function startclassification()
{
    navigator.mediaDevices.getUserMedia({
     audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2Ugr5IVYm/model.json',modelready);

}
function modelready()
{
    classifier.classify(gotresults);
}
function gotresults(error,results)
{
    if(error)
    {
        console.error(error);

    }
    else
    {
        console.log(results);
        random_r=Math.floor(Math.random()* 255)+1;
        random_g=Math.floor(Math.random()* 255)+1;
        random_b=Math.floor(Math.random()* 255)+1;
        document.getElementById("result_label").innerHTML='I can hear'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy!'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("results_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("results_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img1=document.getElementById('ear');
       
     
        if(results[0].label=="dog")
        {
            img1.src='dog.png';
           
            
            
        }
        if(results[0].label=="cat")
        {
            img1.src='cat.png';
          
            
            
        }
        


    }
}
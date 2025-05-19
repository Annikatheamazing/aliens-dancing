function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O2ssA5AqU/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);

    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()* 255) + 1;
        random_number_g=Math.floor(Math.random()* 255) + 1;
        random_number_b=Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_lablel").innerHTML = 'I can hear -  '+
        results[0].label;
        document.getElementById("result_label").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";


        img = document.getElementById('alein1');
        img1 = document.getElementById('alein2');
        img2 = document.getElementById('alein3');
        img3= document.getElementById('alein4');

        if(results[0].label =="clapping"){
            img.src = 'aleins-01.gif';
            img1.src = 'aleins-02.png';
            img2.src = 'aleins-03.png';
            img3.src = 'aleins-04.png';
        }else if (results[0].label == "tapping"){
            img.src = 'aleins-01.png';
            img1.src = 'aleins-02.gif';
            img2.src = 'aleins-03.png';
            img3.src = 'aleins-04.png';   
        }
    else if (results[0].label == "snapping"){
        img.src = 'aleins-01.png';
        img1.src = 'aleins-02.png';
        img2.src = 'aleins-03.gif';
        img3.src = 'aleins-04.png';   
    }
else {
    img.src = 'aleins-01.png';
    img1.src = 'aleins-02.png';
    img2.src = 'aleins-03.png';
    img3.src = 'aleins-04.gif';   
}
    }
}

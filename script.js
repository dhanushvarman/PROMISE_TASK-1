var div=document.createElement("div");
div.setAttribute("id","div");

var h1=document.createElement("h1");
h1.innerHTML="PROMISE TASK-dICTIONARY";
h1.style.textAlign="center";
h1.style.marginBottom="50px";
h1.style.marginTop="50px";
h1.style.backgroundColor="orange";

var container=document.createElement("div");
container.classList.add("container");
container.setAttribute("id","container");

var row=document.createElement("div");
row.setAttribute("id","row");
row.classList.add("row");

container.append(row);
div.append(container);
document.body.append(h1,div);


let word="hello";

function foo(){
        var res=new Promise((reslove,reject)=>{
        reslove(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    }).then((data)=>{
        res1(data)
    }).catch((error)=>console.log(error));
}
foo();

async function res1(value){
    var url=await fetch(value);
    var result=await url.json();
    console.log(result);
    row.innerHTML=`
    <div class="card bg-light mb-3" style="max-width: 50rem;margin-top:100px;margin-left:170px">
        <div class="card-header" style="text-align:center;"><b>${result[0].word}</b></div>
        <div class="card-body">
            <h6 class="card-title"><b>DEFINITION-1:</b> </h6>
            <div>${result[0].meanings[2].definitions[0].definition}</div>
            <p class="card-title"><h6>EXAMPLE-1:</h6> ${result[0].meanings[2].definitions[0].example} </p>
            <div></div>
            <h6 class="card-title"><b>DEFINITION-2:</b> </h6>
            <div>${result[0].meanings[2].definitions[1].definition}</div>
            <p class="card-title"><h6>EXAMPLE-2:</h6> ${result[0].meanings[2].definitions[1].example} </p>
            <div></div>
            <h6 class="card-title"><b>DEFINITION-3:</b> </h6>
            <div>${result[0].meanings[2].definitions[2].definition}</div>
            <p class="card-title"><h6>EXAMPLE-3:</h6> ${result[0].meanings[2].definitions[2].example} </p>
            <div></div>
        </div>
    </div>`;
}



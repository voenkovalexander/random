document.getElementById("button").addEventListener("click", randomFunc);

function randomFunc(event){
    event.preventDefault();

     var par1 = Number(document.getElementById("par1").value);
    var par2 = Number(document.getElementById("par2").value);

    var res = Math.round(Math.random() * (par2 - par1) + par1);

    document.getElementById("output").innerHTML = res;
}


document.getElementById("dark-button").addEventListener("click", darkThemeFunc);

function darkThemeFunc(event) {
    event.preventDefault();

    document.getElementById('html').classList.toggle("dark-theme");
}


function CalLength(){
    var s = document.getElementById("str").value
    if(s){
        document.getElementById("lans").innerHTML = s.length
    }else{
        alert("Please a string");
    }
}
function RevNumber(){
    var num = document.getElementById("str2").value
    let newNum = "";
    if(num){
        for(let i = num.length-1;i>=0;i--){
            newNum += num[i];
        }
        document.getElementById("revans").innerHTML = newNum;
    }else{
        alert("Please enter a number");
    }
}
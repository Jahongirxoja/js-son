var num1 = +prompt('son kirgazing 1')
var num2 = +prompt('son kirgazing 2')
var num3 = +prompt('son kirgazing 3')


if((num1 < num2 && num1 > num3) ||( num1 > num2 && num1 < num3) && !isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
    alert('orta qiymat ' + num1)
}else if((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)&& !isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    alert('orta qiiymat ' + num2)
}else if((num3 < num1 && num3 > num3) || (num3 >num1 && num2 <num3)&& !isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    alert('orta qiiymat ' + num3)
}else {
    if(isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.error('xato')
    }else if(!isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.error('ikinci ucinci son emas')
    }else if(!isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.error('brinci ucinci son emas')
    }else if(!isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.error('brinci ikinci son emas')
    }else if(num1===num2 && num1 !== num3){
        alert('1bn2 brixil')
    }else if(num1===num3 && num1 !== num2){
        alert('1bn3 brixil')
    }else if(num3===num2 && num1 !== num1){
        alert('2bn3 brixil')
    }else if(num1===num2 && num1===num3 && num2===num3){
        alert('xamasi brxil')
    }
    else {
        console.error('siz teng sonlar yozdingiz')
    }
}
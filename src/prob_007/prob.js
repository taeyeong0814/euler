/**
 * 소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.
 * 이 때 10,001번째의 소수를 구하세요.
 **/


function solution() {
    //소수는 1과 자기자신으로만 나누어지는 수.
    // 2부터 시작해서 소수를 찾는데 10001번째의 소수 찾기.
    var count = 0;
    var number = 2;
    var flag = 0;
    var start = new Date();

    while(true) {
        for(var i = 2; i < number; i++) {
            if(number % i == 0) {
                flag = 1;
                break;
            }
        }

        if(flag == 0) {
            count++;
        }
        flag = 0;

        if(count == 10001) {
            var end = new Date();
            console.log(end-start+"ms");
            return number;
        }
        number++;
    }
}

console.log(solution());



function Che(num){
    let rst = true;

    for(let i=2; i<num; i++){
        if(num % i == 0){
            rst = false;
            break;
        }
    }

    return rst;
}

function rst(){
    let sosu = 0;
    let count = 1;

    for(let i=2; count<=10001; i++){
        if(Che(i)){
            sosu = i;
            count++;
        }
    }

    return sosu;
}

console.log(rst());
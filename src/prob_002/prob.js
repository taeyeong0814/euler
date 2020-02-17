/**
 * 피보나치 수열의 각 항은 바로 앞의 항 두 개를 더한 것이 됩니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 짝수이면서 4백만 이하인 모든 항을 더하면 얼마가 됩니까?
 *
 */

function mysolution() {

    var fibonaciIndex_1 = 1;
    var fibonaciIndex_2 = 2;
    var fibonaciIndex_3 = 0;
    var sum = 0;

    while ((fibonaciIndex_3 <= 4000000)) {

        fibonaciIndex_3 = fibonaciIndex_1 + fibonaciIndex_2;
        fibonaciIndex_1 = fibonaciIndex_2;
        fibonaciIndex_2 = fibonaciIndex_3;

        if(fibonaciIndex_1 % 2 == 0) {
            console.log("여긴 출력은 되냐???"+fibonaciIndex_1);
            sum += fibonaciIndex_1;
        }

    }
    return sum;
}

console.log("2번문제 : "+mysolution());

// 좋은 풀이라 복사
function solution() {

    var arr = [1, 2];
    var i = 1;

    while( arr[i] < 4000000){
        var val = arr[i] + arr[i-1]
        if(val > 4000000) break ;
        arr.push( val );
        i++;
    }

    console.log(arr);

    var sum = 0,
        len = arr.length;
    for(var i=0 ; i<len ; i++){
        var val = arr[i];
        if( val % 2 === 0){
            sum += val;
        }
    }
    return sum;

}

console.log(solution());


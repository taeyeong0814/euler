/** 1부터 10까지 자연수를 각각 제곱해 더하면 다음과 같습니다 (제곱의 합).
 *   12 + 22 + ... + 102 = 385
 *   1부터 10을 먼저 더한 다음에 그 결과를 제곱하면 다음과 같습니다 (합의 제곱).
 *   (1 + 2 + ... + 10)2 = 552 = 3025
 *   따라서 1부터 10까지 자연수에 대해 "합의 제곱"과 "제곱의 합" 의 차이는 3025 - 385 = 2640 이 됩니다.
 *   그러면 1부터 100까지 자연수에 대해 "합의 제곱"과 "제곱의 합"의 차이는 얼마입니까?
 **/


function solution() {
    //var a = Math.pow(2,2);
    // 제곱의 합 구하는 방법.
    var x = 1;
    var sum = 0;
    for(x; x<=100; x++) {
        sum+=x*x;
    }
    console.log("제곱의 합 : "+sum);
    // 합의 제곱 구하는 방법.
    var x = 1;
    var sum1 = 0;
    for(x; x<=100; x++) {
        sum1+=x;
    }
    console.log("합의 제곱 : "+sum1*sum1);

    var result = sum1*sum1-sum;

    return result;
}

console.log(solution());

function Anothersolution() {
    var sumsquare = 0,squaresum = 0;

    for (var i = 0; i <= 100; i++) {
        sumsquare += i;
        squaresum += i ** 2;
    }
    sumsquare *= sumsquare;

    return sumsquare-squaresum;
}

console.log(Anothersolution());
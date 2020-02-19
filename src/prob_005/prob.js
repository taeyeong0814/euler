/**
 * 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.
 * 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
 **/


function solution() {
    //먼저 1~10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520이므로 이것을 통해 로직 구현.
    //++ 1~20의 수를 그냥 나누어서 처리 하는 방법을 생각.
    var minNum = 0;

    for(var num = 10; ;num++) {
        if(num%1==0&&num%2==0&&num%3==0&&num%4==0&&num%5==0&&num%6==0&&num%7==0&&num%8==0&&num%9==0&&num%10==0
            &&num%11==0&&num%12==0&&num%13==0&&num%14==0&&num%15==0&&num%16==0&&num%17==0&&num%18==0&&num%19==0&&num%20==0) {
            minNum = num; break;
        }
    }
    return minNum;

}

console.log(solution());
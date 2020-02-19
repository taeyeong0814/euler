/**
 * 앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.
 * 두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 9009 (= 91 × 99) 입니다.
 * 세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?
 **/


//세 자리 수를 곱한 수가 가장 작고, 가장 큰 경우
//100*100=10000 , 999*999=998001

function getBigSymmetry() {
    //일단 모르니까 100부터 999까지 곱하는 계산식 만들기
    //근데 100*101 과 101*100은 같은 값이므로 중복은 제거해야 된다.

    //++ java의 toString 와 split의 개념을 이용하여 숫자를 문자열로 바꾸고 하나하나 분할하여 뒤집어 서로 비교.
    console.log("시작");
    var count = 1;
    var max = 0;
    for(var i = 100; i < 1000; i++) {
        for(var j = i; j < 1000; j++) {
            var result = i * j,
                str = result.toString(),
                strR = str.split('').reverse().join('');
            if( str === strR ){
                if( result > max )
                    max = result;
            }
            console.log("갯수 : "+count+" 결과 : "+result);
            count++;
        }
    }
    return max;
}

console.log(getBigSymmetry());
console.log("내 풀이 종료");

//괜찮은 풀이 방법.


function solution() {
    var numStart = 100;
    var numFinish = 1000;
    var max = 0;

    for( var i=numStart ; i<numFinish ; i++){

        for( var j=numStart ; j<numFinish ; j++){
            var val = i*j,
                str = val.toString(),
                strR = str.split('').reverse().join('');
            if( str === strR ){
                if( val > max )
                    max = val;
            }
        }

    }
    return max;

}

console.log( solution() );
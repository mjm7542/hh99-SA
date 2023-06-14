// ㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
// 개발!!!! 개발!!! 개발!!! 노드가 미래다아!!!!!!!!!!!!!

//- 숫자의 값과 위치가 모두 일치하면 S
//- 숫자의 값은 일치하지만 위치가 틀렸으면 B
// 컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!
// 1번째 시도 : 134
// 0B0S
// 2번째 시도 : 238
// 1B1S
// 3번째 시도 : 820
// 2B1S
// 4번째 시도 : 028
// 3B
// 5번째 시도 : 280
// 3S
// 4번만에 맞히셨습니다. 
// 게임을 종료합니다.


// 랜덤값을 담을 배열을 선언한다.
// 랜덤값을 배열에 넣는다. 이 랜덤값은 고유해야한다. 0~9 indexOf 사용하면될듯? 
// readline 을 이용해 반복해 입력을 받는다.


// 몇번째 시도 인지 확인할 count 선언
// 사용자 입력값이 3자리가 아니면 다시

// s_count 변수와 b_count 를 선언한다.
// 랜덤값과 입력값을 검증하여 위치까지 일치한다면 s_count 증가
// 랜덤값과 입력값이 있을경우 b_count 증가
// s_count 가 3이되면 안내후 종료



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 컴퓨터 입력값
let input = [];
const min = 1 
const max = 10
let tryCnt = 1

while (true){
    const cmd = Math.floor(Math.random() * (max - min) + min);
    
    if (input.indexOf(cmd) === -1) input.push(cmd)
    if (input.length === 3) break
}

const com_result = input.join('')


rl.on('line', function (line) {
    // console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!')
    console.log('컴퓨터가 만든 번호:',com_result)
    let before = 0
    let current = 0
    for (val of line) {
        if (before === val) {
            console.log('중복.')
            current = val
            break   
        }
        
        before = val
        
    }
    if (before !== curren && line.length === 3){
        input = line 
        console.log(`${tryCnt}번째 시도: ${input}`)
        let s_count = 0
        let b_count = 0
        for (let i = 0; i < com_result.length ;i++){
            if (com_result[i] !== input[i] && com_result.indexOf(input[i]) !== -1) b_count++
            if (com_result[i] === input[i] ) s_count++
        }
        // console.log(com_result,input)
        // console.log(s_count,b_count)

        if (s_count !== 0 && b_count !== 0 ) console.log(`${b_count}B${s_count}S`)
        else if (s_count === 0 && b_count !== 0) console.log(`${b_count}B`)
        else if (s_count !== 0 && b_count === 0) console.log(`${s_count}S`)
        
        tryCnt++
        
        if (s_count === 3){
            console.log(`${tryCnt - 1}번만에 맞히셨습니다.`)
            console.log('게임을 종료합니다.')
            rl.close()
        }}
    })
    
rl.on('close', () => { //'close'일 때 
    process.exit() // 프로그램을 나간다
});

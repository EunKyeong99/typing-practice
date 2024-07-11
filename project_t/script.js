const sentences = [
    "1등 내가 찜 꽁했어.",
    "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배.",
    "A sound mind in a sound body",
    "Easy come, Easy go",
    "fly high 바람이 되어 종이비행기를 타고서",
    "House of the rising sun",
    "Manners maketh man.",
    "Well begun is half done",
    "When you grow up, your heart dies.",
    "You are what you eat.",
    "가난해도 만족하는 자는 부자이다.",
    "가장 고귀한 복수는 관용이다.",
    "가장 용감한 행동은 자신만을 생각하는 것이다. 큰 소리로.",
    "개 눈에는 똥만 보인다.",
    "개같이 벌어서 정승같이 쓴다.",
    "개는 잘 짖는다고 좋은 개가 아니다.",
    "개도 닷새 만 되면 주인을 안다.",
    "개똥밭에 굴러도 이승이 낫다.",
    "개미구멍이 둑을 무너뜨릴 수도 있다.",
    "거만한 사과란 모욕이나 다름없다.",
    "게으름은 피곤하기 전에 쉬는 습관일 뿐.",
    "겨울이 오면 봄이 멀지 않으리.",
    "결혼의 성공 여부는 혼전에 80%가량 예상할 수 있다.",
    "고래 사움에 새우 등 터진다.",
    "고생 끝에 낙이 온다.",
    "고슴도치에 놀란 호랑이 밤송이 보고 절한다.",
    "고양이 목에 방울 달기",
    "고양이가 발톱을 감춘다.",
    "고장 난 시계도 두 번은 맞는다.",
    "곤란을 극복하는 것은 승리의 기회가 된다.",
    "과거를 기억 못 하는 이들은 과거를 반복하기 마련이다.",
    "국민을 비굴하게 만드는 정치가 가장 나쁜 정치다.",
    "굴러온 돌이 박힌 돌 뺀다.",
    "권리의 진정한 근원은 의무이다.",
    "그 사람을 모르거든 그 벗을 보라.",
    "그는 나에게로 와서 꽃이 되었다.",
    "그래도 지구는 돈다",
    "금강산도 식후경이다.",
    "기분이 저기압일 땐 고기 앞으로!",
    "기회가 문을 두드릴 때 게으른 자는 시끄럽다고 화를 낸다.",
    "깊은 강은 소리를 내지 않는다.",
    "꺼지지 않을 불길로 타올라라.",
    "ㄴr는 ㄱr끔 눈물을 흘린다...",
    "나는 내가 본 것을 절반도 채 말하지 못했다.",
    "나는 아직도 배가 고프다",
    "나는 죽음 후에 계속될 미성숙이 기대된다.",
    "나랏말싸미 듕귁에 달아 서로 사맞디 아니한체",
    "나약한 태도는 성격도 나약하게 만든다.",
    "남보다는 자신을 먼저 이겨내라.",
    "남의 떡이 더 커 보인다.",
    "납득이 안돼요 납득이.",
    "낫 놓고 기역 자도 모른다.",
    "내가 런너라니!",
    "내가 무릎을 꿇었던 건 추진력을 얻기 위함이었다.",
    "내가 하면 실력, 남이 하면 운빨.",
    "너는 이미 죽어 있다.",
    "넌 나에게 모욕감을 줬어.",
    "노력이 적으면 얻는 것도 적다.",
    "높이 올라갈수록 바람도 매섭다.",
    "누구인가? 누가 기침소리를 내었는가?",
    "눈 가리고 아웅.",
    "능력이 부족할수록 자만심이 더 강하다."
];

let currentSentence = "";
let startTime;
let timer;
const sentenceElement = document.getElementById("sentence");
const inputBox = document.getElementById("inputBox");
const resultElement = document.getElementById("result");

function startTypingPractice() {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceElement.textContent = currentSentence;
    inputBox.value = "";
    inputBox.focus();
    startTime = new Date().getTime();
    resultElement.textContent = "";

    // 기존 타이머 초기화
    if (timer) {
        clearTimeout(timer);
    }

    // 7초 안에 못 치면 문장 출력 후 다음 문장 진행 및 텍스트 박스 초기화
    timer = setTimeout(() => {
        resultElement.textContent = "시간 초과. 빨간색에서 죽음.";
        setTimeout(startTypingPractice, 2000); // 2초 딜레이
    }, 6000);
}

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const currentTime = new Date().getTime();
        const timeTaken = (currentTime - startTime) / 1000;

        if (timeTaken <= 6 && inputBox.value === currentSentence) {
            resultElement.textContent = "통과";

            // 입력이 올바르면 타이머 제거 후 다음 문장으로
            clearTimeout(timer);
            setTimeout(startTypingPractice, 1000); // 1초 후에 다음 문장으로 넘어가기
        } else if (timeTaken > 6) {
            resultElement.textContent = "시간 초과. 빨간색에서 죽음.";
            setTimeout(startTypingPractice, 2000); // 2초 후에 다음 문장으로 넘어가기
        } else {
            resultElement.textContent = "틀린 문장입니다.";
            inputBox.value = ""; // 입력 필드 초기화
            inputBox.focus(); // 포커스 유지
        }
    }
});

// 초기화 작업
startTypingPractice();

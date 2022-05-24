/*
    바닐라 JS 경우
    1. 이벤트 요소가 화면상에서 떨어진 거리를 구하고,
    2. 사용자가 그 요소보다 스크롤을 많이 하면
    이벤트 요소가 나타나게
    
    Scroll Trigger Library
    => 요소의 화면상 위치를 구분 후 Class명을 추가 또는 삭제,
    지정 Class명에 CSS를 작성해주면 됨.
*/

const trigger = new ScrollTrigger.default({ //trigger 객체 생성
    //default()안에 중괄호를 열고 상세옵션 부여
    trigger: { //트리거 요소 설정
        once: false, //트리거 횟수
        offset: { //요소가 나타나는 시점
            /*
            element: {
                x: 0,
                y: 0.2 //해당요소의 "높이"의 20% 올라왔을때 트리거 실행
            }
            */
            viewport: {
                x: 0,
                y: (trigger, frame, direction) => {
                    return trigger.visible ? 0 : 0.2
                    //해당요소가 "viewport 기준"으로 20% 올라왔을때 트리거 실행
                }
            }
        },
        toggle: { //클래스명 변경
            class: {
                in: 'animatedIn',
                out: ['animatedOut']
            }
        }
    }
});
trigger.add('[data-trigger]'); //html data-trigger 속성에 트리거 발생

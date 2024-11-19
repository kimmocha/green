const itemList = [];

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(){
    const item = document.querySelector("#item").value;
    // 텍스트필드 내용 가져옴
    if (item != null) {
        itemList.push(item); // itemList 배열의 끝에 item 변수 값 추가
        document.querySelector("#item").value = ""; //id="item"인 요소의 값을
        document.querySelector("#item").focus();
        //텍스트 필드에 focus() 메서드 적용
    }
    showList();
}

function showList() {
    let list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장
    for (let i=0; i<itemList.length; i++) { //배열 요소마다 반복
        list+="<li>"+itemList[i] +"<span class='close' id=" + i + ">X</span></li>";
    //요소와 삭제 버튼을 <li>~</li>로 묶음
    }
    list += "</ul>"; //목록을 끝내는 </ul>태그 저장
    document.querySelector('#itemList').innerHTML = list //list 내용 표시
    const remove = document.querySelectorAll(".close");
    for(let i =0; i<remove.length;i++){
        remove[i].addEventListener("click",removeList);
    }
}

//선택한 항목을 목록에서 삭제하는 함수
function removeList(){
    const id = this.getAttribute("id"); //id 속성(배열 0,1,2)을 가져옴
    itemList.splice(id, 1); //id부터 1개 삭제
    showList(); //삭제한거 빼고 목록 새로 만듬

    /*fruits.splice(2, 1);
               2번 index에서 1개 요소 제거
    const fruist = ['수박', '바나나' , '망고', '두리안'];
    const remove = fruist.splice(2,1)
    --> ['수박', '바나나' , '두리안'];*/
}
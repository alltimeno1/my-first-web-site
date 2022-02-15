// 댓글 달기
function write_msg(){
    let msg = $('#msg').val();
    let name = $('#nickname').val();
    let temp_html = `
    <div class="card">
        <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${msg}</p>
            <footer class="blockquote-footer">${name}</cite></footer>
        </blockquote>
        </div>
    </div>`;
    $(`#cards-box`).append(temp_html);
    }

// 날씨 api 사용
$.ajax({
type: "GET",
url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
data: {},
success: function(response){
    let temp = response['temp']
    $(`#temp`).text(temp);
}
})

// Json 데이터 불러오기 실패...
let data = {
	"image": [
		"https://search.pstatic.net/common?type=f&size=180x180&quality=75&direct=true&src=https%3A%2F%2Fmusicmeta-phinf.pstatic.net%2Falbum%2F006%2F810%2F6810656.jpg%3Ftype%3Dr204Fll%26v%3D20211229175913",
		"https://search.pstatic.net/common?type=f&size=180x180&quality=75&direct=true&src=https%3A%2F%2Fmusicmeta-phinf.pstatic.net%2Falbum%2F006%2F520%2F6520837.jpg%3Ftype%3Dr204Fll%26v%3D20211018235916",
		"https://search.pstatic.net/common?type=f&size=180x180&quality=75&direct=true&src=https%3A%2F%2Fmusicmeta-phinf.pstatic.net%2Falbum%2F005%2F211%2F5211473.jpg%3Ftype%3Dr204Fll%26v%3D20211115172612",
		"https://search.pstatic.net/common?type=f&size=180x180&quality=75&direct=true&src=https%3A%2F%2Fmusicmeta-phinf.pstatic.net%2Falbum%2F004%2F600%2F4600362.jpg%3Ftype%3Dr204Fll%26v%3D20210530093516",
		"https://search.pstatic.net/common?type=f&size=180x180&quality=75&direct=true&src=https%3A%2F%2Fmusicmeta-phinf.pstatic.net%2Falbum%2F004%2F550%2F4550593.jpg%3Ftype%3Dr204Fll%26v%3D20210303143526"
	],
	"title": [
		"조각집",
		"strawberry moon",
		"IU 5th Album 'LILAC'",
		"I-LAND Part 1 Signal Song",
		"에잇"
	],
	"date": [
		"2021.12.29",
		"2021.10.19",
		"2021.03.25",
		"2020.06.19",
		"2020.05.06"
	],
	"link": [
		"https://vibe.naver.com/album/6810656",
		"https://vibe.naver.com/album/6520837",
		"https://vibe.naver.com/album/5211473",
		"https://vibe.naver.com/album/4600362",
		"https://vibe.naver.com/album/4550593"
	]
}

// 최신 앨범 추가
var click = 0
function album(){
    console.log(click)
    if (click == 0){
        for (let i = 0; i < data.image.length; i++){
            let temp_html = `
            <div class="card">
                <a href="${data.link[i]}" target="_blank">
                    <img src="${data.image[i]}" class="card-img-top" alt="...">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${data.title[i]}</h5>
                    <p class="card-text"><small class="text-muted">발매일 ${data.date[i]}</small></p>
                </div>
            </div>`;
            $(`#album`).append(temp_html);
            $(`#album`).show()
            $(`#btn`).empty();
            $(`#btn`).append("최신 앨범 닫기");
            }
    }
    else if (click % 2 != 0){
        // $(`#ablbum`).empty();
        $(`#album`).hide()
        $(`#btn`).empty();
        $(`#btn`).append("최신 앨범 보기");
        }
    else {
        $(`#album`).show()
        $(`#btn`).empty();
        $(`#btn`).append("최신 앨범 닫기");
    }
    click+=1
}
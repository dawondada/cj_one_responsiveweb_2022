// main2.js
var devWidth;
var limitsize = 768;

window.addEventListener("resize", function () {
	devWidth = document.querySelector("body").offsetWidth;
	console.log(devWidth);
});

///////////////////////////////////////////////////////////////////
//햄버거 버튼 클릭

const mobBtn = document.querySelector("div.mobBtn");
const mob = document.querySelector(".mob");
const mobClose = document.querySelector("div.mobBtn_close");
const body = document.querySelector("body");
const bg = document.querySelector(".bg");
//햄버거버튼 열기
mobBtn.addEventListener("click", function () {
	mob.classList.add("on");
	mobClose.classList.add("on");
	body.classList.add("on");
	bg.classList.add("on");
	this.style.display = "none";
});
//모바일버튼 닫기
mobClose.addEventListener("click", function () {
	mob.classList.remove("on");
	mobClose.classList.remove("on");
	body.classList.remove("on");
	bg.classList.remove("on");
	mobBtn.style.display = "block";
});

//jQeury의 .is(":visible") => element.offsetWidth > 0 && element.offsetHeight > 0;
//classList.contains('on');
////////////////////////////////////////////////////////////////////
// 주메뉴

const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");
const formSrch = document.querySelector("form.srch");
const srchOpen = document.querySelector(".srch_open");
const topMenuDD = document.querySelectorAll("dl.topMenu > dd");
const subMenu = document.querySelectorAll(".gnb>ul>li>ul");

for (i = 0; i < gnbMenu.length; i++) {
	gnbMenu[i].addEventListener("mouseover", function () {
		if (devWidth < limitsize) {
			return false;
		}
		if (formSrch.offsetWidth > 0 && srch.offsetHeight > 0) {
			formSrch.classList.remove("on");
			srchOpen.classList.remove("on");
		}
		if (topMenuDD[4].classList.contains("on")) {
			topMenuDD[4].classList.remove("on");
		}
		headerWrap.classList.add("on");
		// gnb.style.display = "block";
		subMenu.forEach(item => {
			item.classList.add("on");
		});
	}); //mouseover

	gnbMenu[i].addEventListener("mouseout", function () {
		if (devWidth < limitsize) {
			return false;
		}
		headerWrap.classList.remove("on");
		// gnb.style.display = "block";
		subMenu.forEach(item => {
			item.classList.remove("on");
		});
	}); //mouseout
} //for

////////////////////////////////////////////////////////////////////
//로그인 이미지
let appear = "";
for (i = 0; i < 57; i++) {
	if (i < 10) {
		appear +=
			"<img src='images/appear/appear_0000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	} else {
		appear +=
			"<img src='images/appear/appear_000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	}
}
document.querySelector("a.appear").innerHTML = appear;

var loop = "";
for (var i = 0; i < 82; i++) {
	if (i < 10) {
		loop +=
			"<img src='images/loop/loop_0000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	} else {
		loop +=
			"<img src='images/loop/loop_000" +
			i +
			".png' alt='로그인버튼" +
			i +
			"' />";
	}
}
document.querySelector("a.loop").innerHTML = loop;

//로그인 애니메이션
var appearImg = document.querySelectorAll(".appear > img");
for (var k = 0; k < 57; k++) {
	appearImg[k].style.animation = "ani 2.75s linear " + k * 0.05 + "s 1 normal";
}

var loopImg = document.querySelectorAll(".loop > img");
for (var j = 0; j < 82; j++) {
	loopImg[j].style.animation =
		"ani 4.1s linear " + (2.85 + 0.05 * j) + "s infinite normal";
}

////////////////////////////////////////////////////////////////////
//퀵메뉴이미지
//quick01_00000 ~ 00019
var quick1 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick1 += '<img src="images/quick01/quick01_0000' + i + '.png"></img>';
	} else {
		quick1 += '<img src="images/quick01/quick01_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick1").innerHTML = quick1;

// quick02_00000 ~ 00019
var quick2 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick2 += '<img src="images/quick02/quick02_0000' + i + '.png"></img>';
	} else {
		quick2 += '<img src="images/quick02/quick02_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick2").innerHTML = quick2;

// quick03_00000 ~ 00019
var quick3 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick3 += '<img src="images/quick03/quick03_0000' + i + '.png"></img>';
	} else {
		quick3 += '<img src="images/quick03/quick03_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick3").innerHTML = quick3;

// quick04_00000 ~ 00019
var quick4 = "";
for (var i = 0; i < 20; i++) {
	if (i < 10) {
		quick4 += '<img src="images/quick04/quick04_0000' + i + '.png"></img>';
	} else {
		quick4 += '<img src="images/quick04/quick04_000' + i + '.png"></img>';
	}
}
document.querySelector(".quick4").innerHTML = quick4;

//마우스를 올렸을 때 mouseover
var content1Li = document.querySelectorAll(".content1 ul li");
content1Li.forEach(function (item) {
	item.addEventListener("mouseover", function () {
		for (k = 0; k < 20; k++) {
			let imgLi = this.children[0].children[0].children;
			imgLi[k].style.animation = `ani 1s linear ${0.05 * k}s 1 normal`;
		}
	});
});
//마우스를 뗏을때 mouseout
content1Li.forEach(function (item) {
	item.addEventListener("mouseout", function () {
		for (k = 0; k < 20; k++) {
			let imgLi = this.children[0].children[0].children;
			imgLi[k].style.animation = "none";
		}
	});
});

////////////////////////////////////////////////////////////////////
//검색열기
// const srchOpen = document.querySelector("span.srch_open"); 상단에있음
srchOpen.addEventListener("click", function () {
	this.classList.toggle("on");
	formSrch.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "검색입력서식 닫기");
	} else {
		this.children[0].setAttribute("title", "검색입력서식 열기");
	}
});

////////////////////////////////////////////////////////////////////
// 고객센터
topMenuDD[4].addEventListener("click", function () {
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "고객센터 닫기");
	} else {
		this.children[0].setAttribute("title", "고객센터 열기");
	}
});

// 모바일 고객센터
var mobTopDD = document.querySelectorAll(".mob_topMenu > dd");

mobTopDD[4].addEventListener("click", function () {
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "고객센터 닫기");
	} else {
		this.children[0].setAttribute("title", "고객센터 열기");
	}
});

//모바일 주메뉴
// 모바일 주메뉴 2단
var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
for (i = 0; i < mobGnbLi.length; i++) {
	mobGnbLi[i].addEventListener("click", function () {
		this.classList.toggle("on");

		var panel = this.nextElementSibling;
		if (panel.classList.contains("on")) {
			panel.classList.remove("on");
		}
	});
}

////////////////////////////////////////////////////////////////////
//배너
var bnnNum = 0;
var lastNum = document.querySelectorAll(".banner_frame > section").length - 1;
var bannerLi = document.querySelectorAll(".banner_frame > section");
var bannerWid = document.querySelector("body>section").offsetWidth;
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var bannFrame = document.querySelector(".banner_frame");
var bannFrameOn = document.querySelector(".banner_frame.on");
var arrowBtn = document.querySelectorAll(".arrow a");
var rollingBtn = document.querySelectorAll(".rolling a");
var banner_rollA = document.querySelectorAll(".banner_roll a");

window.addEventListener("resize", function () {
	bannerWid = document.querySelector("body>section").offsetWidth;
});

//배너-다음
next.addEventListener("click", function () {
	bnnNum++;
	if (bnnNum > lastNum) {
		bnnNum = 0;
	}
	bannFrame.classList.add("on");
	bannFrame.style.left = bnnNum * -bannerWid + "px";

	if (bannerLi[bnnNum].classList.contains("white")) {
		arrowBtn.forEach(function (item) {
			item.classList.add("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.add("white");
		});
	} else {
		arrowBtn.forEach(function (item) {
			item.classList.remove("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.remove("white");
		});
	}
	rollingBtn.forEach(function (item) {
		item.classList.remove("on");
	});
	banner_rollA[bnnNum].classList.add("on");
});

//배너-이전
prev.addEventListener("click", function () {
	bnnNum--;
	if (bnnNum < 0) {
		bnnNum = lastNum;
	}
	bannFrame.style.left = bnnNum * -bannerWid + "px";

	if (bannerLi[bnnNum].classList.contains("white")) {
		arrowBtn.forEach(function (item) {
			item.classList.add("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.add("white");
		});
	} else {
		arrowBtn.forEach(function (item) {
			item.classList.remove("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.remove("white");
		});
	}
	rollingBtn.forEach(function (item) {
		item.classList.remove("on");
	});
	banner_rollA[bnnNum].classList.add("on");
});

//오토배너
function autoBanner() {
	bnnNum++;
	if (bnnNum > lastNum) {
		bnnNum = 0;
	}
	// bannFrame.classList.add('on');
	bannFrame.style.left = bnnNum * -bannerWid + "px";

	if (bannerLi[bnnNum].classList.contains("white")) {
		arrowBtn.forEach(function (item) {
			item.classList.add("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.add("white");
		});
	} else {
		arrowBtn.forEach(function (item) {
			item.classList.remove("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.remove("white");
		});
	}
	rollingBtn.forEach(function (item) {
		item.classList.remove("on");
	});
	banner_rollA[bnnNum].classList.add("on");
}

var autoBann = setInterval(autoBanner, 5000);

//재생 멈춤
var flag = true;
var play = document.querySelector("a.play");
play.addEventListener("click", function () {
	if (flag) {
		clearInterval(autoBann);
		this.classList.add("pause");
		flag = false;
	} else {
		autoBann = setInterval(autoBanner, 5000);
		this.classList.remove("pause");
		flag = true;
	}
});

//클릭한 롤링의 해당 배너로 이동

var banner_rollLi = document.querySelectorAll(".banner_roll li");

banner_rollLi.forEach(function (item) {
	item.addEventListener("click", rollAction);
});

function rollAction(item) {
	curRoll = item.currentTarget; //클릭이벤트가 전달된 엘리먼트
	parentRoll = curRoll.parentElement; // 연결된 엘리먼트의 부모
	childRoll = parentRoll.children; // 부모 엘리먼트의 자식 엘리먼트들
	bnnNum = Array.from(childRoll).indexOf(curRoll); //배열중에서 인덱스 번호 찾기
	bannFrame.style.left = bnnNum * -bannerWid + "px";

	if (bannerLi[bnnNum].classList.contains("white")) {
		arrowBtn.forEach(function (item) {
			item.classList.add("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.add("white");
		});
	} else {
		arrowBtn.forEach(function (item) {
			item.classList.remove("white");
		});
		rollingBtn.forEach(function (item) {
			item.classList.remove("white");
		});
	}
	rollingBtn.forEach(function (item) {
		item.classList.remove("on");
	});
	banner_rollA[bnnNum].classList.add("on");
}

////////////////////////////////////////////////////////////////////
//content3

// for (i = 0; i < content3Li.length; i++) {
// 	content3Li[i].addEventListener("mouseover", function () {
// 		this.classList.add("on");
// 	});
// 	content3Li[i].addEventListener("mouseout", function () {
// 		this.classList.remove("on");
// 	});
// }
const all = document.querySelectorAll(".content3_inner > div > ul > li");

all.forEach(function (item) {
	item.addEventListener("mouseover", function () {
		this.classList.add("on");
	});
});
all.forEach(function (item) {
	item.addEventListener("mouseout", function () {
		this.classList.remove("on");
	});
});

//////////////////////////////////////////////////////////////

//대분류
const group = document.querySelectorAll(".content3_inner>ul>li>a");
// var all = document.querySelectorAll(".content3_inner > div > ul > li");
const ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
const shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
const diner = document.querySelectorAll(
	".content3_inner > div > ul > li.diner"
);
const box = document.querySelectorAll(".content3_inner > div > ul > li.box");

for (k = 0; k < group.length; k++) {
	group[k].addEventListener("click", function (event) {
		event.preventDefault();
		group.forEach(function (idx) {
			idx.classList.remove("on");
		});
		this.classList.add("on");

		var className = this.parentElement.getAttribute("class");

		all.forEach(function (item) {
			item.style.display = "none";
		});
		switch (className) {
			case "all":
				all.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "ent":
				ent.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "shop":
				shop.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "diner":
				diner.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			case "box":
				box.forEach(function (item) {
					item.style.display = "block";
				});
				break;
			default:
				break;
		}
	});
}
//배열과 for문으로 좀더 단순하게도 해줄 수 있다.

////////////////////////////////////////////////////////////////////
//scroll 이벤트
//top버튼
const btnTop = document.querySelector("div.top");

//도넛
//각각 변수를 주는것보다 각각요소를 배열로 빼낼수 있으면 더 편하게 할수있을까 해서 찾아봄
const doughnut = [...document.querySelectorAll(".circle_wrap>span")];
// console.log(doughnut);
// [...경로 하면 배열로 반환받을수 있음]

window.addEventListener("scroll", function () {
	// let scroll = this.scrollTop;
	let scroll = document.querySelector("html").scrollTop;
	let winWidth = document.querySelector("html").scrollWidth;

	doughnut[0].style.top = 71 + scroll * 0.5 + "px";
	doughnut[1].style.top = 796 + scroll * 1.1 + "px";
	doughnut[2].style.top = 1526 - scroll * 0.1 + "px";
	doughnut[3].style.top = 722 - scroll * 0.1 + "px";
	doughnut[4].style.top = 991 + scroll * 1.1 + "px";
	doughnut[5].style.top = 365 + scroll * 0.5 + "px";
	doughnut[6].style.top = 947 + scroll * 0.1 + "px";
	doughnut[7].style.top = -300 + scroll * 0.7 + "px";

	//top버튼
	if (scroll <= 0) {
		btnTop.classList.remove("on", "ab");
	} else if (scroll > 0 && scroll < 2700) {
		btnTop.classList.remove("ab");
		btnTop.classList.add("on");
	} else {
		btnTop.classList.add("ab");
	}
});

btnTop.addEventListener("click", function (e) {
	e.preventDefault();
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

////////////////////////////////////////////////////////////////////
//패밀리사이트
const familySite = document.querySelector(".family_site");
familySite.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.toggle("on");

	if (this.classList.contains("on")) {
		this.children[0].setAttribute("title", "닫기");
	} else {
		this.children[0].setAttribute("title", "열기");
	}
});

//style.cssText - css요소를 한번에 여러개 적용시킬 수 있다.
//element.textContent = "Text" 텍스트 넣을때

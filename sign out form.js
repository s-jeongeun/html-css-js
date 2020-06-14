<!--

  //아이디 중복확인
  function userId()	{
    var userid = document.getElementById("userid").value;
    console.log(userid);

    if(userid == null || userid =="") {
      alert("아이디 입력은 필수 입니다.");
    }
    else {
      alert(userid + "은(는) 사용 가능합니다.");
    }
  }

 //비밀번호 확인
 function checkPW() {
   var pw1 = document.getElementById("pw1").value;
   var pw2 = document.getElementById("pw2").value;

   if(userid == null || userid =="")  {
     document.getElementById("check").innerHTML = "";
   }
   else if(pw1 != pw2)  {
     document.getElementById("check").innerHTML = "비밀번호가 일치하지 않습니다.";
     document.getElementById("check").style.color = "red"
   }
   else {
     document.getElementById("check").innerHTML = "비밀번호가 일치합니다.";
     document.getElementById("check").style.color = "blue"
   }
 }

//생년월일 select box
 function appendYear() {
   var date = new Date();
   var year = date.getFullYear();
   var selectValue = document.getElementById("year");
   var optionIndex = 1;

   for(var i = year; i >= year-100; i--) {
    selectValue.add(new Option(i+"년", i),optionIndex++);
    }
  }

  function appendMonth() {
    var selectValue = document.getElementById("month");
    var optionIndex = 1;

    for(var i = 1; i <= 12; i++) {
     selectValue.add(new Option(i+"월", i),optionIndex++);
    }
   }

   function appendDay() {
     var selectValue = document.getElementById("day");
     var optionIndex = 1;

     for(var i = 1; i <= 31; i++) {
      selectValue.add(new Option(i+"일", i),optionIndex++);
     }
    }

 window.onload = function () {
  appendYear();
  appendMonth();
  appendDay();
 }


//-->

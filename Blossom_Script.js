var i = 0;
const content = document.getElementById('pagecontent')
document.getElementById('nextbtn').addEventListener('click',register)
document.getElementById('startbtn').addEventListener('click',start)
function ActivateShowpage() {
  setTimeout(showpage,3000)
}
function showpage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('pagecontent').style.display = 'block';
  
  }
function checkfunction() {
  console.log('clicked')
}

function register() {
  document.getElementById('register').style.display='block';
  document.getElementById('speech').classList.add("fadeout")
  document.getElementById('nextbtn').classList.add("fadeout")
  setTimeout(() => {
    document.getElementById('speech').innerHTML = ''
    document.getElementById('nextbtn').innerHTML = ''
  }, 3000);
}

function start() {
  var name = document.getElementById("username").value;
  localStorage.setItem("name",document.getElementById("username").value);
  if (name == "" ) {
          document.getElementById("msg").innerHTML = '<p> กรุณาใส่ชื่อของคุณ </p>'
}
  else {
    let sound = new Howl({
      src: ['/media/Audio/Audio_Worshipsong.mp3']  
    });
    sound.play()
    sound.volume(0.25)
    sound.loop(true);

    console.log(name)
    document.getElementById('pagecontent').classList.add("fadeout")
    setTimeout(() => {
      document.getElementById('pagecontent').innerHTML = ''
    }, 3000);
    document.getElementById('register').classList.add("fadeout")
    setTimeout(() => {
      document.body.classList.add("whitetogreen")
      setTimeout(() => {
        document.body.style.backgroundColor = "#3C7168";
        introduction()
      }, 1000);
    }, 3000);

  }
}

function introduction() {
 
  setTimeout(() => {
    document.getElementById('pagecontent').innerHTML = 
    ` <div> 
        <h1 class="fadein instruction"> โปรดใส่หูฟังเพื่อประสบการณ์ที่ดีที่สุด <br> หากพร้อมแล้วแตะที่หน้าจอได้เลย </h1>
      </div>`
      startfunction()
  }, 5000);
 
}

function startfunction() {
    setTimeout(document.addEventListener('click', story00),1000)
}
function story00() {
  document.removeEventListener('click',story00)
  document.getElementById('pagecontent').innerHTML = 
  ` <div> 
      <h1 class="fadein instruction"> สวัสดี...<span id="username"></span></h1>
    </div>`
    document.getElementById('username').innerHTML = localStorage.getItem("name")
  setTimeout(() => {
    document.addEventListener('click',story01)
  }, 1000);
}

function story01() {
  document.removeEventListener('click',story01)
  document.getElementById('pagecontent').innerHTML = 
  ` <div> 
      <h1 class="fadein instruction"> ฉันชื่อ Blossom จากดินแดน Cardia <br> ฉันดีใจที่ได้เจอเธอนะ </h1>
    </div>`
    setTimeout(() => {
      document.addEventListener('click',story02)
    }, 3000);
}

function story02() {
  document.removeEventListener('click',story02)
  document.getElementById('pagecontent').innerHTML = 
  ` <div> 
      <h1 class="fadein instruction"> วันนี้เรามาสำรวจ "หัวใจ" กันดีกว่า </h1>
    </div>`
    document.body.classList.add("greentoblack")
    setTimeout(() => {
      document.body.style.backgroundColor = "#061A23";
    }, 6000);
    setTimeout(() => {
      document.addEventListener('click',story03);
    }, 1000);
}

function story03() {
  document.removeEventListener('click',story03)
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> ช่วงนี้รู้สึกกังวลเหมือนจะมีเรื่องร้าย ๆ เกิดขึ้นบ้างไหม? </h1> <br>
    <button class="check" value="0"> ไม่มีเลยนะ...</button> <br>
    <button class="check" value="1"> มีบ้างบางวัน </button> <br>
    <button class="check" value="2"> มากกว่า 7 วันใน ใน 2 สัปดาห์ที่ผ่านมา </button> <br>
    <button class="check" value="3"> ทุกวันเลย </button>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p class="fadein"> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story04()
      });
    });
}

function story04() {
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> รู้้สึกหงุดหงิดง่าย กลายเป็นคนขี้รำคาญ </h1> <br>
    <button class="check" value="3"> เกือบทุกวันเลย </button><br>
    <button class="check" value="2"> เป็นบ่อยขึ้นมาก ๆ ในช่วงที่ผ่านมา</button> <br>
    <button class="check" value="1"> บางทีก็อดใจไม่ได้จริง ๆ</button> <br>
    <button class="check" value="0"> ไม่เป็นแบบนั้นเลย</button> <br>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story05()
      });
    });
}

function story05() {
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> รู้สึกกระสับกระส่ายจนนั่งนิ่ง ๆ ไม่ได้? </h1> <br>
    <button class="check" value="3"> แทบจะทุกวัน </button><br>
    <button class="check" value="2"> เท่าที่นึกออกก็เป็นบ่อยเลยล่ะ</button> <br>
    <button class="check" value="1"> เป็นบางครั้ง นาน ๆ ที </button> <br>
    <button class="check" value="0"> ไม่เลย</button> <br>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story07()
      });
    });
}

function story07() {
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> ช่วงนี้รู้สึกทำตัวให้ผ่อนคลายได้ยากไหม? </h1> <br>
    <button class="check" value="3"> ทำไม่ได้เลย </button><br>
    <button class="check" value="2"> ยากขึ้นเรื่อย ๆ ในช่วงที่ผ่านมา </button> <br>
    <button class="check" value="1"> บางครั้งก็รู้สึกว่ายาก แต่ยังผ่อนคลายได้อยู่นะ </button> <br>
    <button class="check" value="0"> ไม่ยากเลย </button> <br>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story09()
      });
    });
}

function story09() {
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> กังวลมากไปในเรื่องต่าง ๆ ไหม?</h1> <br>
      <button class="check" value="0"> ไม่เลย </button> <br>
      <button class="check" value="1"> เป็นบางครั้งแหละ แต่ไม่บ่อย </button> <br>
      <button class="check" value="2"> ช่วงนี้มีเรื่องเยอะแยะให้กังวลไปหมด </button> <br>
      <button class="check" value="3"> กังวลมาก ๆ ในทุก ๆ วันเลย </button><br>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story10()
      });
    });
}

function story10() {
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> แล้วมีปัญหาในการควบคุมความกังวลนั้นไหม? </h1> <br>
      <button class="check" value="0"> ไม่เป็นปัญหาเลยนะ </button> <br>
      <button class="check" value="1"> บางครั้งก็ควบคุมยากนะ </button> <br>
      <button class="check" value="2"> เมื่อก่อนยังพอควบคุมได้ แต่เดี๋ยวนี้เหมือนจะหนักขึ้น</button> <br>
      <button class="check" value="3"> เป็นปัญหามาก รู้สึกควบคุมไม่ค่อยได้แล้ว </button><br>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story11()
      });
    });
}

function story11() {
  document.getElementById('pagecontent').innerHTML =
  `
  <div class="questionaire fadein">
    <h1> มีเรื่องที่ทำให้เครียด วิตกกังวล หรือกระวนกระวายอะไรไหม? </h1> <br>
      <button class="check" value="0"> นึกไม่ออกเลย </button> <br>
      <button class="check" value="1"> มีเรื่องบางเรื่องที่พอจะนึกออกนะ </button> <br>
      <button class="check" value="2"> พึ่งเริ่มมามีช่วงนี้เลย </button> <br>
      <button class="check" value="3"> มีเกือบทุกวัน</button><br>
    <p> คำตอบของแบบประเมินไม่สามารถย้อนกลับมาตอบได้แล้วนะ </p>
  </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p> โปรดเลือกคำตอบตามความเป็นจริง เพื่อผลการประเมินที่มีประสิทธิภาพสูงสุด </p>
  `
  var buttons = document.querySelectorAll('.check'); // เลือกปุ่มทั้งหมดที่มี class="check"
    buttons.forEach(buttons => {
      buttons.addEventListener('click', () => {
        i += parseInt(buttons.value); // เพิ่มค่า i ด้วยค่าของปุ่มที่กด (แปลงเป็นจำนวนเต็ม)
        console.log('ค่าของ i ตอนนี้คือ:', i); //เช็คตัวแปร i ว่ามีค่าเพิ่มขึ้นไหม หลังจากทำเว็บนี้เสร็จแล้ว ให้มาลบตรงจุดนี้ด้วยนะ
        story12()
      });
    });
}

function story12() {
  document.getElementById('alertmsg').classList.add('fadeout')
  setTimeout (document.getElementById('alertmsg').innerHTML='',3000)
  document.getElementById('pagecontent').innerHTML = 
  ` <div> 
      <h1 class="fadein instruction"> ขอบคุณนะ... </h1>
    </div>
    `
    setTimeout(() => {
      document.addEventListener('click',story13)
    }, 2000);
}

function story13() {
  document.removeEventListener('click',story13)
  document.getElementById('pagecontent').innerHTML =
  ` <div> 
      <h1 class="instruction fadein" > ที่ไม่ยอมแพ้... </h1>
    </div>
  `
  document.addEventListener('click',story14)
}

function story14() {
  document.removeEventListener('click',story14)
  document.getElementById('pagecontent').innerHTML =
  ` <div> 
      <h1 class="instruction fadein"> Cardia ได้ยินเธอแล้วและฉันหวังว่าเราจะได้เจอกันที่นั่นในอนาคตนะ </h1>
    </div>
  `
  document.body.classList.add("blacktogreen")
      setTimeout(() => {
        document.body.style.backgroundColor = "#3C7168";
        story15()
      }, 6000);
}

function story15() {
  document.getElementById('pagecontent').innerHTML =
  ` <div> 
      <h1 class="fadein instruction"> วิเคราะห์ผลการประเมิน... </h1>
    </div>
  `
  setTimeout(() => {
    if (i >= 0 && i <= 4) {
      localStorage.setItem('status',"ปกติ")
      status01()
    }
    else if (i >= 5 && i <= 9) {
      localStorage.setItem('status',"เล็กน้อย")
      status02()
    } else if (i >= 10 && i <= 14) {
      localStorage.setItem('status',"เฝ้าระวัง")
      status03()
    } else if (i >= 15 && i <= 21) {
      localStorage.setItem('status',"รุนแรง")
      status04()
    } else {
      console.log("i is outside the specified ranges")
    }
  }, 5000);
}

function status01() {
  document.getElementById('pagecontent').innerHTML =
  ` <div class="status fadein">
      <h1> <span id="username"> </span> <br>
      กำลังผลิบาน </h1>
      <img src="/Media/Graphic/bloom-01-01.png" class="statusimg">
      <h4> ระดับความวิตกกังวลของคุณอยู่ในเกณฑ์ <span id="result"> </span>
      อยู่ในระดับที่ดีและไม่น่าเป็นห่วง <br>
      อย่างไรก็ตามเราขอแนะนำให้คุณได้ดูแลสุขภาพของตัวเอง<br>
      ทั้งร่างกายและจิตใจผักผ่อนให้เยอะ ๆ กินของอร่อยที่มีประโยชน์ <br>
      ออกกำลังกายอย่าลืมฝึกฝนการผ่อนคลาย<br>
      และคอยสังเกตอาการของตนเองอย่างสม่ำเสมอนะ
      </h4>
      <h2> 
      "Blossom ขอเป็นกำลังใจเล็ก ๆ ให้กับคุณ หวังว่าจะได้พบกับคุณอีก ในแบบทดสอบนี้ หรือในการผจญภัยที่กำลังจะมาถึงในอนาคต"
      </h2>

      <div class="assessment"> 
      <p> 
      ความคิดเห็นของคุณมีค่าสำหรับเรา โปรดสละเวลาสักเล็กน้อยในการประเมินความพึงพอใจในโปรเจคนี้
      </p>
      <button onclick="document.location='https://forms.gle/CnGL6QgHaiBtHMqG7'" > ทำแบบประเมิน </button>
      </div>
    </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p class="fadein disclaimer"> ผลการประเมินจากแบบทดสอบโรควิตกกังวล GAD-7 ผลการประเมินอาจคลาดเคลื่อนได้ </p>
  `
  var result = document.getElementById("result")
  result.innerHTML = localStorage.getItem("status")
  var name = document.getElementById("username")
  name.innerHTML = localStorage.getItem("name")
}



function status02() {
  document.getElementById('pagecontent').innerHTML =
  ` <div class="status fadein">
      <h1> <span id="username"> </span> <br>
      มีลมโบกพัด</h1>
      <img src="/Media/Graphic/windy-01.png" class="statusimg">
      <h4> ระดับความวิตกกังวลของคุณอยู่ในระดับ <span id="result"> </span>
      อาจมีช่วงเวลาที่ทำให้กังวลใจบ้าง <br>
      พยายามหลีกเลี่ยงสถานการณ์ที่ทำให้เกิดความเครียด<br>
      อย่าลืมที่จะหายใจลึก ๆ ผ่อนคลายกล้ามเนื้อ <br>
      พูดคุยกับคนรอบข้างที่เราไว้ใจ<br>
      สิ่งสำคัญที่สุดคืออย่าปล่อยให้ตัวเองเผชิญกับมันคนเดียวนะ
      </h4>
      <h2> 
      "Blossom ขอเป็นกำลังใจเล็ก ๆ ให้กับคุณ หวังว่าจะได้พบกับคุณอีก ในแบบทดสอบนี้ หรือในการผจญภัยที่กำลังจะมาถึงในอนาคต"
      </h2>

      <div class="assessment"> 
      <p> 
      ความคิดเห็นของคุณมีค่าสำหรับเรา โปรดสละเวลาสักเล็กน้อยในการประเมินความพึงพอใจในโปรเจคนี้
      </p>
      <button onclick="document.location='https://forms.gle/CnGL6QgHaiBtHMqG7'" > ทำแบบประเมิน </button>
      </div>
    </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p class="fadein disclaimer"> ผลการประเมินจากแบบทดสอบโรควิตกกังวล GAD-7 ผลการประเมินอาจคลาดเคลื่อนได้ </p>
  `
  var result = document.getElementById("result")
  result.innerHTML = localStorage.getItem("status")
  var name = document.getElementById("username")
  name.innerHTML = localStorage.getItem("name")
}

function status03() {
  document.getElementById('pagecontent').innerHTML =
  ` <div class="status fadein">
      <h1> <span id="username"> </span> <br>
      ความหนาวคลืบคลาน </h1>
      <img src="/Media/Graphic/snowy-01.png" class="statusimg">
      <h4> ระดับความวิตกกังวลของคุณอยู่ในระดับ <span id="result"> </span>
      อาการวิตกกังวลเริ่มมีผลกระทบต่อชีวิตประจำวัน <br>
      อาจจะนอนไม่หลับ เหนื่อยล้า หรืออาจมีปัญหาในการเรียน<br>
      ควรทำแบบประเมินซ้ำอีกใน 1-2 สัปดาห์<br>
      อย่าลืมพูดคุยกับคนรอบข้างที่เราไว้ใจ หรือปรึกษาผู้เชี่ยวชาญ<br>
      สิ่งสำคัญที่สุดคืออย่าปล่อยให้ตัวเองเผชิญกับมันคนเดียวนะ
      </h4>
      <h2> 
      "Blossom ขอเป็นกำลังใจเล็ก ๆ ให้กับคุณ หวังว่าจะได้พบกับคุณอีก ในแบบทดสอบนี้ หรือในการผจญภัยที่กำลังจะมาถึงในอนาคต"
      </h2>

      <div class="assessment"> 
      <p> 
      ความคิดเห็นของคุณมีค่าสำหรับเรา โปรดสละเวลาสักเล็กน้อยในการประเมินความพึงพอใจในโปรเจคนี้
      </p>
      <button onclick="document.location='https://forms.gle/CnGL6QgHaiBtHMqG7'" > ทำแบบประเมิน </button>
      </div>
    </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p class="fadein disclaimer"> ผลการประเมินจากแบบทดสอบโรควิตกกังวล GAD-7 ผลการประเมินอาจคลาดเคลื่อนได้ </p>
  `
  var result = document.getElementById("result")
  result.innerHTML = localStorage.getItem("status")
  var name = document.getElementById("username")
  name.innerHTML = localStorage.getItem("name")
}


function status04() {
  document.getElementById('pagecontent').innerHTML =
  ` <div class="status fadein">
      <h1> <span id="username"> </span> <br>
      ใบไม้ที่แห้งกรอบ </h1>
      <img src="/Media/Graphic/Fall.png" class="statusimg">
      <h4> ระดับความวิตกกังวลของคุณอยู่ในระดับ <span id="result"> </span>
      เพื่อป้องกันไม่ให้อาการแย่ลง เราขอแนะนำให้คุณ <br>
      ได้ปรึกษาแพทย์หรือผู้เชี่ยวชาญโดยด่วน<br>
      ความกังวลระดับนี้ส่งผลต่อการดำเนินชีวิตของคุณมาก<br>
      อาจทำให้คุณรู้สึกทุกข์ใจ เหนื่อยล้า และไม่สามารถทำกิจวัตรประจำวันได้ตามปกติ<br>
      คุณไม่จำเป็นต้องฝ่าฟันมันไปคนเดียว
      </h4>
      <h2> 
      "Blossom ขอเป็นกำลังใจเล็ก ๆ ให้กับคุณ หวังว่าจะได้พบกับคุณอีก ในแบบทดสอบนี้ หรือในการผจญภัยที่กำลังจะมาถึงในอนาคต"
      </h2>

      <div class="assessment"> 
      <p> 
      ความคิดเห็นของคุณมีค่าสำหรับเรา โปรดสละเวลาสักเล็กน้อยในการประเมินความพึงพอใจในโปรเจคนี้
      </p>
      <button onclick="document.location='https://forms.gle/CnGL6QgHaiBtHMqG7'" > ทำแบบประเมิน </button>
      </div>
    </div>
  `
  document.getElementById('alertmsg').innerHTML = `
  <p class="fadein disclaimer"> ผลการประเมินจากแบบทดสอบโรควิตกกังวล GAD-7 ผลการประเมินอาจคลาดเคลื่อนได้ </p>
  `
  var result = document.getElementById("result")
  result.innerHTML = localStorage.getItem("status")
  var name = document.getElementById("username")
  name.innerHTML = localStorage.getItem("name")
}


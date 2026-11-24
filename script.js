const games = [
{age:"5-8",title:"Rangni top",icon:"🎨",desc:"Ranglar ketma-ketligidan keyingisini toping.",type:"choice",qs:[
["Qizil, ko‘k, qizil, ko‘k, ... Keyingi rang?","🔴 🔵 🔴 🔵","Qizil","Ko‘k","Yashil","Sariq", "Qizil"],
["Sariq, sariq, yashil, sariq, sariq, yashil, ...?","🟡 🟡 🟢 🟡 🟡 🟢","Yashil","Sariq","Ko‘k","Qizil","Sariq"],
["🔵 🔵 🔴 🔵 🔵 🔴 ... Keyingi?","Naqshni davom ettiring.","Ko‘k","Qizil","Yashil","Sariq","Ko‘k"]]},
{age:"5-8",title:"Ortiqchasini top",icon:"🦊",desc:"Qaysi biri boshqalarga o‘xshamaydi?",type:"choice",qs:[
["Qaysi biri meva emas?","🍎 🍌 🥕 🍇","Olma","Banan","Sabzi","Uzum","Sabzi"],
["Qaysi biri uchmaydi?","🐦 🦋 ✈️ 🐢","Qush","Kapalak","Samolyot","Toshbaqa","Toshbaqa"],
["Qaysi biri transport emas?","🚗 🚲 🚌 🍉","Mashina","Velosiped","Avtobus","Tarvuz","Tarvuz"]]},
{age:"5-8",title:"Nechta ekan?",icon:"🔢",desc:"Rasmdagi narsalarni sanang.",type:"choice",qs:[
["🍓 🍓 🍓 🍓 — nechta qulupnay?","","2","3","4","5","4"],
["⭐ ⭐ ⭐ ⭐ ⭐ ⭐ — nechta yulduz?","","5","6","7","8","6"],
["🐟 🐟 🐟 — nechta baliq?","","2","3","4","5","3"]]},
{age:"5-8",title:"Shakllar olami",icon:"🔺",desc:"Oddiy shakllarni tanib oling.",type:"choice",qs:[
["Uchta burchagi bor shakl qaysi?","", "Doira","Uchburchak","Kvadrat","To‘rtburchak","Uchburchak"],
["Qaysi shaklning burchagi yo‘q?","","Kvadrat","Uchburchak","Doira","Yulduz","Doira"],
["To‘rtta teng tomoni bor shakl?","","Kvadrat","Doira","Uchburchak","Oval","Kvadrat"]]},
{age:"5-8",title:"Xotira sinovi",icon:"🧠",desc:"Belgilarni eslab, savolga javob bering.",type:"choice",qs:[
["🍎 ⭐ 🐸 — o‘rtada nima bor edi?","Belgilarni diqqat bilan eslang.","Olma","Yulduz","Qurbaqa","Oy","Yulduz"],
["🚗 🌙 🎈 — oxirida nima bor edi?","","Mashina","Oy","Shar","Quyosh","Shar"],
["🐱 🍀 ⚽ — birinchi nima edi?","","Mushuk","Barg","To‘p","Qush","Mushuk"]]},
{age:"5-8",title:"Kichik matematika",icon:"➕",desc:"Tez va aniq hisoblang.",type:"choice",qs:[
["2 + 3 = ?","","4","5","6","7","5"],["7 − 4 = ?","","2","3","4","5","3"],["1 + 6 = ?","","6","7","8","9","7"]]},
{age:"5-8",title:"Hayvonlar uyi",icon:"🐾",desc:"Hayvonlarni yashash joyi bilan bog‘lang.",type:"choice",qs:[
["Baliq qayerda yashaydi?","","Daraxtda","Suvda","Uyada","Cho‘lda","Suvda"],["Qush qayerda uya quradi?","","Daraxtda","Suvda","Yer ostida","Muzda","Daraxtda"],["Tuya ko‘proq qayerga moslashgan?","","Okean","Cho‘l","Qutb","O‘rmon","Cho‘l"]]},
{age:"5-8",title:"Nimani davom ettir?",icon:"🧩",desc:"Mantiqiy ketma-ketlikni davom ettiring.",type:"choice",qs:[
["1, 2, 3, 4, ...","","4","5","6","7","5"],["Dushanba, Seshanba, ...","","Yakshanba","Chorshanba","Juma","Shanba","Chorshanba"],["Kichik, o‘rta, katta, ... eng ...?","","kichik","katta","uzun","past","katta"]]},
{age:"5-8",title:"Soyani top",icon:"🌙",desc:"Buyumning mos tavsifini toping.",type:"choice",qs:[
["Quyosh botganda osmonda ko‘proq nima ko‘rinadi?","","Yulduzlar","Baliqlar","Gullar","Barglar","Yulduzlar"],["Muz issiqda nima qiladi?","","Qotadi","Erib suv bo‘ladi","Uchadi","O‘sadi","Erib suv bo‘ladi"],["Kechasi qaysi chiroq osmonda ko‘rinadi?","","Oy","Daraxt","Stol","Kitob","Oy"]]},
{age:"5-8",title:"So‘z jumboq",icon:"🔤",desc:"Ma’noga mos so‘zni toping.",type:"choice",qs:[
["Qaysi so‘z hayvon nomi?","","Stol","Mushuk","Qalam","Deraza","Mushuk"],["Qaysi biri kiyim?","","Olma","Ko‘ylak","Daryo","Bulut","Ko‘ylak"],["Qaysi biri ichimlik?","","Suv","Tosh","Qog‘oz","G‘isht","Suv"]]},
{age:"10-18",title:"Sonlar ketma-ketligi",icon:"📈",desc:"Qonuniyatni aniqlang.",type:"choice",qs:[
["2, 4, 8, 16, ...","","18","24","32","36","32"],["3, 6, 11, 18, 27, ...","","36","38","40","42","38"],["1, 4, 9, 16, 25, ...","","30","32","36","49","36"]]},
{age:"10-18",title:"Mantiqiy xulosa",icon:"🕵️",desc:"Berilgan shartlardan to‘g‘ri xulosa chiqaring.",type:"choice",qs:[
["Barcha atirgullar gul. Ayrim gullar tez so‘ladi. Qaysi xulosa aniq?","","Barcha atirgullar tez so‘ladi","Atirgullar gul hisoblanadi","Hech bir gul so‘lmaydi","Atirgul gul emas","Atirgullar gul hisoblanadi"],
["Ali Validen baland. Vali Sardordan baland. Eng past kim?","","Ali","Vali","Sardor","Aniq emas","Sardor"],
["Barcha kitoblar javonda. Bu buyum kitob. Demak...","","Buyum javonda","Buyum stol ostida","Javon kitob","Aniq emas","Buyum javonda"]]},
{age:"10-18",title:"Tezkor hisob",icon:"⚡",desc:"Hisoblash va diqqatni birlashtiring.",type:"choice",qs:[
["18 × 5 − 20 = ?","","60","70","80","90","70"],["144 ÷ 12 + 7 = ?","","17","18","19","20","19"],["25 ning 20 foizi nechaga teng?","","4","5","6","8","5"]]},
{age:"10-18",title:"Harflar siri",icon:"🔐",desc:"Kod va harf qonuniyatini toping.",type:"choice",qs:[
["A=1, B=2, C=3 bo‘lsa, E=?","","4","5","6","7","5"],["So‘z teskari yozilsa: KITOB → ?","","BOTIK","KIBOT","TOBIK","BITOK","BOTIK"],["A, C, E, G, ... keyingi harf?","","H","I","J","K","I"]]},
{age:"10-18",title:"Shartli jumboq",icon:"🧩",desc:"Bir nechta shartni bir vaqtda hisobga oling.",type:"choice",qs:[
["Uch do‘st: Anvar birinchi emas, Bekzod oxirgi emas. Sardor birinchi. Kim ikkinchi?","","Anvar","Bekzod","Sardor","Aniq emas","Anvar"],
["Qutida faqat qizil va ko‘k sharlar bor. Ko‘rmasdan bitta shar olinsa, qaysi rang chiqishi kafolat?","","Qizil","Ko‘k","Ikkalasi ham emas","Hech biri","Ikkalasi ham emas"],
["Dars 9:00 da boshlandi va 45 daqiqa davom etdi. Qachon tugadi?","","9:35","9:40","9:45","10:00","9:45"]]},
{age:"10-18",title:"Geometrik fikr",icon:"📐",desc:"Shakllar va o‘lchamlar haqida o‘ylang.",type:"choice",qs:[
["Kvadrat perimetri 20 sm. Bir tomoni?","","4 sm","5 sm","6 sm","10 sm","5 sm"],["Uchburchak burchaklari yig‘indisi?","","90°","180°","270°","360°","180°"],["Radiusi 3 sm bo‘lgan doira diametri?","","3 sm","6 sm","9 sm","12 sm","6 sm"]]},
{age:"10-18",title:"Kim rost gapiryapti?",icon:"🎭",desc:"Gaplar orasidagi mantiqiy moslikni toping.",type:"choice",qs:[
["Faqat bittasi rost: A: 'B rost', B: 'C yolg‘on', C: 'A yolg‘on'. Qaysi biri rost bo‘lishi mumkin?","","A","B","C","Hech biri","C"],
["Ali: 'Men yutmadim'. Vali: 'Ali yutdi'. Ulardan bittasi yolg‘on gapirdi. Kim yutgan?","","Ali","Vali","Aniq emas","Ikkalasi","Ali"],
["Uch chiroqdan bittasi yonib turibdi. Qizil emas, ko‘k ham emas. Qaysi?","","Qizil","Ko‘k","Yashil","Hech biri","Yashil"]]},
{age:"10-18",title:"Xotira va diqqat",icon:"👀",desc:"Mayda tafsilotlarni ilg‘ang.",type:"choice",qs:[
["2, 5, 2, 7, 2, 9. Qaysi son takrorlangan?","","2","5","7","9","2"],["Qaysi so‘z alifbo tartibida oldin keladi?","","Olma","Anor","Banan","Uzum","Anor"],["Bir soatda nechta 15 daqiqalik bo‘lak bor?","","2","3","4","5","4"]]},
{age:"10-18",title:"So‘zlar bog‘lanishi",icon:"📚",desc:"O‘xshash munosabatni toping.",type:"choice",qs:[
["Kitob : o‘qish = qoshiq : ?","","Yozish","Ichish/yeyish","Yugurish","Chizish","Ichish/yeyish"],["Shifokor : shifoxona = o‘qituvchi : ?","","Bozor","Maktab","Stadion","Bank","Maktab"],["Kun : tun = yorug‘ : ?","","Issiq","Qorong‘i","Oq","Katta","Qorong‘i"]]},
{age:"10-18",title:"Strategik tanlov",icon:"♟️",desc:"Eng oqilona xulosani tanlang.",type:"choice",qs:[
["Bir vazifani 3 kishi 6 soatda bajaradi. Tezlik bir xil bo‘lsa, 6 kishi necha soat?","","1","2","3","6","3"],["5 ta mashina 5 daqiqada 5 detal tayyorlasa, 1 mashina 1 detalni qancha vaqtda tayyorlaydi?","","1 daqiqa","5 daqiqa","10 daqiqa","25 daqiqa","5 daqiqa"],["Bugun chorshanba. 10 kundan keyin qaysi kun?","","Juma","Shanba","Yakshanba","Dushanba","Shanba"]]},
{age:"18-20",title:"Murakkab ketma-ketlik",icon:"🧬",desc:"Yashirin matematik qonuniyatni yeching.",type:"choice",qs:[
["1, 2, 6, 24, 120, ...","","240","360","600","720","720"],["4, 9, 19, 39, 79, ...","","119","149","159","169","159"],["2, 3, 5, 9, 17, ...","","25","31","33","35","33"]]},
{age:"18-20",title:"Deduksiya laboratoriyasi",icon:"🔬",desc:"Mantiqiy zaruriyatni farqlang.",type:"choice",qs:[
["Agar P→Q va Q→R rost bo‘lsa, qaysi biri albatta rost?","","R→P","P→R","Q→P","R→Q","P→R"],["Hech bir X — Y emas. Barcha Z — X. Qaysi xulosa to‘g‘ri?","","Ayrim Z — Y","Hech bir Z — Y emas","Barcha Y — Z","Aniq emas","Hech bir Z — Y emas"],["Agar yomg‘ir yog‘sa, yo‘l ho‘l bo‘ladi. Yo‘l ho‘l. Demak yomg‘ir yog‘ganmi?","","Albatta","Yo‘q, bu shartdan kelib chiqmaydi","Har doim","Faqat yozda","Yo‘q, bu shartdan kelib chiqmaydi"]]},
{age:"18-20",title:"Ehtimollik sinovi",icon:"🎲",desc:"Ehtimollikni hisoblang.",type:"choice",qs:[
["Oddiy kubikda juft son tushish ehtimoli?","","1/6","1/3","1/2","2/3","1/2"],["Tanga ikki marta tashlandi. Ikkalasi ham gerb bo‘lish ehtimoli?","","1/2","1/3","1/4","3/4","1/4"],["Qopda 3 qizil, 2 ko‘k shar. Qizil olish ehtimoli?","","2/5","3/5","1/2","3/2","3/5"]]},
{age:"18-20",title:"Kod buzuvchi",icon:"💻",desc:"Kodlangan fikrni tahlil qiling.",type:"choice",qs:[
["Har bir harf alifboda bittaga oldinga surilgan: B→C. CAT qanday bo‘ladi?","","DBU","CBU","DBT","EBU","DBU"],["2, 6, 12, 20, 30, ...","","36","40","42","44","42"],["Agar 3★4 = 3²+4² bo‘lsa, 3★4=?","","7","12","25","49","25"]]},
{age:"18-20",title:"Vaqt va unumdorlik",icon:"⏱️",desc:"Ish tezligi masalalarini tahlil qiling.",type:"choice",qs:[
["A ishni 6 soatda, B 3 soatda tugatadi. Birga necha soatda?","","1 soat","2 soat","3 soat","4 soat","2 soat"],["Bir kran hovuzni 4 soatda to‘ldiradi. 1 soatda hovuzning qancha qismini to‘ldiradi?","","1/2","1/3","1/4","1/5","1/4"],["Mashina 60 km/soat tezlikda 2,5 soat yursa, masofa?","","120 km","130 km","150 km","180 km","150 km"]]},
{age:"18-20",title:"Paradoks va tafakkur",icon:"♾️",desc:"Savolning nozik tomonini anglang.",type:"choice",qs:[
["Bir poygada ikkinchi o‘rindagi yuguruvchini quvib o‘tdingiz. Endi nechanchi o‘rindasiz?","","Birinchi","Ikkinchi","Uchinchi","To‘rtinchi","Ikkinchi"],["Ota va o‘g‘il yoshlarining yig‘indisi 50. Ota o‘g‘lidan 30 yosh katta. O‘g‘il necha yosh?","","10","15","20","25","10"],["Qaysi oyda 28 kun bor?","","Faqat fevralda","Barcha oylarda","Yanvarda","Dekabrda","Barcha oylarda"]]},
{age:"18-20",title:"Tizimli fikrlash",icon:"🧠",desc:"Muammoni bir necha qadamda yeching.",type:"choice",qs:[
["3 ta printer 3 daqiqada 3 sahifa chiqarsa, 9 printer 9 sahifani necha daqiqada chiqaradi?","","1","3","6","9","3"],["Ketma-ketlik: 8, 5, 9, 6, 10, 7, ...","","8","10","11","12","11"],["Agar bugun oyning 10-kuni bo‘lsa, 17 kundan keyin sana?","","25","26","27","28","27"]]},
{age:"18-20",title:"Murakkab analogiya",icon:"🔗",desc:"Tushunchalar o‘rtasidagi munosabatni toping.",type:"choice",qs:[
["Mikroskop : kichik = teleskop : ?","","Uzoq","Yorug‘","Tez","Katta","Uzoq"],["Muallif : roman = bastakor : ?","","Rasm","Simfoniya","Haykal","Formula","Simfoniya"],["Sabab : natija = savol : ?","","Javob","Kitob","Muammo","Tajriba","Javob"]]},
{age:"18-20",title:"Final: mantiq ustasi",icon:"🏆",desc:"Yakuniy darajadagi uchta jumboq.",type:"choice",qs:[
["Bir sonning 40 foizi 28 ga teng. Sonni toping.","","56","60","70","80","70"],["Agar x+y=10 va x−y=4 bo‘lsa, x=?","","3","5","7","8","7"],["1, 1, 2, 3, 5, 8, ... keyingi son?","","11","12","13","15","13"]]}
];

let player = localStorage.getItem("bz_player") || "";
let score = Number(localStorage.getItem("bz_score") || 0);
let played = Number(localStorage.getItem("bz_played") || 0);
let activeAge = "all", activeGame = null, qIndex = 0, points = 0, selected = null, checked = false, finished = false;
const $ = id => document.getElementById(id);
function updateStats(){ $("totalScore").textContent=score; $("playedCount").textContent=played; }
function enter(){
 const name=$("username").value.trim();
 if(!name){toast("Avval o‘yinchi nomini kiriting!");$("username").focus();return;}
 player=name; localStorage.setItem("bz_player",player); showDashboard();
}
function showDashboard(){
 $("welcome").classList.add("hidden");$("playArea").classList.add("hidden");$("dashboard").classList.remove("hidden");
 $("headerUser").textContent=player;$("playerName").textContent=player.toUpperCase();updateStats();renderGames();
}
function renderGames(){
 const query=$("search").value.toLowerCase();const root=$("gameSections");root.innerHTML="";
 const groups=[["5-8","🌱 Boshlang‘ich daraja","Ranglar, shakllar va sodda mantiq."],["10-18","🚀 O‘rta daraja","Hisoblash, tahlil va diqqat."],["18-20","🔥 Yuqori daraja","Murakkab mantiq va strategik fikrlash."]];
 groups.forEach(([age,title,sub])=>{
  if(activeAge!=="all"&&activeAge!==age)return;
  const list=games.map((g,i)=>({...g,index:i})).filter(g=>g.age===age&&(`${g.title} ${g.desc}`).toLowerCase().includes(query));
  if(!list.length)return;
  const section=document.createElement("section");section.className="section";
  section.innerHTML=`<div class="section-head"><div><h3>${title}</h3><p>${sub}</p></div><span class="muted">${list.length} ta o‘yin</span></div><div class="game-grid"></div>`;
  const grid=section.querySelector(".game-grid");
  list.forEach(g=>{const card=document.createElement("article");card.className="game-card";card.innerHTML=`<div class="card-top"><div class="game-icon">${g.icon}</div><span class="level">${g.age} yosh</span></div><h4>${g.title}</h4><p>${g.desc}</p><div class="card-bottom"><span>3 ta savol · 3 raund</span><span class="play-label">O‘ynash →</span></div>`;card.addEventListener("click",()=>startGame(g.index));grid.appendChild(card);});
  root.appendChild(section);
 });
 if(!root.children.length)root.innerHTML='<p class="muted">Bu nom bilan o‘yin topilmadi.</p>';
}
function startGame(index){
 activeGame=games[index];qIndex=0;points=0;selected=null;checked=false;finished=false;
 $("dashboard").classList.add("hidden");$("playArea").classList.remove("hidden");
 $("gameAge").textContent=activeGame.age+" YOSH · MANTIQIY O‘YIN";$("gameTitle").textContent=activeGame.title;$("gameDesc").textContent=activeGame.desc;
 renderQuestion();window.scrollTo({top:0,behavior:"smooth"});
}
function renderQuestion(){
 const q=activeGame.qs[qIndex];selected=null;checked=false;
 $("roundLabel").textContent=`${qIndex+1} / ${activeGame.qs.length}`;$("progressBar").style.width=`${qIndex/activeGame.qs.length*100}%`;
 $("questionBox").innerHTML=`<div class="question-emoji">${activeGame.icon}</div><div class="question-text">${q[0]}</div>${q[1]?`<div class="question-hint">${q[1]}</div>`:""}`;
 const area=$("answerArea");area.innerHTML="";
 q.slice(2,6).forEach((answer,i)=>{const b=document.createElement("button");b.className="answer-btn";b.textContent=answer;b.addEventListener("click",()=>{if(checked)return;selected=answer;document.querySelectorAll(".answer-btn").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");$("nextBtn").disabled=false;$("nextBtn").textContent="Tekshirish →";$("feedback").textContent="Javobingizni tekshirishga tayyor.";});area.appendChild(b);});
 $("feedback").textContent="Javobingizni tanlang.";$("feedback").className="";$("nextBtn").disabled=true;$("nextBtn").textContent="Tekshirish →";
}
function next(){
 if(!checked){
  if(!selected)return;checked=true;const correct=selected===activeGame.qs[qIndex][6];
  if(correct){points+=10;$("feedback").textContent="Ajoyib! To‘g‘ri javob. +10 ball";$("feedback").className="good";}
  else{$("feedback").textContent=`Yaxshi urinish! To‘g‘ri javob: ${activeGame.qs[qIndex][6]}`;$("feedback").className="bad";}
  document.querySelectorAll(".answer-btn").forEach(b=>{if(b.textContent===activeGame.qs[qIndex][6])b.classList.add("correct");else if(b.textContent===selected)b.classList.add("wrong");});
  $("nextBtn").textContent=qIndex===activeGame.qs.length-1?"Natijani ko‘rish →":"Keyingi savol →";
 }else{
  qIndex++;if(qIndex<activeGame.qs.length)renderQuestion();else finishGame();
 }
}
function finishGame(){
 score+=points;played++;localStorage.setItem("bz_score",score);localStorage.setItem("bz_played",played);
 $("progressBar").style.width="100%";$("roundLabel").textContent="Tugadi";
 $("questionBox").innerHTML=`<div class="result"><div class="big">${points===30?"🏆":points>=10?"🌟":"💡"}</div><h3>O‘yin yakunlandi, ${player}!</h3><p>Siz ${points} / 30 ball to‘pladingiz.</p><p>${points===30?"Ajoyib natija! Barcha savollarga to‘g‘ri javob berdingiz.":points>=10?"Yaxshi harakat! Yana urinib ko‘ring.":"Mashq qilishda davom eting — har urinish sizni kuchaytiradi."}</p></div>`;
 $("answerArea").innerHTML="";$("feedback").textContent="Natijangiz saqlandi.";$("feedback").className="good";$("nextBtn").disabled=false;$("nextBtn").textContent="Boshqa o‘yin tanlash →";finished=true;
 updateStats();
}
function backToGames(){ $("playArea").classList.add("hidden");$("dashboard").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}
$("startBtn").addEventListener("click",enter);$("username").addEventListener("keydown",e=>{if(e.key==="Enter")enter();});
$("changeUser").addEventListener("click",()=>{if(player){$("dashboard").classList.add("hidden");$("playArea").classList.add("hidden");$("welcome").classList.remove("hidden");$("username").value=player;window.scrollTo({top:0,behavior:"smooth"});}});
$("nextBtn").addEventListener("click",next);$("backBtn").addEventListener("click",backToGames);
$("search").addEventListener("input",renderGames);
$("filters").addEventListener("click",e=>{const b=e.target.closest("button[data-age]");if(!b)return;activeAge=b.dataset.age;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderGames();});
if(player){$("username").value=player;showDashboard();}

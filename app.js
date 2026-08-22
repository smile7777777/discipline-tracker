
const STORAGE_KEY="disciplineTracker_v2";
let db=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{"days":{}}');
if(!db.days)db.days={};
if(!db.leetcodeProgress)db.leetcodeProgress={};
const PROBLEMS=[{"id": "1", "title": "Two Sum", "phase": "Phase 1", "category": "Array + Hash Table", "stars": 5, "tierS": true, "note": "用 Hash Table 把重複搜尋 complement 從 O(n²) 降到 O(n)。"}, {"id": "217", "title": "Contains Duplicate", "phase": "Phase 1", "category": "Array + Hash Table", "stars": 3, "tierS": false, "note": "看到「是否出現過」時建立 unordered_set 直覺。"}, {"id": "242", "title": "Valid Anagram", "phase": "Phase 1", "category": "Array + Hash Table", "stars": 3, "tierS": false, "note": "Frequency counting；比較 hash map 與固定大小 array。"}, {"id": "49", "title": "Group Anagrams", "phase": "Phase 1", "category": "Array + Hash Table", "stars": 3, "tierS": false, "note": "練習如何設計穩定的 Hash Key。"}, {"id": "125", "title": "Valid Palindrome", "phase": "Phase 1", "category": "Two Pointers", "stars": 3, "tierS": false, "note": "左右指標最基本模型。"}, {"id": "167", "title": "Two Sum II", "phase": "Phase 1", "category": "Two Pointers", "stars": 4, "tierS": false, "note": "Sorted array + two pointers；理解移動指標為何不漏答案。"}, {"id": "283", "title": "Move Zeroes", "phase": "Phase 1", "category": "Two Pointers", "stars": 4, "tierS": false, "note": "Fast / Slow pointer 與原地 array 操作。"}, {"id": "121", "title": "Best Time to Buy and Sell Stock", "phase": "Phase 1", "category": "Sliding Window", "stars": 4, "tierS": false, "note": "維護目前最佳狀態，建立單趟掃描思維。"}, {"id": "3", "title": "Longest Substring Without Repeating Characters", "phase": "Phase 1", "category": "Sliding Window", "stars": 5, "tierS": false, "note": "Hash + Window 綜合；維護合法連續區間。"}, {"id": "20", "title": "Valid Parentheses", "phase": "Phase 1", "category": "Stack", "stars": 5, "tierS": true, "note": "Stack 與巢狀結構；對 Parser 直覺很重要。"}, {"id": "155", "title": "Min Stack", "phase": "Phase 1", "category": "Stack", "stars": 3, "tierS": false, "note": "設計額外 state，讓操作維持 O(1)。"}, {"id": "150", "title": "Evaluate Reverse Polish Notation", "phase": "Phase 1", "category": "Stack", "stars": 5, "tierS": true, "note": "Expression evaluation；Compiler 面試很值得刷。"}, {"id": "739", "title": "Daily Temperatures", "phase": "Phase 1", "category": "Stack", "stars": 3, "tierS": false, "note": "Monotonic Stack 入門。"}, {"id": "206", "title": "Reverse Linked List", "phase": "Phase 1", "category": "Linked List", "stars": 5, "tierS": true, "note": "Pointer manipulation；iterative / recursive 都要理解。"}, {"id": "21", "title": "Merge Two Sorted Lists", "phase": "Phase 1", "category": "Linked List", "stars": 5, "tierS": true, "note": "Dummy node 與 pointer 操作。"}, {"id": "141", "title": "Linked List Cycle", "phase": "Phase 1", "category": "Linked List", "stars": 5, "tierS": true, "note": "Fast / Slow pointer；能解釋為何會相遇。"}, {"id": "19", "title": "Remove Nth Node From End of List", "phase": "Phase 1", "category": "Linked List", "stars": 4, "tierS": false, "note": "Dummy node + Two pointers。"}, {"id": "704", "title": "Binary Search", "phase": "Phase 1", "category": "Binary Search", "stars": 5, "tierS": true, "note": "不只找值，也要理解單調答案空間。"}, {"id": "35", "title": "Search Insert Position", "phase": "Phase 1", "category": "Binary Search", "stars": 3, "tierS": false, "note": "Lower bound 直覺。"}, {"id": "33", "title": "Search in Rotated Sorted Array", "phase": "Phase 1", "category": "Binary Search", "stars": 4, "tierS": false, "note": "辨識哪一半仍具單調性。"}, {"id": "104", "title": "Maximum Depth of Binary Tree", "phase": "Phase 1", "category": "Binary Tree", "stars": 5, "tierS": true, "note": "Recursion 與 subtree result 組合。"}, {"id": "226", "title": "Invert Binary Tree", "phase": "Phase 1", "category": "Binary Tree", "stars": 4, "tierS": false, "note": "Recursion 操作 Tree。"}, {"id": "102", "title": "Binary Tree Level Order Traversal", "phase": "Phase 1", "category": "Binary Tree", "stars": 5, "tierS": true, "note": "Tree BFS + Queue。"}, {"id": "98", "title": "Validate Binary Search Tree", "phase": "Phase 1", "category": "Binary Tree", "stars": 5, "tierS": false, "note": "Constraint propagation；不能只比較 parent。"}, {"id": "236", "title": "Lowest Common Ancestor of a Binary Tree", "phase": "Phase 1", "category": "Binary Tree", "stars": 5, "tierS": true, "note": "Recursive reasoning，很適合白板解釋。"}, {"id": "200", "title": "Number of Islands", "phase": "Phase 1", "category": "Graph", "stars": 5, "tierS": true, "note": "Graph DFS/BFS 的第一題。"}, {"id": "133", "title": "Clone Graph", "phase": "Phase 1", "category": "Graph", "stars": 4, "tierS": false, "note": "Traversal + Hash Map，處理已建立節點。"}, {"id": "207", "title": "Course Schedule", "phase": "Phase 1", "category": "Graph", "stars": 5, "tierS": true, "note": "Cycle detection + dependency graph；Compiler 必刷。"}, {"id": "210", "title": "Course Schedule II", "phase": "Phase 1", "category": "Graph", "stars": 5, "tierS": true, "note": "Topological Sort；Compiler 必刷。"}, {"id": "215", "title": "Kth Largest Element in an Array", "phase": "Phase 1", "category": "Heap / Priority Queue", "stars": 5, "tierS": false, "note": "Heap / Top-K 與 O(log n) 操作。"}, {"id": "347", "title": "Top K Frequent Elements", "phase": "Phase 1", "category": "Heap / Priority Queue", "stars": 4, "tierS": false, "note": "Frequency + Heap / Bucket 思維。"}, {"id": "78", "title": "Subsets", "phase": "Phase 1", "category": "Backtracking", "stars": 5, "tierS": false, "note": "Choose → search → undo 的標準模板。"}, {"id": "46", "title": "Permutations", "phase": "Phase 1", "category": "Backtracking", "stars": 4, "tierS": false, "note": "搜尋狀態與 used set。"}, {"id": "39", "title": "Combination Sum", "phase": "Phase 1", "category": "Backtracking", "stars": 3, "tierS": false, "note": "選擇空間、剪枝、重複選取。"}, {"id": "70", "title": "Climbing Stairs", "phase": "Phase 1", "category": "Dynamic Programming", "stars": 5, "tierS": false, "note": "先定義 state / transition / base case。"}, {"id": "198", "title": "House Robber", "phase": "Phase 1", "category": "Dynamic Programming", "stars": 5, "tierS": false, "note": "現在選或不選的狀態轉移。"}, {"id": "322", "title": "Coin Change", "phase": "Phase 1", "category": "Dynamic Programming", "stars": 5, "tierS": false, "note": "典型 DP Medium；明確定義 state。"}, {"id": "300", "title": "Longest Increasing Subsequence", "phase": "Phase 1", "category": "Dynamic Programming", "stars": 4, "tierS": false, "note": "先理解 O(n²) DP，再理解 O(n log n)。"}, {"id": "191", "title": "Number of 1 Bits", "phase": "Phase 1", "category": "Bit Manipulation", "stars": 5, "tierS": true, "note": "n & (n-1) 清最低位 1。"}, {"id": "136", "title": "Single Number", "phase": "Phase 1", "category": "Bit Manipulation", "stars": 5, "tierS": true, "note": "XOR 性質：x^x=0、x^0=x。"}, {"id": "338", "title": "Counting Bits", "phase": "Phase 1", "category": "Bit Manipulation", "stars": 4, "tierS": false, "note": "從較小 state 推導 bit count。"}, {"id": "190", "title": "Reverse Bits", "phase": "Phase 1", "category": "Bit Manipulation", "stars": 4, "tierS": false, "note": "Bit extraction、shift 與 representation。"}, {"id": "56", "title": "Merge Intervals", "phase": "Phase 1", "category": "Interval", "stars": 5, "tierS": true, "note": "Sort by start → overlap → merge；可類比 live range。"}, {"id": "435", "title": "Non-overlapping Intervals", "phase": "Phase 1", "category": "Interval", "stars": 5, "tierS": true, "note": "Greedy + Interval；對 scheduling/allocation reasoning 有價值。"}, {"id": "8", "title": "String to Integer (atoi)", "phase": "Phase 2", "category": "Parsing / Expression", "stars": 5, "tierS": true, "note": "Parsing、overflow、boundary condition、C/C++ integer。"}, {"id": "394", "title": "Decode String", "phase": "Phase 2", "category": "Parsing / Expression", "stars": 4, "tierS": false, "note": "Nested structure + Stack + parsing state。"}, {"id": "224", "title": "Basic Calculator", "phase": "Phase 2", "category": "Parsing / Expression", "stars": 5, "tierS": true, "note": "Token、operator、parentheses、evaluation，接近簡化 Parser。"}, {"id": "146", "title": "LRU Cache", "phase": "Phase 2", "category": "Cache / Data Structure", "stars": 5, "tierS": true, "note": "Hash Map + Doubly Linked List，組合成 O(1) system。"}, {"id": "802", "title": "Find Eventual Safe States", "phase": "Phase 2", "category": "Graph / CFG", "stars": 5, "tierS": false, "note": "Cycle / terminal behavior，可類比 CFG 分析。"}, {"id": "684", "title": "Redundant Connection", "phase": "Phase 2", "category": "Graph / CFG", "stars": 4, "tierS": false, "note": "Union-Find：find / union / path compression。"}, {"id": "208", "title": "Implement Trie", "phase": "Phase 2", "category": "Symbol / Prefix", "stars": 4, "tierS": false, "note": "Identifier / prefix / dictionary structure。"}, {"id": "57", "title": "Insert Interval", "phase": "Phase 2", "category": "Interval / Register Allocation", "stars": 4, "tierS": false, "note": "Interval 插入與合併。"}, {"id": "2406", "title": "Divide Intervals Into Minimum Number of Groups", "phase": "Phase 2", "category": "Interval / Register Allocation", "stars": 5, "tierS": false, "note": "Overlap → 不同資源；接近 register allocation intuition。"}, {"id": "137", "title": "Single Number II", "phase": "Phase 2", "category": "Advanced Bit", "stars": 4, "tierS": false, "note": "以 bit representation 推理出現次數。"}, {"id": "260", "title": "Single Number III", "phase": "Phase 2", "category": "Advanced Bit", "stars": 5, "tierS": false, "note": "XOR 找 distinguishing bit 後 partition。"}, {"id": "201", "title": "Bitwise AND of Numbers Range", "phase": "Phase 2", "category": "Advanced Bit", "stars": 4, "tierS": false, "note": "從二進位共同前綴理解 range AND。"}, {"id": "C1", "title": "CFG Traversal Lab", "phase": "Phase 3", "category": "Compiler-style", "stars": 5, "tierS": false, "note": "自己實作 adjacency list、DFS/BFS、pred/succ、cycle detection。"}, {"id": "C2", "title": "Topological Sort Lab", "phase": "Phase 3", "category": "Compiler-style", "stars": 5, "tierS": false, "note": "Kahn + DFS topo + cycle detection；LC207/210 的 Compiler 版。"}, {"id": "C3", "title": "Liveness Analysis", "phase": "Phase 3", "category": "Compiler-style", "stars": 5, "tierS": false, "note": "USE / DEF / LIVE_IN / LIVE_OUT 與 dataflow fixed point。"}, {"id": "C4", "title": "Live Interval & Register Allocation", "phase": "Phase 3", "category": "Compiler-style", "stars": 5, "tierS": false, "note": "畫 live interval、找 overlap、估最少 register。"}, {"id": "C5", "title": "Expression Parser", "phase": "Phase 3", "category": "Compiler-style", "stars": 5, "tierS": false, "note": "Tokenization、precedence、parentheses、AST、recursive parsing。"}];
const CONCEPTS={"Array + Hash Table": "Array index 可 O(1) 存取，但找值常是 O(n)。若需要快速知道某個 key 是否看過，考慮 unordered_map / unordered_set。", "Two Pointers": "利用排序、左右端或 fast/slow pointer，讓每個元素不必互相比較，常把 O(n²) 降成 O(n)。", "Sliding Window": "維護一段連續區間；右端加入元素，違反條件時移動左端直到重新合法。", "Stack": "LIFO。遇到括號、expression、nested structure、previous greater/smaller element 時優先想到 Stack。", "Linked List": "重點不是背模板，而是清楚 prev / cur / next 的指向、nullptr 與 edge cases。", "Binary Search": "真正核心是單調性：答案空間可切成 false…false / true…true，再找邊界。", "Binary Tree": "先熟 DFS（pre/in/post order）與 BFS。AST 本身就是 Tree，因此 recursion reasoning 很重要。", "Graph": "Compiler 中 CFG、Call Graph、Dependency Graph、DAG、Dataflow Graph 都是 Graph；至少熟 DFS/BFS/cycle/topological sort。", "Heap / Priority Queue": "用來快速維護最大、最小與 Top-K；理解 top O(1)、push/pop O(log n)。", "Backtracking": "做選擇 → 搜尋 → 撤銷選擇；重點是狀態、可選集合與剪枝。", "Dynamic Programming": "先定義 State、Transition、Base case；問『小問題答案如何組成目前答案？』。", "Bit Manipulation": "熟悉 &, |, ^, ~, <<, >>，並能從 bit representation 解釋技巧為什麼成立。", "Interval": "先排序再處理 overlap。可直接類比 variable live range、resource scheduling 與 register allocation。", "Parsing / Expression": "把字串拆成 token，維護 parsing state，處理括號、precedence、overflow 與 boundary conditions。", "Cache / Data Structure": "重點是把多種資料結構組合成符合複雜度需求的 system。", "Graph / CFG": "從 dependency / reachability / cycle 的角度思考；把 LeetCode graph 題映射回 CFG。", "Symbol / Prefix": "思考 identifier、prefix 與 dictionary structure；重點是資料結構設計而非『Compiler 一定用 Trie』。", "Interval / Register Allocation": "把 interval overlap 想成同時間競爭有限資源，是 register allocation 的好直覺。", "Advanced Bit": "不要只背 trick；要能逐 bit 說明為什麼 XOR、mask、partition 或 prefix 有效。", "Compiler-style": "把 DSA 技巧轉成 CFG、dataflow、liveness、register allocation、parser 的白板實作。"};
const $=id=>document.getElementById(id);
const num=v=>Number(v)||0;
const round1=v=>Math.round(v*10)/10;
const dailyFields=["mode","studyHours","importantResult","resultText","lcProblemId","lcMinutes","lcExtraCount","lcMasterySnapshot","lcStatusSnapshot","englishMinutes","music","waterMl","beverageType","beverageServings","walkMinutes","yogaMinutes","pushups","situps","legRaises","plankSeconds","otherExerciseMinutes","meals","social","relax","girlfriendMinutes","girlfriendQuality","gameHours","sleepTime","wakeTime","energy","mood","bestThing","tomorrowTask"];

function dateStr(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
$("datePicker").value=dateStr();

function norm(raw={}){
 return Object.assign({mode:"Normal",studyHours:0,importantResult:false,resultText:"",lcProblemId:"",lcMinutes:0,lcExtraCount:0,lcMasterySnapshot:0,lcStatusSnapshot:"",englishMinutes:0,music:false,waterMl:0,beverageType:"none",beverageServings:0,walkMinutes:0,yogaMinutes:0,pushups:0,situps:0,legRaises:0,plankSeconds:0,otherExerciseMinutes:raw.exerciseMinutes||0,meals:false,social:false,relax:false,girlfriendMinutes:0,girlfriendQuality:false,gameHours:0,sleepTime:"",wakeTime:"",energy:0,mood:0,bestThing:"",tomorrowTask:""},raw||{});
}
function readForm(){
 let d={};
 dailyFields.forEach(id=>{let el=$(id);d[id]=el.type==="checkbox"?el.checked:el.value});
 return d;
}
function writeForm(raw={}){
 let d=norm(raw);
 dailyFields.forEach(id=>{let el=$(id),v=d[id];if(!el)return;if(el.type==="checkbox")el.checked=!!v;else el.value=v??""});
 if(!d.mode)$("mode").value="Normal";
 updateRanges();
 updateDailyLcName();
 updateScore();
}
function ctxFor(date){
 let base=new Date(date+"T12:00:00"),active=0,strength=new Set();
 for(let i=0;i<7;i++){let x=new Date(base);x.setDate(base.getDate()-i);let k=dateStr(x),d=norm(db.days[k]||{});
  active+=num(d.walkMinutes)+num(d.yogaMinutes)+num(d.otherExerciseMinutes);
  if(num(d.pushups)+num(d.situps)+num(d.legRaises)+num(d.plankSeconds)>0)strength.add(k);
 }
 return {activeMinutes7:active,strengthDays7:strength.size};
}
function calcDay(date,raw){return ScoreEngine.score(raw,ctxFor(date))}
function save(silent=true){
 let date=$("datePicker").value,d=readForm();
 d.schemaVersion=4;d.savedAt=new Date().toISOString();
 db.days[date]=d;persist();if(!silent)toast("已儲存今天");
 updateWeekly();renderCalendar();
}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(db))}
function loadDate(){writeForm(db.days[$("datePicker").value]||{})}

function statusText(s,mode){
 if(mode==="Life Day")return s>=4?"Life Day ✓":"Life Day";
 if(mode==="Survival")return s>=2.5?"Survival ✓":"Survival";
 if(s>=8)return"很棒的一天";if(s>=6)return"正常成功日";if(s>=4)return"有往前走";return s>0?"慢慢來":"開始今天";
}
function updateScore(){
 let d=readForm(),s=calcDay($("datePicker").value,Object.assign({},d,{schemaVersion:4})).total;
 $("scoreNum").textContent=s.toFixed(1);$("scoreBar").style.width=Math.min(100,s/13*100)+"%";$("statusText").textContent=statusText(s,d.mode);
 $("heroNote").textContent=s>=8?"今天已經夠充實，不需要為了分數硬塞事情。":s>=6?"這是一個很適合長期維持的節奏。":s>=4?"有生活，也有往前走。":"照實記錄就好，分數不是考試。";
}
function updateRanges(){
 let e=num($("energy").value),m=num($("mood").value);$("energyVal").textContent=e||"—";$("moodVal").textContent=m||"—";
}
dailyFields.forEach(id=>{let el=$(id);if(!el)return;el.addEventListener("input",()=>{updateRanges();updateScore();save(true)});el.addEventListener("change",()=>{updateRanges();updateScore();save(true)})});
$("datePicker").addEventListener("change",()=>{loadDate();updateWeekly()});
$("todayBtn").onclick=()=>{$("datePicker").value=dateStr();loadDate()};
$("saveBtn").onclick=()=>save(false);
$("clearDay").onclick=()=>{if(confirm("確定清空這一天？")){delete db.days[$("datePicker").value];persist();writeForm({});updateWeekly();renderCalendar();toast("已清空")}};

function toast(t){let e=$("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1400)}
function showView(id){["dailyView","leetcodeView","weeklyView","calendarView","settingsView"].forEach(v=>$(v).classList.toggle("hidden",v!==id));document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===id));if(id==="leetcodeView")renderLC();if(id==="weeklyView")updateWeekly();if(id==="calendarView")renderCalendar();window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>showView(b.dataset.view));
$("openLcBtn").onclick=()=>showView("leetcodeView");

// ----- LeetCode -----
const masteryKeys=["structure","brute","opt","rewrite","time","space","edge"];
function pget(id){return PROBLEMS.find(p=>p.id===String(id))}
function prog(id){if(!db.leetcodeProgress[id])db.leetcodeProgress[id]={status:"not-started",mastery:{}};return db.leetcodeProgress[id]}
function masteryCount(id){let p=prog(id);return masteryKeys.reduce((a,k)=>a+(p.mastery&&p.mastery[k]?1:0),0)}
function statusLabel(s){return s==="mastered"?"掌握":s==="ac"?"AC":s==="attempting"?"進行中":"未開始"}
function setSelectedProblem(id,saveDay=true){
 let p=pget(id);if(!p)return;
 $("lcProblemId").value=p.id;$("dailyLcName").textContent=`LC ${p.id} — ${p.title}`;
 let pr=prog(p.id);$("lcStatus").value=pr.status||"not-started";
 document.querySelectorAll(".masterCheck").forEach(c=>c.checked=!!(pr.mastery&&pr.mastery[c.dataset.k]));
 $("lcDetailTitle").textContent=(p.id.startsWith("C")?"":`LC ${p.id} — `)+p.title;
 $("lcChips").innerHTML=`<span class="chip">${p.phase}</span><span class="chip">${p.category}</span><span class="chip">${"★".repeat(p.stars)}</span>${p.tierS?'<span class="chip tier">Tier S</span>':""}`;
 $("lcConcept").textContent=CONCEPTS[p.category]||"";
 $("lcNote").textContent=p.note;
 let d=db.days[$("datePicker").value]||{};$("lcDetailMinutes").value=d.lcProblemId===p.id?(d.lcMinutes||""):"";
 syncLcSnapshot();
 if(saveDay)save(true);
}
function updateDailyLcName(){let id=$("lcProblemId").value,p=pget(id);$("dailyLcName").textContent=p?`${p.id.startsWith("C")?"":("LC "+p.id+" — ")}${p.title}`:"尚未選題"}
function syncLcSnapshot(){
 let id=$("lcProblemId").value;if(!id)return;
 let pr=prog(id);$("lcMasterySnapshot").value=masteryCount(id);$("lcStatusSnapshot").value=pr.status||"not-started";
}
function nextProblem(){
 let ordered=[...PROBLEMS].sort((a,b)=>Number(b.tierS)-Number(a.tierS)||(["Phase 1","Phase 2","Phase 3"].indexOf(a.phase)-["Phase 1","Phase 2","Phase 3"].indexOf(b.phase)));
 return ordered.find(p=>prog(p.id).status!=="mastered")||ordered[0];
}
$("nextProblem").onclick=()=>{let p=nextProblem();setSelectedProblem(p.id);renderLC()};
$("lcStatus").addEventListener("change",()=>{let id=$("lcProblemId").value;if(!id)return;prog(id).status=$("lcStatus").value;syncLcSnapshot();persist();save(true);renderProblemList();renderRoadmap()});
document.querySelectorAll(".masterCheck").forEach(c=>c.addEventListener("change",()=>{let id=$("lcProblemId").value;if(!id)return;let pr=prog(id);if(!pr.mastery)pr.mastery={};pr.mastery[c.dataset.k]=c.checked;if(masteryCount(id)===7)pr.status="mastered";$("lcStatus").value=pr.status;syncLcSnapshot();persist();save(true);renderProblemList();renderRoadmap()}));
$("lcDetailMinutes").addEventListener("input",()=>{$("lcMinutes").value=$("lcDetailMinutes").value;save(true)});
function fillCategory(){
 let cats=[...new Set(PROBLEMS.map(p=>p.category))];$("lcCategoryFilter").innerHTML='<option value="all">全部</option>'+cats.map(c=>`<option>${c}</option>`).join("");
}
function filteredProblems(){
 let ph=$("lcPhaseFilter").value,cat=$("lcCategoryFilter").value,q=$("lcSearch").value.trim().toLowerCase();
 return PROBLEMS.filter(p=>(ph==="all"||p.phase===ph)&&(cat==="all"||p.category===cat)&&(!q||(`${p.id} ${p.title} ${p.category}`).toLowerCase().includes(q)));
}
function renderProblemList(){
 let arr=filteredProblems();$("problemCount").textContent=`${arr.length} 題`;
 $("problemList").innerHTML=arr.map(p=>{let s=prog(p.id).status,m=masteryCount(p.id);return `<button class="problem" data-id="${p.id}"><div><b>${p.id.startsWith("C")?"":("LC "+p.id+" · ")}${p.title}</b><small>${p.phase} · ${p.category} · 掌握 ${m}/7</small></div><span class="statusDot">${statusLabel(s)}</span></button>`}).join("");
 document.querySelectorAll(".problem").forEach(b=>b.onclick=()=>{setSelectedProblem(b.dataset.id);window.scrollTo({top:0,behavior:"smooth"})});
}
function renderRoadmap(){
 let phases=["Phase 1","Phase 2","Phase 3"];
 $("roadmapProgress").innerHTML=phases.map(ph=>{let a=PROBLEMS.filter(p=>p.phase===ph),done=a.filter(p=>prog(p.id).status==="mastered").length,pc=a.length?done/a.length*100:0;return `<div class="roadRow"><b>${ph}</b><div class="bar"><div style="width:${pc}%"></div></div><span>${done}/${a.length}</span></div>`}).join("");
}
function renderLC(){
 renderRoadmap();renderProblemList();
 let id=$("lcProblemId").value||nextProblem().id;setSelectedProblem(id,false);
}
["lcPhaseFilter","lcCategoryFilter","lcSearch"].forEach(id=>$(id).addEventListener(id==="lcSearch"?"input":"change",renderProblemList));
fillCategory();

// ----- Weekly -----
function weekDates(base){let d=new Date(base),day=(d.getDay()+6)%7;d.setHours(0,0,0,0);d.setDate(d.getDate()-day);return Array.from({length:7},(_,i)=>{let x=new Date(d);x.setDate(d.getDate()+i);return dateStr(x)})}
function streak(){let d=new Date(),n=0;while(db.days[dateStr(d)]){n++;d.setDate(d.getDate()-1)}return n}
function rank(s){return s>=50?"S｜非常充實":s>=42?"A｜理想狀態":s>=35?"B｜正常的一週":s>=28?"C｜找一項改善即可":"Reset｜先把基本生活顧好"}
function activity(d){d=norm(d);return num(d.walkMinutes)+num(d.yogaMinutes)+num(d.otherExerciseMinutes)+num(d.pushups)*.12+num(d.situps)*.10+num(d.legRaises)*.12+num(d.plankSeconds)/60}
function updateWeekly(){
 let dates=weekDates(new Date($("datePicker").value+"T12:00:00")),total=0,study=0,lc=0,en=0,ex=0,game=0,water=0,sug=0,gf=0,sl=0,names=["一","二","三","四","五","六","日"];$("weekDays").innerHTML="";
 dates.forEach((k,i)=>{let d=norm(db.days[k]||{}),s=calcDay(k,d).total;total+=s;study+=num(d.studyHours);lc+=num(d.lcMinutes)+(d.leetcodeCount?num(d.leetcodeCount)*20:0);if(num(d.englishMinutes)>0)en++;if(activity(d)>0)ex++;game+=num(d.gameHours);water+=num(d.waterMl);if(d.beverageType==="sugary")sug+=num(d.beverageServings);gf+=num(d.girlfriendMinutes);if(d.sleepTime)sl++;let el=document.createElement("div");el.className="day";el.innerHTML=`<span>週${names[i]}</span><strong>${s.toFixed(1)}</strong>`;el.onclick=()=>{$("datePicker").value=k;loadDate();showView("dailyView")};$("weekDays").appendChild(el)});
 $("weekScore").textContent=round1(total).toFixed(1);$("weekRank").textContent=rank(total);$("streakNum").textContent=streak();$("sumStudy").textContent=round1(study)+"h";$("sumLeet").textContent=Math.round(lc)+"m";$("sumEnglish").textContent=en+"天";$("sumExercise").textContent=ex+"天";$("sumGame").textContent=round1(game)+"h";$("sumWater").textContent=round1(water/1000)+"L";$("sumSugary").textContent=sug+"份";$("sumGirlfriend").textContent=round1(gf/60)+"h";$("sumSleep").textContent=sl+"/7";drawTrend();
}
function drawTrend(){
 let cv=$("trendChart"),r=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;cv.width=w*r;cv.height=h*r;let x=cv.getContext("2d");x.scale(r,r);x.clearRect(0,0,w,h);let vals=[];
 for(let i=13;i>=0;i--){let d=new Date();d.setDate(d.getDate()-i);let k=dateStr(d);vals.push({lab:`${d.getMonth()+1}/${d.getDate()}`,v:calcDay(k,db.days[k]||{}).total})}
 let p=25,max=13;x.strokeStyle="#ded8cf";x.lineWidth=1;for(let y=0;y<=12;y+=4){let py=h-p-y/max*(h-2*p);x.beginPath();x.moveTo(p,py);x.lineTo(w-p,py);x.stroke()}x.strokeStyle="#22211f";x.lineWidth=2.4;x.beginPath();vals.forEach((o,i)=>{let xx=p+i*(w-2*p)/(vals.length-1),yy=h-p-o.v/max*(h-2*p);i?x.lineTo(xx,yy):x.moveTo(xx,yy)});x.stroke();x.fillStyle="#22211f";vals.forEach((o,i)=>{let xx=p+i*(w-2*p)/(vals.length-1),yy=h-p-o.v/max*(h-2*p);x.beginPath();x.arc(xx,yy,3,0,Math.PI*2);x.fill()});x.fillStyle="#77716a";x.font="10px -apple-system";vals.forEach((o,i)=>{if(i%3===0||i===13){let xx=p+i*(w-2*p)/(vals.length-1);x.fillText(o.lab,xx-10,h-7)}});
}

// ----- Calendar -----
let monthCursor=new Date();monthCursor.setDate(1);
function renderCalendar(){
 let y=monthCursor.getFullYear(),m=monthCursor.getMonth();$("monthLabel").textContent=`${y} 年 ${m+1} 月`;let cal=$("calendar");cal.innerHTML="";["一","二","三","四","五","六","日"].forEach(t=>{let e=document.createElement("div");e.className="dow";e.textContent=t;cal.appendChild(e)});let first=new Date(y,m,1),off=(first.getDay()+6)%7,days=new Date(y,m+1,0).getDate();for(let i=0;i<off;i++){let b=document.createElement("div");b.className="heat blank";cal.appendChild(b)}for(let d=1;d<=days;d++){let x=new Date(y,m,d),k=dateStr(x),has=!!db.days[k],s=calcDay(k,db.days[k]||{}).total,e=document.createElement("button");e.className="heat "+(!has?"":s>=8?"good":s>=4?"mid":"low");e.textContent=d;e.onclick=()=>{$("datePicker").value=k;loadDate();showView("dailyView")};cal.appendChild(e)}}
$("prevMonth").onclick=()=>{monthCursor.setMonth(monthCursor.getMonth()-1);renderCalendar()};
$("nextMonth").onclick=()=>{monthCursor.setMonth(monthCursor.getMonth()+1);renderCalendar()};

// ----- Backup / PWA -----
$("exportBtn").onclick=()=>{let blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`生活自律打卡-${dateStr()}.json`;a.click();URL.revokeObjectURL(a.href)};
$("importFile").onchange=async e=>{let f=e.target.files[0];if(!f)return;try{let d=JSON.parse(await f.text());if(!d.days)throw 0;db=d;if(!db.leetcodeProgress)db.leetcodeProgress={};persist();loadDate();renderLC();updateWeekly();renderCalendar();toast("匯入完成")}catch{alert("備份檔格式不正確")}};
$("resetAll").onclick=()=>{if(confirm("確定刪除全部資料？")){db={days:{},leetcodeProgress:{}};persist();loadDate();renderLC();updateWeekly();renderCalendar();toast("已刪除全部資料")}};
let deferredPrompt=null;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installHint").textContent="這台裝置支援直接安裝。"});
$("installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else $("installHint").textContent="iPhone：Safari → 分享 → 加入主畫面。Android：Chrome → 安裝應用程式。"};
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));

loadDate();renderLC();updateWeekly();renderCalendar();

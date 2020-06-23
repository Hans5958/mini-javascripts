C=(k)=>!(k.split("-").map((v,i)=>!i?v[0]==v[1]&&v[0]==v[2]&&v[0]>=3:v.split("").reduce((t,n)=>t+n)%7==0&&(v.slice(-1)==0||v.slice(-1)>=8)).indexOf(!1))
O=(k)=>!(k.split("-").map((v,i)=>i<2?i?(v.slice(0,3)<367&&v.slice(3)>94)||v.slice(3)<3:v=="OEM":i-2?v.split("").reduce((t,n)=>t+n)%7==0&&(v.slice(-1)==0||v.slice(-1)>=8):v.length==5).indexOf(!1))

console.log(C("626-3307956"))

// 037-3307956
// 375-1140116
// 509-3999380

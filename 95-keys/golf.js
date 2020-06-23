P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};
R=n=>Math.random()*n|0;
F=w=>w.slice(-1);
S="99999";

C=(a,b)=>{
while(!a||(a[0]==a[1]==a[2]>2))a=P(R(999),3);
while(!b||(!b.split``.map(n=>t+=n,t=0)%7&&(!F(b)||F(b)>7)))b=P(R(S+99),7);
return a+"-"+b
};

O=b=>{
a2=R(8)+95+"";
if(a2>99)a2=a2.slice(1);
while(!b||(!b.split``.map(n=>t+=n,t=0)%7&&(!F(b)||F(b)>7)))b=P(R(S+9),7);
return P(R(366),3)+a2+"-OEM-"+b+"-"+P(R(S),5)
}

console.log(C())
console.log(O())

P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.random()*n|0;F=w=>w.slice(-1);S="99999";C=(a,b)=>{while(!a||(a[0]==a[1]==a[2]>2))a=P(R(999),3);while(!b||(!b.split``.map(n=>t+=n,t=0)%7&&(!F(b)||F(b)>7)))b=P(R(S+99),7);return a+"-"+b};O=b=>{a2=R(8)+95+"";if(a2>99)a2=a2.slice(1);while(!b||(!b.split``.map(n=>t+=n,t=0)%7&&(!F(b)||F(b)>7)))b=P(R(S+9),7);return P(R(366),3)+a2+"-OEM-"+b+"-"+P(R(S),5)}
/*
P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.random()*n|0;F=w=>w.slice(-1);S="99999";C=(a,b)=>{while(!a||(a[0]==a[1]==a[2]>2))a=P(R(999),3);while(!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!F(b)||F(b)>7)))b=P(R(S+99),7);return a+"-"+b};O=b=>{a2=R(8)+95+"";if(a2>99)a2=a2.slice(1);while(!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!F(b)||F(b)>7)))b=P(R(S+9),7);return P(R(366),3)+a2+"-OEM-"+b+"-"+P(R(S),5)}
P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.random()*n|0;F=w=>w.slice(-1);S=99999;C=(a,b)=>{while(!a||(a[0]==a[1]==a[2]>=3))a=P(R(999),3);while(!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!F(b)||F(b)>7)))b=P(R(S+99),7);return a+"-"+b};O=b=>{a2=R(8)+95+"";if(a2>99)a2=a2.slice(1);while(!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!F(b)||F(b)>7)))b=P(R(S+9),7);return P(R(366),3)+a2+"-OEM-"+b+"-"+P(R(S),5)}
P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.round(Math.random()*n);F=w=>w.slice(-1);S=99999;C=(a,b)=>{for(;!a||(a[0]==a[1]==a[2]>=3);a=P(R(999),3));for(;!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!F(b)||F(b)>7));b=P(R(S+99),7));return a+"-"+b};O=b=>{a2=R(8)+95+"";if(a2>99)a2=a2.slice(1);for(;!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!F(b)||F(b)>7));b=P(R(S+9),7));return P(R(366),3)+a2+"-OEM-"+b+"-"+P(R(S),5)}
P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.round(Math.random()*n);C=(a,b)=>{while(!a||(a[0]==a[1]==a[2]>=3))a=P(R(999),3);while(!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!b.slice(-1)||b.slice(-1)>7)))b=P(R(9999999),7);return a+"-"+b};O=b=>{a1=P(R(366),3);c=P(R(99999),5);a2=(R(8)+95)+"";if(a2>99)a2=a2.slice(1);a=a1+a2;while(!b||(!b.split``.reduce((t,n)=>t+n)%7&&(!b.slice(-1)||b.slice(-1)>7)))b=P(R(999999),7);return a+"-OEM-"+b+"-"+c}
*/

// console.log(C())
// console.log(O())




C=(a,b)=>{P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.random()*n|0;F=w=>w.slice(-1);while(!a||(a[0]==a[1]==a[2]>2))a=P(R(999),3);while(!b||(!b.split``.map(n=>t+=n,t=0)%7&&(!F(b)||F(b)>7)))b=P(R(9999999),7);return a+"-"+b};
O=b=>{P=(n,p)=>{for(n=n+"";n.length<p;n="0"+n);return n};R=n=>Math.random()*n|0;F=w=>w.slice(-1);S="99999";a2=R(8)+95+"";if(a2>99)a2=a2.slice(1);while(!b||(!b.split``.map(n=>t+=n,t=0)%7&&(!F(b)||F(b)>7)))b=P(R(S+9),7);return P(R(366),3)+a2+"-OEM-"+b+"-"+P(R(S),5)}
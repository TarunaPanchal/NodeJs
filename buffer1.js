var a = new Buffer(27);

for(i=0;i<27;i++)
{
    a[i] = i + 97;
}

console.log(a.toString('ascii'));
console.log(a.toString('ascii',0,5));
console.log(a.toString('utf8',0,6));
console.log(a.toString(undefined,0,7));


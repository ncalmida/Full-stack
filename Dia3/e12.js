let a = [1,1]

for (let index = 0; index < 10; index++) {
    let n = [a.length - 1] + a[a.length - 2]
    a.push(n)
}
console.log(a)
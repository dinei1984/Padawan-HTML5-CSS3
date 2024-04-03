const cursosTodos = [...document.getElementsByClassName('curso')]
const c1 = [...document.getElementsByClassName('c1')]
const c2 = [...document.getElementsByClassName('c2')]
const elementoEspecial = document.getElementsByClassName('curso')[6]

console.log(cursosTodos)
console.log(c1)
console.log(c2)
console.log(elementoEspecial)

c1.map((el)=>{
    el.classList.add('destaque')
})
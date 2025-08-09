let gallery=document.querySelector('.gallery')
let next=document.getElementById('next')
let mid=document.getElementById('mid')
let prev=document.getElementById('prev')

next.onclick=()=>{
    gallery.append(gallery.firstChild)
}

mid.onclick=()=>{
    let children=gallery.children
    let middleindex=Math.floor(children.length/2)
    let middleitem=children[middleindex]
    gallery.prepend(middleitem)
}
prev.onclick=()=>{
    gallery.prepend(gallery.lastChild)
}
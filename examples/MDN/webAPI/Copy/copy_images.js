const avatar = document.querySelector('img');
avatar.addEventListener("copy", async (e) => {
  console.log(e);
  e.stopPropagation();
  // e.clipboardData.setData('text/plain', '123');
  const content = await navigator.clipboard.read();
  for (const item of content) {
    for (const type of item.types) {
      if (type.startsWith("image")) {
        const b = await item.getType(type);
        const u = URL.createObjectURL(b);
        console.log(u);
      }
    }
  }
  //   console.log(123, e.clipboardData.getData('image/png'));
  // navigator.clipboard.writeText(document.getSelection() + '自定义：\nhhhhhhhh');
});

document.body.addEventListener('paste', e => {
    console.log(e);
    const file = e.clipboardData.files[0];
    const fr = new FileReader();
    fr.onload = (ret) => {
        const o = document.createElement('img');
        o.src = ret.target.result;
        document.body.append(o);
    }
    fr.readAsDataURL(file);
})


document.body.addEventListener('click', e => {
    if (e.target.nodeName.toLowerCase() === 'img') {
        e.target.classList.add('focus');
    }
    
})
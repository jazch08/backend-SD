window.addEventListener("load", ()=> {
    let selectInventario = document.querySelector("#inventario")
    selectInventario.addEventListener("change", ()=>{
        var str= selectInventario.options[selectInventario.selectedIndex].text;
        console.log(str)
    });

})
let productPluses = [];
let productMinuses = [];
let productPieces = [];
let pr1 = 0
let pr2 = 0
let pr3 = 0
let pr4 = 0
let totalAmount = document.querySelector(".totalAmount")
for (let i = 1; i <= 4; i++) {
    let plusButton = document.querySelector(`.product${i}Plus`);
    let minusButton = document.querySelector(`.product${i}Minus`);
    let pieceElement = document.querySelector(`.product${i}Piece`);
    productPluses.push(plusButton);
    productMinuses.push(minusButton);
    productPieces.push(pieceElement);
}
productPluses.forEach((productPlus) => {
    productPlus.addEventListener("click", () => {
        if (productPlus.className == "product1Plus" && pr1 < 10) {
            pr1++
            productPieces[0].innerHTML = pr1
        }
        if (productPlus.className == "product2Plus" && pr2 < 10) {
            pr2++
            productPieces[1].innerHTML = pr2
        }
        if (productPlus.className == "product3Plus" && pr3 < 10) {
            pr3++
            productPieces[2].innerHTML = pr3
        }
        if (productPlus.className == "product4Plus" && pr4 < 10) {
            pr4++
            productPieces[3].innerHTML = pr4
        }
        totalAmount.textContent = `Şu Anki Toplam Tutar: ${(pr1 * 159) + (pr2 * 249) + (pr3 * 29) + (pr4 * 39)} TL`
    })
})
productMinuses.forEach((productMinus) => {
    productMinus.addEventListener("click", () => {
        if (productMinus.className == "product1Minus" && pr1 > 0) {
            pr1--
            productPieces[0].innerHTML = pr1
        }
        if (productMinus.className == "product2Minus" && pr2 > 0) {
            pr2--
            productPieces[1].innerHTML = pr2
        }
        if (productMinus.className == "product3Minus" && pr3 > 0) {
            pr3--
            productPieces[2].innerHTML = pr3
        }
        if (productMinus.className == "product4Minus" && pr4 > 0) {
            pr4--
            productPieces[3].innerHTML = pr4
        }
        totalAmount.textContent = `Şu Anki Toplam Tutar: ${(pr1 * 159) + (pr2 * 249) + (pr3 * 29) + (pr4 * 39)} TL`
    })
})
document.querySelector(".hamperConfirm").addEventListener("click", () => {
    if (pr1 > 0 || pr2 > 0 || pr3 > 0 || pr4 > 0) {
        let elements = document.body.children
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i]
            element.remove()
        }
        document.querySelector(".hamperConfirmSuccessful").style.visibility = "visible"
    } else {
        alert("Sepetinizde En Az 1 Ürün Olması Gerekmektedir")
    }
})

const popupBox = document.getElementById('popupBox')
const closeBttn = document.getElementById('close-bttn')
const acceptBttn = document.getElementById('accept-bttn')
const textInBox = document.getElementById('text-in-box')
const bottomOfBox = document.getElementById('bottom-of-box')
const declineBttn = document.getElementById('decline-bttn')
const email = document.getElementById('email')
const password = document.getElementById('password')



setTimeout(function(){
    popupBox.style.display = 'inline'
    closeBttn.disabled = true
}, 1500)

closeBttn.addEventListener('click', function(){
  popupBox.style.display = "none"
})

  acceptBttn.addEventListener('click', function(){
    closeBttn.disabled = false
    textInBox.innerHTML = `<p>
      Thank you for signing up!
    </p>`
    bottomOfBox.innerHTML = ``
  })

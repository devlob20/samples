const section = document.querySelector('section')
const sectionContent = document.querySelectorAll('section div')
const checkbox = document.querySelectorAll('.checkbox')
const itemText = document.querySelectorAll('.item-text')
const progressBar = document.querySelector('.progress')
const progressTitle = document.getElementById('complete-title')
const btn = document.querySelector('.complete-button')

const itemValue = (checkbox.length / checkbox.length) * 100 / checkbox.length // Value = 8 / 8 = 1 * 100 / 8
const progressTracking = []

let globalProgress

const success = '<h1 style="text-align:center;vertical-align:middle;">Task Completed!</h1>'
 
progressTitle.innerHTML = '0% Complete'

for (let i = 0; i < checkbox.length; i++ ){
	checkbox[i].addEventListener('click', e => {
		let checkIcon = '<i class="ri-check-line"></i>'
		if (checkbox[i].classList.contains('checkbox-active')){
			checkbox[i].classList.remove('checkbox-active')
			itemText[i].classList.remove('text-checked')
			checkbox[i].innerHTML = ''
			progressTracking.pop()
			globalProgress = Math.round(progressTracking.length * itemValue)
			progressBar.style.width = `${globalProgress}%`
			progressTitle.innerHTML = `${globalProgress}% Complete`
		} else{
			checkbox[i].classList.add('checkbox-active')
			itemText[i].classList.add('text-checked')
			checkbox[i].innerHTML = checkIcon
			progressTracking.push(itemValue)
			globalProgress = Math.round(progressTracking.length * itemValue)
			progressBar.style.width = `${globalProgress}%`
			progressTitle.innerHTML = `${globalProgress}% Complete`
			
		}
		if (globalProgress === 100){
			btn.removeAttribute('disabled')
			btn.style.background = "#042333"
			btn.style.cursor = 'pointer'
		}
	})
}

btn.addEventListener('click', () =>{
	for (let i = 0; i < sectionContent.length; i++){
		sectionContent[i].remove()
	}
	section.classList.add('success')
	section.innerHTML = success
})



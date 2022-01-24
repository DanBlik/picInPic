// #question: Почему без as typescript не может самостоятельно поределить тип
const videoElem = document.querySelector('.video') as HTMLVideoElement

const button = document.querySelector('.button') as HTMLSelectElement

const selectMediaStream = async () => {
  try {
    const selectMediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElem.srcObject = selectMediaStream
    videoElem.onloadedmetadata = () => {
      console.log('video play');

      videoElem.play()
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

selectMediaStream()

button.addEventListener('click', async () => {
  button.disabled = true
  console.log('works click handler');


  await videoElem.requestPictureInPicture()
  button.disabled = false
})
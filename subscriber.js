facebookButton = document.querySelector("#facebook");
twitterButton = document.querySelector("#twitter");

if ('serviceWorker' in navigator) {
  addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./sw.js');
  });
}

facebookButton.addEventListener('click', async () => {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: "BJNOw3KXRV5tZbN9JPA3Q8frBP8gbc5LR_l0KHD2433fanOM5OUJPon6p1P31RzyhrzEDnRu7FKvClExMo4r1wA",
  });
  console.log(JSON.stringify(push));
})

twitterButton.addEventListener('click', async () =>{
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: "BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U",
  });
  console.log(JSON.stringify(push));
})
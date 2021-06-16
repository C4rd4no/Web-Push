
const subscribeButton = document.querySelector('#subscribe');


subscribeButton.addEventListener("click", async () => {
  let sWorker = await navigator.serviceWorker.ready;
  let push = await sWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BEOpffA7jaGuNtg589eAvwJWZYyMTuY1fGnDgZo-mJpFSv1TQlxIOOdhVjyeylGKGnLajkUiGnl-J_hEig_O-mQ'
  });
  console.log(JSON.stringify(push));
})


if ('serviceWorker' in navigator) {
  addEventListener('load', async () => {
    let sWorker = await navigator.serviceWorker.register('./sWorker.js');
    console.log(sWorker);
  });
}
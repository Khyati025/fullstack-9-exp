
async function loadMessage() {
  const res = await fetch("http://YOUR_BACKEND_PUBLIC_IP/api/message");
  const data = await res.json();
  document.getElementById("root").innerHTML = `<h1>${data.message}</h1>`;
}
loadMessage();

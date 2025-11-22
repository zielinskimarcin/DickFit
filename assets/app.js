
const launcher = document.getElementById('chat-launcher');
const box = document.getElementById('chat-box');
const closeBtn = document.getElementById('chat-close');
const list = document.getElementById('chat-messages');
const input = document.getElementById('chat-text');
const send = document.getElementById('chat-send');

function addMsg(text, who='bot'){
  const div = document.createElement('div');
  div.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
  div.textContent = text;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}

launcher.addEventListener('click', () => {
  box.style.display = 'block';
  input.focus();
});
closeBtn.addEventListener('click', () => { box.style.display = 'none'; });

async function ragAsk(query){
  const endpoint = window.RAG_ENDPOINT || '';
  const payload = {
    question: query,
    contextHints: ['cennik','regulamin','trenerzy','harmonogram','umowa','informacje o marce'],
    top_k: 5
  };
  if(!endpoint){
    return 'Demo: Podłącz endpoint w window.RAG_ENDPOINT w assets/app.js';
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return data.answer || JSON.stringify(data);
  } catch(e){
    return 'Błąd połączenia z endpointem RAG: ' + e.message;
  }
}

async function handleSend(){
  const q = input.value.trim();
  if(!q) return;
  addMsg(q, 'user');
  input.value='';
  const reply = await ragAsk(q);
  addMsg(reply, 'bot');
}

send.addEventListener('click', handleSend);
input.addEventListener('keydown', e => { if(e.key === 'Enter') handleSend(); });

// Set your endpoint here
window.RAG_ENDPOINT = '';

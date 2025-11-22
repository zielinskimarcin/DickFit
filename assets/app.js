
// Simple chat UI + placeholder RAG call
const launcher = document.getElementById('chat-launcher');
const box = document.getElementById('chat-box');
const list = document.getElementById('chat-messages');
const input = document.getElementById('chat-text');
const send = document.getElementById('chat-send');

launcher.addEventListener('click', () => {
  box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
  box.style.flexDirection = 'column';
  input.focus();
});

function addMsg(text, who='bot'){
  const div = document.createElement('div');
  div.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
  div.textContent = text;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}

async function ragAsk(query){
  // Replace with your RAG endpoint (n8n, FastAPI, etc.)
  const endpoint = window.RAG_ENDPOINT || 'https://example.com/rag/query';
  const payload = {
    question: query,
    // Optional: pass context hints so retriever can bias toward PDFs/XLSX
    contextHints: ['cennik','regulamin','trenerzy','harmonogram','umowa','informacje o marce']
  };
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
    return 'Demo: tu pojawi się odpowiedź RAG. Skonfiguruj ENDPOINT w window.RAG_ENDPOINT.';
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
input.addEventListener('keydown', (e)=>{ if(e.key==='Enter') handleSend(); });

// Example: set your RAG endpoint here or inline in HTML
window.RAG_ENDPOINT = ''; // np. 'https://your-n8n-instance.com/webhook/ragbot'

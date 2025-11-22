import { useEffect, useRef, useState } from 'react'

type Msg = { who: 'user'|'bot', text: string }

export function Chatbot(){
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ who:'bot', text:'Cześć! Jestem asystent DickFit. Zapytaj o karnety, trenerów lub zajęcia.' }])
  const [q, setQ] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{ listRef.current?.scrollTo({ top: listRef.current.scrollHeight }) }, [msgs])

  async function ask(){
    const query = q.trim()
    if(!query) return
    setMsgs(m => [...m, { who:'user', text: query }])
    setQ('')
    const endpoint = (window as any).RAG_ENDPOINT || ''
    if(!endpoint){
      setMsgs(m => [...m, { who:'bot', text: 'Skonfiguruj window.RAG_ENDPOINT w index.html lub przez <script>.' }])
      return
    }
    try{
      const res = await fetch(endpoint, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ question: query, contextHints: ['cennik','regulamin','trenerzy','harmonogram','umowa','informacje o marce'], top_k:5 })
      })
      const data = await res.json().catch(()=>({}))
      setMsgs(m => [...m, { who:'bot', text: data.answer || JSON.stringify(data) || 'Brak odpowiedzi' }])
    }catch(e:any){
      setMsgs(m => [...m, { who:'bot', text: 'Błąd połączenia: ' + e.message }])
    }
  }

  return (<>
    <button onClick={()=>setOpen(true)} className="fixed right-4 bottom-4 z-50 rounded-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-black font-bold shadow-xl">
      Chat z DickFit
    </button>
    {open && (
      <div className="fixed right-4 bottom-20 z-50 w-[380px] max-w-[94vw] h-[520px] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl flex flex-col">
        <div className="px-4 py-3 bg-black/70 border-b border-white/10 flex items-center justify-between">
          <div className="text-white font-semibold">DickFit — Chat (RAG)</div>
          <button onClick={()=>setOpen(false)} className="text-gray-300 hover:text-white">✕</button>
        </div>
        <div ref={listRef} className="flex-1 overflow-auto p-3 space-y-2 bg-gradient-to-b from-gray-900 to-black">
          {msgs.map((m,i)=>(
            <div key={i} className={`max-w-[86%] px-3 py-2 rounded-xl text-sm ${m.who==='user'?'ml-auto bg-violet-600 text-white':'bg-gray-800 text-gray-100 border border-white/10'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-white/10 flex gap-2 bg-black/60">
          <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&ask()} placeholder="Zadaj pytanie..." className="flex-1 px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500/40"/>
          <button onClick={ask} className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white">Wyślij</button>
        </div>
      </div>
    )}
  </>)
}
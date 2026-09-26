import { useState } from 'react'

const quests = [
  { id:1, type:"Guess it", xp:20, rank:"Detective", title:"The 3A.M. God Dance", question:"Which ancient folk dance is performed at 3 AM with towering pots balanced on the performer's head?", lore:"Heritage Lore: It's Karagattam from Tamil Nadu! Done at 3AM to worship goddess Mariamman, balancing pots on head." },
  { id:2, type:"Explore more", xp:30, rank:"Explorer", title:"Why Karaga Becomes Woman?", question:"Why does the chief priest in the grand Bengaluru Karaga festival dress in traditional feminine attire?", lore:"Heritage Lore: Karaga Shaktyotsava from Karnataka. The male priest dresses as a woman to carry the goddess's power (Shakti) on his head." },
  { id:3, type:"Do it", xp:40, rank:"Performer", title:"Create a Kolam", question:"Can you draw a simple 3x3 dot Kolam at your doorstep?", lore:"Kolam is Tamil Nadu's daily art of welcoming Lakshmi with rice flour." },
  { id:4, type:"Feedback", xp:10, rank:"Storyteller", title:"Share your memory", question:"Which festival story did your grandmother tell you?", lore:"Every family story is a living archive!" },
  { id:5, type:"Guess it", xp:20, rank:"Detective", title:"Floating Market", question:"Where in India does a market float on boats?", lore:"Dal Lake, Srinagar - vegetables sold from Shikaras!" },
  { id:6, type:"Explore more", xp:30, rank:"Explorer", title:"Why 21 leaves?", question:"Why is food served on 21 leaves in some Kerala rituals?", lore:"Represents 21 forms of nature to be respected." },
  { id:7, type:"Do it", xp:40, rank:"Performer", title:"Learn a folk step", question:"Learn 2 steps of Bihu and record!", lore:"Bihu celebrates Assam's new year with joyful hip moves." },
]

const cultures = [
  { id:1, name:"Theyyam", state:"Kerala", info:"800-year-old ritual where man becomes god. Paints face, dances 12 hours.", color:"#FFE9E3" },
  { id:2, name:"Living Root Bridges", state:"Meghalaya", info:"Khasi tribes grow bridges from rubber roots. Takes 15 years, lasts 500 years.", color:"#E3FFE9" },
  { id:3, name:"Warli Art", state:"Maharashtra", info:"Tribal art using white rice paste on mud walls with bamboo sticks.", color:"#FFF6E3" },
  { id:4, name:"Pongal Festival", state:"Tamil Nadu", info:"Harvest festival - boiling rice with milk overflows while shouting Pongal-o-Pongal!", color:"#E3F0FF" },
  { id:5, name:"Bihu Dance", state:"Assam", info:"Youth dance in paddy fields to welcome Assamese New Year with Dhol drums.", color:"#F3E3FF" },
  { id:6, name:"Kavad Yatra", state:"Uttar Pradesh", info:"Devotees carry holy water from Ganga for 100s of kms barefoot for Lord Shiva.", color:"#E3FFFB" },
]

export default function App(){
  const [activeTab, setActiveTab] = useState('quests')
  const [filter,setFilter]=useState('All')
  const [done,setDone]=useState([])
  const [xp,setXp]=useState(90)

  const filtered = filter==='All' ? quests : quests.filter(q=>q.type===filter)
  const toggle = (id,xpVal) => {
    if(!done.includes(id)){ setDone([...done,id]); setXp(xp+xpVal) }
  }

  return (
    <div style={{maxWidth:500,margin:'0 auto',padding:16,fontFamily:'system-ui'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <h1 style={{fontSize:22,fontWeight:'bold'}}>KalChakra ⏳</h1>
        <span style={{background:'#111',color:'white',padding:'4px 12px',borderRadius:20,fontSize:12}}>{xp} XP • {done.length}/7</span>
      </div>

      <div style={{display:'flex',gap:8,marginBottom:12}}>
        <button onClick={()=>setActiveTab('quests')} style={{padding:'8px 16px',borderRadius:20,border:'1px solid #111',background:activeTab==='quests'?'#111':'white',color:activeTab==='quests'?'white':'black',fontWeight:'bold'}}>Quests</button>
        <button onClick={()=>setActiveTab('cultures')} style={{padding:'8px 16px',borderRadius:20,border:'1px solid #111',background:activeTab==='cultures'?'#111':'white',color:activeTab==='cultures'?'white':'black',fontWeight:'bold'}}>Cultures 🌏</button>
      </div>

      {activeTab==='quests' ? (
        <>
          <div style={{display:'flex',gap:8,overflowX:'auto',paddingBottom:8}}>
            {['All','Guess it','Explore more','Do it','Feedback'].map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{whiteSpace:'nowrap',background:filter===f?'#111':'#eee',color:filter===f?'white':'#333',border:0,padding:'6px 12px',borderRadius:20,fontSize:12}}>{f}</button>
            ))}
          </div>
          <div style={{display:'grid',gap:12,marginTop:12}}>
            {filtered.map(q=>(
              <div key={q.id} style={{background:'#fff',border:'1px solid #eee',borderRadius:16,padding:16}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#666'}}><span>{q.type} • {q.xp} XP</span><span>🧭 {q.rank}</span></div>
                <h3 style={{margin:'8px 0'}}>{q.title}</h3>
                <p style={{fontSize:14,color:'#444'}}>{q.question}</p>
                <p style={{fontSize:12,color:'#888',marginTop:8,background:'#f9f9f9',padding:8,borderRadius:8}}>{q.lore}</p>
                <button onClick={()=>toggle(q.id,q.xp)} style={{marginTop:8,background:'#111',color:'white',border:0,padding:'8px 14px',borderRadius:8}}>{done.includes(q.id)?'Completed ✓':'Complete'}</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{display:'grid',gap:12,marginTop:12}}>
          {cultures.map(c=>(
            <div key={c.id} style={{background:c.color,borderRadius:16,padding:16,border:'1px solid #eee'}}>
              <span style={{background:'white',padding:'2px 8px',borderRadius:10,fontSize:12,fontWeight:'bold'}}>{c.state}</span>
              <h3 style={{margin:'8px 0 4px'}}>{c.name}</h3>
              <p style={{color:'#444',fontSize:14,lineHeight:1.4}}>{c.info}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

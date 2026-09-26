import { useState } from 'react'

const quests = [
  {
    id:1,
    type:"Guess it",
    xp:20,
    rank:"Detective",
    title:"The 3A.M. God Dance",
    question:"Which ancient folk dance is performed at 3 AM with towering pots balanced on the performer's head?",
    lore:"Heritage Lore: It's Karagattam from Tamil Nadu! Done at 3AM to worship goddess Mariamman, balancing pots on head."
  },
  {
    id:2,
    type:"Explore more",
    xp:30,
    rank:"Explorer",
    title:"Why Karaga Becomes Woman?",
    question:"Why does the chief priest in the grand Bengaluru Karaga festival dress in traditional feminine attire?",
    lore:"Heritage Lore: Karaga Shaktyotsava from Karnataka. The male priest dresses as a woman to carry the goddess's power (Shakti) on his head - shows that god is both male and female."
  },
  {
    id:3,
    type:"Do it",
    xp:50,
    rank:"Apprentice",
    title:"Kalbelia Spin challenge",
    question:"Can you replicate the legendary serpent-like swirls of Rajasthan's nomadic desert dancers?",
    lore:"Heritage Lore: Kalbelia tribe - snake charmers community. Their spin mimics serpent movements."
  },
  {
    id:4,
    type:"Feedback",
    xp:10,
    rank:"Detective",
    title:"How was your experience in KalChakra...",
    question:"Reflect on your discoveries today — which tradition surprised you the most?",
    lore:"Heritage Lore: Daily check-in reflection for culture seekers."
  },
  {
    id:5,
    type:"Guess it",
    xp:20,
    rank:"Detective",
    title:"Yakshagana Face Paint Code",
    question:"What do intense green versus fiery red facial colors signify on the coastal theatre stage?",
    lore:"Heritage Lore: Yakshagana from coastal Karnataka - Green is hero/divine, Red is demon/evil."
  },
  {
    id:6,
    type:"Explore more",
    xp:30,
    rank:"Explorer",
    title:"Theyyam Fire Ritual Walk",
    question:"In north Kerala rituals, what gives ritual performers the resilience to step through burning embers?",
    lore:"Heritage Lore: Devotees don towering bamboo crowns and run through sacred coals to channel ancestral warrior spirits."
  },
  {
    id:7,
    type:"Do it",
    xp:50,
    rank:"Apprentice",
    title:"Dollu Kunitha Beat Pattern",
    question:"Can you keep the 4-count double drum cadence without breaking the circular formation?",
    lore:"Heritage Lore: Dollu Kunitha from Karnataka - powerful drum dance by Kuruba community, keeping circular formation."
  }
]

export default function App(){
  const [filter,setFilter]=useState('All')
  const [done,setDone]=useState([])
  const [xp,setXp]=useState(90)
  
  const filtered = filter==='All' ? quests : quests.filter(q=>q.type===filter)
  const toggle = (id,xpVal) => {
    if(!done.includes(id)){ setDone([...done,id]); setXp(xp+xpVal) }
  }

  return (
    <div style={{maxWidth:500,margin:'0 auto',padding:16,fontFamily:'system-ui',background:'#FFFBF5',minHeight:'100vh'}}>
      <div style={{background:'white',padding:16,borderRadius:16,marginBottom:16,boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
        <h1 style={{margin:0,color:'#D93C20'}}>🪔 KalChakra</h1>
        <div style={{display:'flex',gap:16,marginTop:8,fontSize:14}}>
          <span><b>{done.length}/7</b> across 4 categories</span>
          <span style={{color:'#059669'}}><b>{xp} XP</b> Earned: 90 XP</span>
          <span><b>Apprentice</b> Max rank!</span>
        </div>
      </div>

      <div style={{display:'flex',gap:8,overflowX:'auto',paddingBottom:8}}>
        {['All','Guess it','Explore More','Do It','Feedback'].map(f=>(
          <button key={f} onClick={()=>setFilter(f==='All'?'All':f)} style={{whiteSpace:'nowrap',background:filter===f||(filter==='All'&&f==='All')?'#111':'#eee',color:filter===f||(filter==='All'&&f==='All')?'white':'#333',border:0,padding:'8px 14px',borderRadius:20,fontSize:13}}>{f}{f!=='All'?` (${f==='Guess it'?20:f==='Explore More'?30:f==='Do it'?50:10} XP)`:''}</button>
        ))}
      </div>

      <div style={{display:'grid',gap:12,marginTop:12}}>
        {filtered.map(q=>(
          <div key={q.id} style={{background:'white',borderRadius:16,padding:16,boxShadow:'0 4px 12px rgba(0,0,0,0.06)',borderLeft:`4px solid ${q.type==='Guess it'?'#A78BFA':q.type==='Explore more'?'#60A5FA':q.type==='Do it'?'#F472B6':'#34D399'}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{background:q.type==='Guess it'?'#EDE9FE':q.type==='Explore more'?'#DBEAFE':q.type==='Do it'?'#FCE7F3':'#D1FAE5',color:q.type==='Guess it'?'#7C3AED':q.type==='Explore more'?'#2563EB':q.type==='Do it'?'#DB2777':'#059669',padding:'4px 10px',borderRadius:20,fontSize:12}}>{q.type} +{q.xp} XP</span>
              <span style={{fontSize:12,color:done.includes(q.id)?'#059669':'#888'}}>{done.includes(q.id)?'✅ Completed':'○ Incomplete'}</span>
            </div>
            <h3 style={{margin:'10px 0 6px'}}>{q.title}</h3>
            <p style={{color:'#444',fontSize:14,lineHeight:1.4}}>{q.question}</p>
            <div style={{background:'#F9FAFB',padding:10,borderRadius:10,marginTop:10,fontSize:13}}>
              <b>Heritage Lore:</b> {q.lore.replace('Heritage Lore: ','')}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:12,fontSize:12,color:'#666',alignItems:'center'}}>
              <span>🧙 {q.rank}</span>
              <button onClick={()=>toggle(q.id,q.xp)} style={{background:'#111',color:'white',border:0,padding:'8px 14px',borderRadius:8}}>{done.includes(q.id)?'Completed':'Take Quest →'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

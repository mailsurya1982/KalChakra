import { useState } from 'react'

const quests = [
  { id:1, type:"Guess it", xp:20, rank:"Detective", title:"The 3A.M. God Dance", q:"Which dance at 3 AM with pots on head?", lore:"Karagattam Tamil Nadu! 3AM for goddess Mariamman, pots balanced." },
  { id:2, type:"Explore more", xp:30, rank:"Explorer", title:"Why Karaga Becomes Woman?", q:"Why Bengaluru Karaga priest dresses as woman?", lore:"Karnataka Shaktyotsava - male priest carries Shakti power." },
  { id:3, type:"Do it", xp:40, rank:"Performer", title:"Create a Kolam", q:"Draw 3x3 dot Kolam at doorstep?", lore:"Kolam welcomes Lakshmi with rice flour daily art." },
  { id:4, type:"Feedback", xp:10, rank:"Storyteller", title:"Share your memory", q:"Which festival story did grandmother tell you?", lore:"Every family story is living archive!" },
  { id:5, type:"Guess it", xp:20, rank:"Detective", title:"Floating Market", q:"Where market floats on boats?", lore:"Dal Lake Srinagar - Shikaras!" },
  { id:6, type:"Explore more", xp:30, rank:"Explorer", title:"Why 21 leaves?", q:"Why food on 21 leaves in Kerala ritual?", lore:"Represents 21 forms of nature to respect." },
  { id:7, type:"Do it", xp:40, rank:"Performer", title:"Learn Bihu step", q:"Learn 2 Bihu steps and record!", lore:"Bihu Assam new year joyful hip moves." },
]

const storiesData = [
  { id:1, t:"Tipu Sultan's Rocket", cat:"Kings", c:"#fde6d8", img:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600", s:"Tipu Sultan Mysore Tiger created iron-cased rockets flying 2km and exploding in air - world first. Had 5000 men rocket corps workshop Srirangapatna day-night. British terrified never seen such weapon. After he died 1799 British took rockets to England studied became base for Congreve rockets used in Napoleonic Wars and American War. NASA rockets great-grandfather invented in Mysore. True Make in India 200 years before slogan." },
  { id:2, t:"Hampi Festival", cat:"Festivals", c:"#fef3c2", img:"https://images.unsplash.com/photo-1606496889195-7f72a2a8a0d2?q=80&w=600", s:"Hampi richest city world 1500s. Portuguese Domingo Paes wrote city as big as Rome markets filled with diamonds rubies gold. 500,000 people. Hampi Festival 3 days ruins come alive dance music puppet shows. Virupaksha Temple lights artists perform in front of stone chariot. Tungabhadra banks stage. Feel you went back 500 years." },
  { id:3, t:"Mysore Pak", cat:"Food", c:"#e9d5ff", img:"https://images.unsplash.com/photo-1599629954294-02a702a68c1e?q=80&w=600", s:"Mysore Palace kitchen head cook Kakasura Madappa panic - King Krishnaraja Wodeyar IV lunch no sweet ready. Mixed gram flour ghee sugar fire. Got distracted overcooked. To save poured more ghee. Became soft porous melted in mouth. King loved asked name. Said Mysore Pak - Pak means sweet. King ordered open shop outside palace. Shop Guru Sweets Devaraja Market run by great-grandson. Secret 1kg needs 1kg Nandini ghee." },
  { id:4, t:"Vijayanagara Empire", cat:"Kings", c:"#fecaca", img:"https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=600", s:"1300s two brothers Harihara Bukka built empire to protect South culture. Captured Delhi Sultanate prisoners escaped with blessings saint Vidyaranya built City of Victory banks Tungabhadra. 200 years richest. Built Hampi protected temples. Kings rich diamonds sold like vegetables. Fell 1565 Battle Talikota 5 Deccan Sultanates joined. Hampi burnt looted 6 months." },
  { id:5, t:"Krishnadevaraya", cat:"Kings", c:"#fde6d8", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0e?q=80&w=600", s:"Greatest king Vijayanagara 1509-1529 Golden Age. Not just warrior 14 wars he was scholar. Wrote Telugu book Amuktamalyada about girl Andal loves Vishnu. Had 8 poets Ashtadiggajas famous Tenali Ramakrishna. Built Vittala Temple stone chariot musical pillars make sounds. Portuguese wrote most perfect king." },
  { id:6, t:"Kempegowda", cat:"Kings", c:"#d1fae5", img:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600", s:"1537 chieftain Kempegowda I barren land hills forests dreamed big city. Built mud fort town named Bengaluru from Benda Kaluru boiled beans old woman fed him when lost. Built 4 towers 4 directions marking future city limits said city will grow till towers. Today 1000 times beyond 1.2cr people. Built Bull Temple Someshwara. Statue Vidhana Soudha airport named." },
  { id:7, t:"Bisi Bele Bath", cat:"Food", c:"#f3f4f6", img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600", s:"Every family Karnataka secret masala. Mysore Palace invention Bisi Bele hot lentil. Rice toor dal vegetables 20 spices cinnamon cloves coconut marathi moggu only Karnataka. Balance spicy sweet tangy tamarind ghee aroma. Grandmother best. MTR Lalbagh serving since 1924 silver cup ghee blob chips. Rain Bengaluru every home cooks." },
  { id:8, t:"Dharwad Pedha", cat:"Food", c:"#dbeafe", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600", s:"175 years ago Ram Ratan Singh Thakur UP migrated Dharwad. Milk heated 4 hours till khoya then sugar cooked again brown crumbly white sugar coat burnt milk taste. Dharwad buffalo milk thick. GI Tag 2007 only Dharwad can call Dharwad Pedha. Original shop Babu Singh Thakur Line Bazaar 5th generation sells 1000kg daily." },
  { id:9, t:"Kambala", cat:"Festivals", c:"#fbcfe8", img:"https://images.unsplash.com/photo-1515091943-9d5e2cb62a16?q=80&w=600", s:"Coastal Karnataka buffalo race paddy fields filled water race track. Two buffaloes tied plough runner stands plough races 140m slush water movie scene. 2020 Srinivasa Gowda ran 100m 9.55s slush faster than Usain Bolt 9.58s! Buffaloes trained years massaged oil fed coconut jaggery cost 10 lakhs owners love like children. Thanksgiving to buffaloes." },
  { id:10, t:"Mysore Dasara", cat:"Festivals", c:"#dbeafe", img:"https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=600", s:"Every October Mysore most beautiful city India. 10-day Dasara Nada Habba state festival. Whole city bride. Main attraction Mysore Palace lit with 1 lakh golden bulbs evening 7-10PM looks gold. Last day Vijayadashami Jumboo Savari Goddess Chamundeshwari 750kg golden mantapa top elephant Abhimanyu 12 elephants camels horses. Royal family Wodeyars Durbar Hall traditional. Chamundi killed Mahishasura." },
]

const culturesData = [
  { id:1, n:"Yakshagana", st:"Karnataka", stat:"Alive", m:"Night drama huge headgear", img:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600", col:"#fff7ed", det:"800-year theatre coastal Karnataka. 4ft headgear wood+peacock feathers 15kg costume all night 8pm-6am Ramayana Mahabharata. Bhagavata sings continuously 8 hours without break. Artist must know dance dialogue singing. 20+ troupes Udupi. Children learn age 5 gurukula. Most spectacular demon entry huge eyes fire. UNESCO recognized." },
  { id:2, n:"Karaga Festival", st:"Karnataka", stat:"Alive", m:"Men as women carry goddess pot", img:"https://images.unsplash.com/photo-1606496889195-7f72a2a8a0d2?q=80&w=600", col:"#fef3c2", det:"Bangalore oldest 300yr Thigala community. Man dresses woman carries Karaga pot 10km barefoot secret carrier identity not revealed. Trance bangles saree vermillion. Night whole city no sleep. Temple Dharmaraya. Power Shakti. Last matriarchal priest tradition India where man becomes woman to hold goddess power on head." },
  { id:3, n:"Theyyam", st:"Kerala", stat:"Alive", m:"Men become gods 400 forms 3am", img:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600", col:"#fce7f3", det:"North Kerala Kannur Kasaragod Dalit men become gods. 30ft coconut leaf headgear red face fire dance 3am. 400+ forms each story. People believe god really comes answers problems. Nov-May season temples kavus. Artist lower caste but during Theyyam even Brahmins touch feet. Most intense Pottan Theyyam questions caste system. 25ft flames." },
  { id:4, n:"Koodiyattam", st:"Kerala", stat:"Almost lost", m:"2000yr Sanskrit theatre oldest world", img:"https://images.unsplash.com/photo-1518834107812-67b0b288f498?q=80&w=600", col:"#e0f2fe", det:"UNESCO Masterpiece. One act takes 10 days! Only eye movements for 1 hour show navarasa 9 emotions. Only 2 families Ammanur left who know full. Temple theatre Koothambalam built as per Natyashastra ancient book. Sanskrit+Malayalam mix. Extremely slow meditative. 15 years training no money youth not learning." },
  { id:5, n:"Vasudev Tradition", st:"Maharashtra", stat:"Almost lost", m:"Morning blessing singers peacock cap", img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600", col:"#f3e8ff", det:"5am Maharashtra villages man morpankh peacock feather cap wooden stick cymbals sings Vasudev aala Krishna messenger wakes villagers blessing. Rice money given. 700yr Wari pilgrims Pandharpur Vitthal. Considered incarnation Narada sage. Now only few old men Solapur villages children shy to continue tradition dying." },
  { id:6, n:"Burrakatha", st:"Andhra", stat:"Few families", m:"Single performer epics drum", img:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600", col:"#ffedd5", det:"One-man epic tambura anklets dance 3hr Ramayana Mahabharata. Drum like human skull pumpkin burra. Started British time spread independence messages secretly hidden in stories. Performer changes voice 20 characters. Only 30 families East Godavari left. Govt gives 500rs per show not enough to survive." },
  { id:7, n:"Oggu Katha", st:"Telangana", stat:"Few families", m:"Warriors storytelling huge drums", img:"https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600", col:"#fef9c3", det:"Kuruma Golla castes tell Mallanna Shiva story 4ft wide chest drums 6-7 members loud warrior dance. All night Telangana jatara festival. Drum tied chest rope beat sticks till chest pains. Story Lord Mallikarjuna marrying tribal girl. Very energetic war dance." },
  { id:8, n:"Gotipua Dance", st:"Odisha", stat:"Alive", m:"Boys dressed girls origin Odissi", img:"https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=600", col:"#dcfce7", det:"Mother of Odissi classical. Boys 6-12 dressed girls acrobatic splits pyramids in Raghurajpur near Puri. Guru trains akhada 4am morning. Many Odissi gurus Kelucharan Mohapatra were Gotipuas. Costume silk saree flower garland. Perform near Jagannath temple for tourists now. UNESCO." },
  { id:9, n:"Saura Painting", st:"Odisha", stat:"Almost lost", m:"Tribal wall art predicts dreams", img:"https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?q=80&w=600", col:"#fee2e2", det:"Saura tribe hut wall Idital rice paste red mud. Shaman dreams then draws to prevent bad future - if dream tiger attack draw tiger god protect. White on red geometric humans trees. If not drawn believe death comes. Ritual needs chicken sacrifice. Only 20 villages Koraput left youth going cities." },
  { id:10, n:"Phad Scroll Singing", st:"Rajasthan", stat:"Few families", m:"30ft scroll story sung all night", img:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600", col:"#ffedd5", det:"30ft cloth scroll Pabuji god local hero Bhopa carries village to village sings all night with ravanahatta 2-string violin coconut. Only Joshi families Bhilwara Shahpura paint natural colors stone turmeric 1 month per scroll. Bhopa-Bhopi couple husband sings wife dances with lamp on head." },
  { id:11, n:"Kalbelia Dance", st:"Rajasthan", stat:"Alive", m:"Snake charmer dance like snakes", img:"https://images.unsplash.com/photo-1518834107812-67b0b288f498?q=80&w=600", col:"#fef3c2", det:"Snake charmer tribe Sapera women black skirt silver border like snake skin flexible snake moves backwards bend body touching head to ground. Men play been poongi snake music. UNESCO heritage. Pushkar fair main performance. Improvised never choreographed fast sensuous. Women tattoo snake." },
  { id:12, n:"Baul Singers", st:"Bengal", stat:"Alive", m:"Wandering mystics God inside body", img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600", col:"#e0f2fe", det:"Crazy mystics Bengal saffron lungi ektara one-string long hair no house family. Sing Moner Manush man of heart search. Lalon Fakir greatest wrote 500 songs. Hindu-Muslim mix reject temple mosque say body is temple. 5000 wander Shantiniketan Joydev mela winter. Smoke chillum sing all night." },
  { id:13, n:"Patachitra Scroll", st:"Bengal", stat:"Few families", m:"Painters who SING painting", img:"https://images.unsplash.com/photo-1578926288207-a90a5366759d?q=80&w=600", col:"#fce7f3", det:"Patua carry 10ft scroll door to door open slowly sing explaining picture. Natural colors charcoal turmeric cow dung. Village Naya Medinipur full painter singers. Even Titanic 9/11 painted! Singing called Pater Gaan. Women also paint now. Each scroll has song they compose like news channel. Only 50 families left." },
]

const historiesData = [
  { id:1, n:"Vijayanagara Empire", p:"1336-1646", st:"Karnataka", img:"https://images.unsplash.com/photo-1606496889195-7f72a2a8a0d2?q=80&w=600", s:"In 1300s two brothers Harihara Bukka captured Delhi Sultanate taken prisoners Delhi. Escaped blessings saint Vidyaranya built City of Victory banks Tungabhadra. 200 years richest most powerful India. Built Hampi protected temples promoted art music trade. Hampi 5 lakh people second largest city world 1500 after Beijing. Portuguese Domingo Paes wrote diamonds sold like vegetables. Kings palace rooms full gold coins. Built Vittala Temple stone chariot musical pillars make sounds. Fell 1565 Battle Talikota 5 Deccan Sultanates joined. Hampi burnt looted 6 months. Even today walking ruins you feel power two brothers built empire from nothing." },
  { id:2, n:"Mysore Wodeyars", p:"1399-1950", st:"Karnataka", img:"https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=600", s:"Wodeyars ruled Mysore 600 years 25 kings. Most famous Krishnaraja Wodeyar IV made Mysore model city electricity before many world cities. Built Mysore Palace lit with 1 lakh golden bulbs Dasara making look gold. Palace built 1912 Indo-Saracenic style costing 41 lakhs then huge. Invented Mysore Pak by cook Kakasura Madappa forgot sweet on stove added ghee to save. Invented Bisi Bele Bath. MTR restaurant serving since 1924 silver cup ghee blob. Last king Jayachamaraja Wodeyar gave all gold to Indian govt after independence 1947." },
  { id:3, n:"Hoysala Empire", p:"1000-1346", st:"Karnataka", img:"https://images.unsplash.com/photo-1587133599422-b7d1a2a5b26f?q=80&w=600", s:"Hoysalas built Belur Halebidu temples with 10,000 sculptures so detailed you see fingernails jewelry holes hair strands. Star-shaped temples made soapstone soft when carved hardens after 5 years. No two sculptures same whole temple each tells story Ramayana Mahabharata. Chennakesava Temple Belur took 103 years build 1000 sculptors generations. Most famous sculpture Darpana Sundari lady looking mirror. Invented new style Hoysala art bottom to top elephants lions horses stories. Sala founder killed tiger stick." },
  { id:4, n:"Chalukya Dynasty", p:"543-753", st:"Karnataka", img:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600", s:"Chalukyas built Badami cave temples carved single red sandstone hill 4 caves Shiva Vishnu Jain. Pattadakal UNESCO 10 temples mixing North Indian curvilinear tower South Indian stepped vimana first dynasty do both styles experiment. Pulakeshin II defeated Emperor Harsha who ruled North India stopped his expansion south. Chinese traveler Hiuen Tsang visited wrote Chalukyas brave proud. Built 200+ temples Aihole called cradle temple architecture where they experimented 16 types temples learning trial." },
  { id:5, n:"Kadamba Dynasty", p:"345-540", st:"Karnataka", img:"https://images.unsplash.com/photo-1606496889195-7f72a2a8a0d2?q=80&w=600", s:"First Kannada kingdom founded Mayurasharma poor Brahmin student Kanchi. Once went study guard insulted didn't let inside yagna. Got angry left studies picked sword became king! Took forest near Banavasi built kingdom. Created Halmidi inscription 1112 first ever Kannada writing found 16 lines stone. Emblem lion. Started building temples Karnataka encouraged Kannada language. Their capital Banavasi." },
  { id:6, n:"Rashtrakuta Empire", p:"753-982", st:"Karnataka", img:"https://images.unsplash.com/photo-1577083552792-a0d9a88dc617?q=80&w=600", s:"Built Ellora Kailasa temple world's largest monolithic structure carved single mountain top to bottom! 400,000 tons rock removed 100 years build 7000 labourers. Have to carve top downwards no mistake allowed otherwise whole temple fails. Arab traveler Sulaiman wrote Rashtrakutas 1 of 4 great kings world with Baghdad China Constantinople. Ruled Kannauj North to Rameswaram South. King Amoghavarsha wrote Kavirajamarga first Kannada literature book poetry. Dantidurga founder overthrew Chalukyas." },
  { id:7, n:"Ganga Dynasty", p:"350-1000", st:"Karnataka", img:"https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=600", s:"Built Shravanabelagola Gommateshwara statue 57ft tall monolith tallest world 1000 years old 10,000 men pulled up hill ropes. Built minister Chamundaraya. Every 12 years Mahamastakabhisheka where statue bathed milk honey saffron 1008 kalashas helicopter. Jains believe Bahubali stood meditating so long vines grew legs anthills. Gangas also built Bangalore Begur inscription 890 AD first mention Bengaluru name. Ruled from Kolar gold mines." },
  { id:8, n:"Tipu Sultan Era", p:"1782-1799", st:"Karnataka", img:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600", s:"Tipu Sultan Mysore Tiger ruled Mysore fought 4 wars against British East India Company. Created iron-cased rockets flew 2km exploded in air world first metal rockets. British army terrified never seen such weapon. Had dedicated rocket corps 5000 men workshop Srirangapatna day-night making rockets sword blades attached. After he died 1799 4th Anglo-Mysore War defending Srirangapatna fort, British took rockets England studied became base Congreve rockets used Napoleonic Wars American War 1812 Star Spangled Banner mentions rockets red glare. NASA rockets great-grandfather invented Mysore." },
  { id:9, n:"Kempegowda Bengaluru", p:"1537", st:"Karnataka", img:"https://images.unsplash.com/photo-1561361513-2d000a50f0e?q=80&w=600", s:"1537 chieftain Kempegowda I under Vijayanagara Empire looked barren land hills forests dreamed big city. Built mud fort town inside named Bengaluru name came Benda Kaluru town boiled beans old woman fed him beans when lost forest. Built 4 towers 4 directions Lalbagh Bugle Rock Kempambudhi Ulsoor marking future city limits said one day Bengaluru will grow till towers. Today city grown 1000 times beyond towers 1.2cr people. Built Basavanagudi Bull Temple Someshwara Temple. Statue proudly front Vidhana Soudha international airport named after him. One man's vision became Silicon Valley." },
  { id:10, n:"Keladi Nayakas", p:"1499-1763", st:"Karnataka", img:"https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=600", s:"Keladi Nayakas ruled Malnad Shimoga capital Ikkeri. Famous queen Rani Chennamma fought Mughal emperor Aurangzeb and won - gave shelter to Maratha king Rajaram son Shivaji when Aurangzeb chasing him across India. Let him stay Keladi fort 1 year protected him. Built Aghoreshwara temple Ikkeri with 32ft monolithic Nandi stone bull. So rich Portuguese traded pepper for gold 1kg pepper = 1gm gold. Coins had Gandaberunda two-headed mythical bird now Karnataka emblem." },
]

export default function App(){
  const [tab,setTab]=useState('stories')
  const [filter,setFilter]=useState('All')
  const [done,setDone]=useState([])
  const [xp,setXp]=useState(90)
  const [showXP,setShowXP]=useState(false)
  const [lastXP,setLastXP]=useState(0)
  const [sel,setSel]=useState(null)
  const [view,setView]=useState('table')

  const triggerXP=(n)=>{ setLastXP(n); setShowXP(true); setXp(x=>x+n); setTimeout(()=>setShowXP(false),2200) }
  const toggle=(id,n)=>{ if(!done.includes(id)){ setDone([...done,id]); triggerXP(n)} }

  const filtered = filter==='All'? quests : quests.filter(q=>q.type===filter)

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(135deg,#fff7ed,#ffedd5,#fed7aa)', padding:12, fontFamily:'system-ui'}}>
      <style>{`@keyframes pop{0%{transform:scale(0.3) translateY(80px);opacity:0}70%{transform:scale(1.2)}100%{transform:scale(1)}}`}</style>
      
      <div style={{maxWidth:1600, margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', border:'4px solid #ff6a00', borderRadius:999, padding:'12px 20px', boxShadow:'0 8px 30px rgba(255,106,0,0.3)'}}>
          <div style={{fontSize:26, fontWeight:900}}><span style={{color:'#ff6a00'}}>Kal</span>Chakra <span style={{fontSize:20}}>⌛</span></div>
          <div style={{background:'black', color:'white', padding:'8px 16px', borderRadius:999, fontSize:13, fontWeight:900, border:'3px solid #ff6a00'}}>{xp} XP • {done.length}/7</div>
        </div>

        <div style={{display:'flex', gap:10, marginTop:18, overflowX:'auto', paddingBottom:8}}>
          {[
            {id:'stories', l:'Stories 📖 10'},
            {id:'cultures', l:'Cultures 🌍 13'},
            {id:'histories', l:'Histories ⏳ 10'},
            {id:'quests', l:'Quests ⚡ 7'},
          ].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:'12px 22px', borderRadius:999, fontWeight:900, fontSize:14, border:'4px solid', borderColor: tab===t.id?'black':'#ff6a00', background: tab===t.id?'black':'white', color: tab===t.id?'white':'#ff6a00', cursor:'pointer', whiteSpace:'nowrap', transform: tab===t.id?'scale(1.05)':'scale(1)', boxShadow: tab===t.id?'0 6px 20px rgba(0,0,0,0.3)':'0 4px 15px rgba(255,106,0,0.2)'}}>{t.l}</button>
          ))}
        </div>

        {tab==='stories' && (
          <>
            <div style={{display:'flex', gap:8, marginTop:14}}>
              <button onClick={()=>setView('table')} style={{padding:'8px 16px', borderRadius:999, fontWeight:900, border:'3px solid #ff6a00', background: view==='table'?'black':'white', color: view==='table'?'white':'#ff6a00'}}>▤ Table</button>
              <button onClick={()=>setView('gallery')} style={{padding:'8px 16px', borderRadius:999, fontWeight:900, border:'3px solid #ff6a00', background: view==='gallery'?'black':'white', color: view==='gallery'?'white':'#ff6a00'}}>⊞ Gallery</button>
            </div>

            {view==='table' ? (
              <div style={{marginTop:14, border:'4px solid #ff6a00', borderRadius:20, overflow:'hidden', background:'white', boxShadow:'0 12px 40px rgba(255,106,0,0.2)'}}>
                <div style={{display:'grid', gridTemplateColumns:'1.2fr 0.4fr 0.5fr 1.2fr', background:'#ff6a00', color:'white', padding:'14px 16px', fontWeight:900, fontSize:12, borderBottom:'4px solid #c2410c'}}>
                  <div>📄 Story Title</div><div>Category</div><div>Image</div><div>Detailed Story (click row)</div>
                </div>
                {storiesData.map(s=>(
                  <div key={s.id} onClick={()=>setSel({type:'story', d:s})} style={{display:'grid', gridTemplateColumns:'1.2fr 0.4fr 0.5fr 1.2fr', padding:'14px 16px', borderBottom:'3px solid #ffedd5', cursor:'pointer', alignItems:'center', background:'white'}}>
                    <div style={{fontWeight:900}}>📄 {s.t}</div>
                    <div><span style={{background:s.c, padding:'4px 10px', borderRadius:999, fontSize:11, fontWeight:900, border:'2px solid #ff6a00'}}>{s.cat}</span></div>
                    <div><img src={s.img} style={{width:90, height:55, objectFit:'cover', borderRadius:12, border:'3px solid #ff6a00'}} alt=""/></div>
                    <div style={{fontSize:12, color:'#555', lineHeight:'18px'}}>{s.s.slice(0,70)}...</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16, marginTop:14}}>
                {storiesData.map(s=>(
                  <div key={s.id} onClick={()=>setSel({type:'story', d:s})} style={{background:'white', border:'4px solid #ff6a00', borderRadius:22, overflow:'hidden', cursor:'pointer', boxShadow:'0 8px 30px rgba(255,106,0,0.2)'}}>
                    <img src={s.img} style={{width:'100%', height:180, objectFit:'cover', borderBottom:'4px solid #ff6a00'}} alt=""/>
                    <div style={{padding:14}}><div style={{fontWeight:900, fontSize:16}}><span style={{color:'#ff6a00'}}>Kal</span>Chakra: {s.t}</div><div style={{fontSize:12, color:'#666', marginTop:8, lineHeight:'20px'}}>{s.s.slice(0,100)}...</div><div style={{marginTop:10, background:'black', color:'white', display:'inline-block', padding:'6px 14px', borderRadius:999, fontSize:11, fontWeight:900, border:'2px solid #ff6a00'}}>Read Detailed →</div></div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {tab==='cultures' && (
          <div style={{marginTop:14, border:'4px solid #ff6a00', borderRadius:22, overflowX:'auto', background:'white', boxShadow:'0 12px 40px rgba(255,106,0,0.25)'}}>
            <div style={{minWidth:1200}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 0.6fr 0.4fr 0.4fr 1.2fr', background:'#ff6a00', color:'white', padding:'16px', fontWeight:900, fontSize:12, borderBottom:'4px solid #c2410c'}}>
                <div>🌍 Culture Name</div><div>📸 Image</div><div>📍 State</div><div>Status</div><div>Meaning + Click for 150-word DETAILED</div>
              </div>
              {culturesData.map(c=>(
                <div key={c.id} onClick={()=>setSel({type:'culture', d:c})} style={{display:'grid', gridTemplateColumns:'1fr 0.6fr 0.4fr 0.4fr 1.2fr', padding:'14px 16px', borderBottom:'3px solid #ffedd5', alignItems:'center', cursor:'pointer', background:c.col}}>
                  <div style={{fontWeight:900, display:'flex', alignItems:'center', gap:8}}><span style={{background:'#ff6a00', color:'white', width:26, height:26, borderRadius:999, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12}}>{c.id}</span>{c.n}</div>
                  <div><img src={c.img} style={{width:100, height:65, objectFit:'cover', borderRadius:14, border:'3px solid #ff6a00'}} alt=""/></div>
                  <div><span style={{background:'white', border:'3px solid #ff6a00', padding:'4px 10px', borderRadius:999, fontSize:11, fontWeight:900}}>{c.st}</span></div>
                  <div><span style={{padding:'5px 12px', borderRadius:999, fontSize:11, fontWeight:900, border:'3px solid', background: c.stat==='Alive'?'#fef9c3':'#fee2e2', borderColor: c.stat==='Alive'?'#eab308':'#ef4444'}}>{c.stat}</span></div>
                  <div style={{fontSize:12, fontWeight:600}}>{c.m}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab==='histories' && (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:18, marginTop:14}}>
            {historiesData.map(h=>(
              <div key={h.id} onClick={()=>setSel({type:'history', d:h})} style={{background:'white', border:'4px solid #ff6a00', borderRadius:22, overflow:'hidden', cursor:'pointer', boxShadow:'0 10px 35px rgba(255,106,0,0.25)'}}>
                <img src={h.img} style={{width:'100%', height:190, objectFit:'cover', borderBottom:'4px solid #ff6a00'}} alt=""/>
                <div style={{padding:16}}><div style={{fontWeight:900, fontSize:18}}>{h.n} <span style={{background:'#fff7ed', border:'2px solid #ff6a00', fontSize:10, padding:'3px 8px', borderRadius:999, color:'#ff6a00'}}>{h.p} • {h.st}</span></div><div style={{fontSize:12, color:'#555', marginTop:8, lineHeight:'22px'}}>{h.s.slice(0,110)}...</div><div style={{marginTop:12, display:'flex', gap:8}}><span style={{background:'#ff6a00', color:'white', padding:'7px 14px', borderRadius:999, fontSize:11, fontWeight:900, border:'3px solid #c2410c'}}>Read Detailed +30 XP</span><span style={{background:'black', color:'white', padding:'7px 12px', borderRadius:999, fontSize:10, fontWeight:900}}>Detailed Long Story</span></div></div>
              </div>
            ))}
          </div>
        )}

        {tab==='quests' && (
          <>
            <div style={{display:'flex', gap:8, marginTop:14, overflowX:'auto'}}>
              {['All','Guess it','Explore more','Do it','Feedback'].map(f=>(
                <button key={f} onClick={()=>setFilter(f)} style={{padding:'8px 16px', borderRadius:999, fontWeight:900, border:'3px solid #ff6a00', background: filter===f?'black':'white', color: filter===f?'white':'#ff6a00', whiteSpace:'nowrap'}}>{f}</button>
              ))}
            </div>
            <div style={{display:'grid', gap:14, marginTop:14, maxWidth:650}}>
              {filtered.map(q=>(
                <div key={q.id} style={{background:'white', border:'4px solid #ff6a00', borderRadius:22, padding:20, boxShadow:'0 8px 25px rgba(255,106,0,0.15)'}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:11, fontWeight:900}}><span style={{background:'#fff7ed', border:'2px solid #ff6a00', padding:'4px 10px', borderRadius:999}}>{q.type} • {q.xp} XP</span><span>🧭 {q.rank}</span></div>
                  <div style={{fontWeight:900, fontSize:17, marginTop:10}}>{q.title}</div>
                  <div style={{fontSize:14, marginTop:6, fontWeight:600}}>{q.q}</div>
                  {q.type==='Feedback' ? (
                    <>
                      <div style={{marginTop:12, fontSize:13, fontWeight:900, color:'#ff6a00', borderTop:'3px solid #ffedd5', paddingTop:10}}>💭 How did this make you feel? (real meeting feedback)</div>
                      <div style={{display:'flex', gap:8, marginTop:10}}>
                        {[{e:"🤯", x:"+50"}, {e:"😍", x:"+40"}, {e:"🙂", x:"+30"}, {e:"😐", x:"+20"}, {e:"😔", x:"+10"}].map(m=>(
                          <button key={m.e} onClick={()=>toggle(q.id,q.xp)} style={{flex:1, padding:'12px 4px', borderRadius:16, border:'3px solid #ff6a00', background:'#fff7ed', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center'}}><span style={{fontSize:26}}>{m.e}</span><span style={{fontSize:9, fontWeight:900, marginTop:4}}>{m.x}</span></button>
                        ))}
                      </div>
                      <button onClick={()=>toggle(q.id,q.xp)} style={{marginTop:12, width:'100%', padding:'12px', borderRadius:999, fontWeight:900, border:'3px solid black', background: done.includes(q.id)?'#22c55e':'black', color:'white', cursor:'pointer'}}>{done.includes(q.id)? "✓ Completed Feedback +10 XP":"Select mood to complete"}</button>
                    </>
                  ) : (
                    <>
                      <div style={{marginTop:10, background:'#fff7ed', border:'3px solid #ffedd5', padding:12, borderRadius:14, fontSize:12, lineHeight:'20px'}}>💡 {q.lore}</div>
                      <button onClick={()=>toggle(q.id,q.xp)} style={{marginTop:12, width:'100%', padding:'12px', borderRadius:999, fontWeight:900, border:'3px solid black', background: done.includes(q.id)?'#22c55e':'black', color:'white', cursor:'pointer'}}>{done.includes(q.id)? `✓ Completed +${q.xp} XP`:`Complete Quest +${q.xp} XP ⚡`}</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {sel && (
        <div onClick={()=>setSel(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', display:'flex', alignItems:'center', justifyContent:'center', padding:16, zIndex:50, backdropFilter:'blur(8px)'}}>
          <div onClick={e=>e.stopPropagation()} style={{background:'white', borderRadius:26, maxWidth:650, width:'100%', maxHeight:'90vh', overflowY:'auto', border:'6px solid #ff6a00', boxShadow:'0 25px 80px rgba(255,106,0,0.6)'}}>
            <img src={sel.d.img} style={{width:'100%', height:280, objectFit:'cover', borderBottom:'6px solid #ff6a00'}} alt=""/>
            <div style={{padding:22}}>
              <div style={{display:'flex', justifyContent:'space-between'}}><div style={{fontSize:26, fontWeight:900, lineHeight:'32px'}}><span style={{color:'#ff6a00'}}>Kal</span>Chakra: {sel.d.t || sel.d.n}</div><button onClick={()=>setSel(null)} style={{width:40, height:40, borderRadius:999, border:'3px solid #ff6a00', background:'#fff7ed', fontWeight:900, cursor:'pointer'}}>✕</button></div>
              <div style={{marginTop:12, display:'flex', gap:8}}><span style={{background:'#fff7ed', border:'3px solid #ff6a00', padding:'6px 12px', borderRadius:999, fontSize:12, fontWeight:900}}>{sel.d.cat || sel.d.st || sel.d.p}</span><span style={{background:'black', color:'white', padding:'6px 12px', borderRadius:999, fontSize:11, fontWeight:900, border:'3px solid #ff6a00'}}>Detailed Long Story</span></div>
              <div style={{marginTop:16, fontSize:15, lineHeight:'32px', color:'#333', fontWeight:500}}>{sel.d.s || sel.d.det}</div>
              <button onClick={()=>{ setSel(null); triggerXP(20)}} style={{marginTop:20, width:'100%', background:'#ff6a00', color:'white', padding:'16px', borderRadius:999, fontWeight:900, border:'4px solid #c2410c', fontSize:15, cursor:'pointer'}}>Close & Get +20 XP →</button>
            </div>
          </div>
        </div>
      )}

      {showXP && (
        <div style={{position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:100, pointerEvents:'none'}}>
          <div style={{background:'black', color:'white', borderRadius:28, padding:'28px 44px', textAlign:'center', border:'5px solid #ff6a00', boxShadow:'0 20px 60px rgba(255,106,0,0.7)', animation:'pop 0.6s ease-out'}}>
            <div style={{fontSize:50}}>⚡</div>
            <div style={{fontSize:44, fontWeight:900, color:'#ff6a00'}}>+{lastXP} XP</div>
            <div style={{fontSize:13, fontWeight:900, marginTop:4}}>Quest Completed!</div>
          </div>
        </div>
      )}
    </div>
  )
}

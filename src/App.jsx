import { useState } from 'react'

const quests = [
  { id:1, type:"Guess it", xp:20, rank:"Detective", title:"The 3A.M. God Dance", question:"Which dance at 3 AM with pots on head?", lore:"Karagattam Tamil Nadu! 3AM for goddess Mariamman." },
  { id:2, type:"Explore more", xp:30, rank:"Explorer", title:"Why Karaga Becomes Woman?", question:"Why Bengaluru Karaga priest dresses as woman?", lore:"Karnataka Shaktyotsava - male carries Shakti power." },
  { id:3, type:"Do it", xp:40, rank:"Performer", title:"Create a Kolam", question:"Draw 3x3 dot Kolam?", lore:"Kolam welcomes Lakshmi with rice flour." },
  { id:4, type:"Feedback", xp:10, rank:"Storyteller", title:"Share your memory", question:"Which story did grandmother tell you?", lore:"Every family story is living archive!" },
  { id:5, type:"Guess it", xp:20, rank:"Detective", title:"Floating Market", question:"Where market floats on boats?", lore:"Dal Lake Srinagar - Shikaras!" },
  { id:6, type:"Explore more", xp:30, rank:"Explorer", title:"Why 21 leaves?", question:"Why food on 21 leaves in Kerala?", lore:"21 forms of nature." },
  { id:7, type:"Do it", xp:40, rank:"Performer", title:"Learn Bihu step", question:"Learn 2 Bihu steps!", lore:"Assam new year hip moves." },
]

const storiesData = [
  { id:1, title:"Tipu Sultan's Rocket", category:"Kings", catColor:"#fde6d8", image:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Tipu%27s_Rocket.jpg", story:"Tipu Sultan was Mysore Tiger. In late 1700s he created iron-cased rockets that flew 2km and exploded in air - world had never seen. Other kings still fighting swords. He had 5000 men dedicated rocket corps workshop Srirangapatna day-night. In Anglo-Mysore Wars British terrified. After he died 1799 British took rockets to England studied became base for Congreve rockets used in Napoleonic Wars and American War. NASA rockets great-grandfather invented in Mysore. True Make in India 200 years before slogan." },
  { id:2, title:"Hampi Festival", category:"Festivals", catColor:"#fef3c2", image:"https://images.unsplash.com/photo-1606496889195-7f72a2a8a0d2?q=80&w=800", story:"Hampi was richest city in world 1500s. Portuguese traveler Domingo Paes wrote city as big as Rome markets filled with diamonds rubies gold. Had 500,000 people huge for that time. Hampi Festival 3 days ruins come alive dance music puppet shows processions. Virupaksha Temple decorated lights artists perform classical dances in front of stone chariot. Tungabhadra banks become stage. If you go during festival you feel you went back 500 years. Boulders temples drums tell you this was not just city it was world's wonder." },
  { id:3, title:"Mysore Pak", category:"Food", catColor:"#e9d5ff", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mysore_Pak.jpg/800px-Mysore_Pak.jpg", story:"One day Mysore Palace kitchen head cook Kakasura Madappa in panic. King Krishnaraja Wodeyar IV about to finish lunch no sweet ready. Quickly mixed gram flour ghee sugar put on fire. Got distracted mixture overcooked. To save poured more ghee. Mixture became soft porous melted in mouth. Served to King. King loved asked name. Said Mysore Pak - Pak means sweet in Kannada. King ordered open sweet shop outside palace so everyone can eat. Shop still there Guru Sweets Devaraja Market run by great-grandson. Secret 1kg Mysore Pak needs almost 1kg pure Nandini ghee. Melts moment touches tongue." },
  { id:4, title:"Vijayanagara Empire", category:"Kings", catColor:"#fecaca", image:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800", story:"1300s two brothers Harihara Bukka built empire to protect South Indian culture from invasions. Captured by Delhi Sultanate taken to Delhi as prisoners but escaped came back. With blessings Saint Vidyaranya built new city banks Tungabhadra named Vijayanagara - City of Victory. Next 200 years became richest most powerful in India. Built Hampi protected temples promoted art music trade. Kings so rich diamonds sold on streets like vegetables. Foreign travelers wrote king's palace had rooms full of gold coins. Empire fell 1565 Battle Talikota when 5 Deccan Sultanates joined. In one day Hampi burnt looted for 6 months. Even today walking in Hampi ruins you feel power of two brothers who built empire from nothing." },
  { id:5, title:"Krishnadevaraya", category:"Kings", catColor:"#fde6d8", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Krishnadevaraya.jpg/500px-Krishnadevaraya.jpg", story:"Greatest king Vijayanagara Empire ruled 1509-1529 Golden Age Karnataka Andhra. Not just warrior who won 14 wars he was scholar. Wrote famous Telugu book Amuktamalyada about girl Andal who loves Lord Vishnu. Had 8 famous poets court called Ashtadiggajas most famous Tenali Ramakrishna stories still hear today. Himself would sit with scholars discuss poetry till midnight. Built Vittala Temple famous stone chariot musical pillars make sounds when tap. Portuguese traveler wrote - King medium height cheerful respects foreigners most perfect king you could ever find. Died at just 38 but 20 years rule made Kannada Telugu cultures reach sky." },
  { id:6, title:"Kempegowda", category:"Kings", catColor:"#d1fae5", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kempegowda_I_statue_at_Lalbagh.jpg/500px-Kempegowda_I_statue_at_Lalbagh.jpg", story:"1537 chieftain Kempegowda I looked at barren land hills forests had dream. Feudatory under Vijayanagara but big ambitions. Built mud fort town inside named Bengaluru name came Benda Kaluru town of boiled beans - old woman once fed him boiled beans when lost. Built 4 towers in 4 directions to mark future city limits said one day Bengaluru will grow till these towers. Today city grown 1000 times beyond towers 1.2cr people. Built Basavanagudi Bull Temple Someshwara Temple. Every year Karnataka gives Kempegowda Award birthday. Statue proudly front Vidhana Soudha international airport named after him. One man's vision became Silicon Valley." },
  { id:7, title:"Bisi Bele Bath", category:"Food", catColor:"#f3f4f6", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bisi_Bele_Bath.jpg/800px-Bisi_Bele_Bath.jpg", story:"Every family Karnataka has own secret recipe Bisi Bele Bath masala. Dish invented Mysore Palace Bisi Bele means hot lentil Kannada. Perfect combination rice toor dal vegetables special spice powder over 20 ingredients cinnamon cloves coconut marathi moggu only found Karnataka. Real trick balance spicy slightly sweet tangy tamarind ghee aroma. Every home grandmother version considered best. Some add jaggery some more coconut. Bangalore best Bisi Bele Bath found MTR restaurant near Lalbagh serving since 1924 silver cup blob ghee top potato chips side. Not just food it's comfort. When rains Bengaluru every home cooks Bisi Bele Bath." },
  { id:8, title:"Dharwad Pedha", category:"Food", catColor:"#dbeafe", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dharwad_pedha.jpg/800px-Dharwad_pedha.jpg", story:"175 years ago man from Unnao UP named Ram Ratan Singh Thakur migrated to Dharwad North Karnataka. Started making pedhas from milk heated reduced for hours. Dharwad Pedha different any other pedha India brown color crumbly coated white sugar burnt milk taste comes long cooking. Milk cooked 4 hours till khoya then sugar added cooked again. Secret Dharwad buffalo milk very thick. 2007 Dharwad Pedha got Geographical Indication GI Tag means only sweets made in Dharwad can be called Dharwad Pedha. Original shop Babu Singh Thakur Pedha still run by 5th generation Line Bazaar Dharwad sell 1000kgs daily people Mumbai Bangalore book advance weddings." },
  { id:9, title:"Kambala", category:"Festivals", catColor:"#fbcfe8", image:"https://images.unsplash.com/photo-1550358864-518f20239e8f?q=80&w=800", story:"Coastal Karnataka farmers celebrate Kambala buffalo race. After paddy harvest fields filled water made race track. Two buffaloes tied plough runner stands plough races 140m slushy water looks movie scene. 2020 runner Srinivasa Gowda became famous overnight because ran 100m in 9.55s slush faster than Usain Bolt world record 9.58s on track! Buffaloes not ordinary trained years massaged oil fed special diet coconut jaggery each pair costs up to 10 lakhs owners love like own children. Kambala not just race thanksgiving to buffaloes who help farming. 2018 banned animal cruelty but whole coastal Karnataka protested government had to allow again new rules. Today pride Tulunadu." },
  { id:10, title:"Mysore Dasara", category:"Festivals", catColor:"#dbeafe", image:"https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800", story:"Every year October Mysore becomes most beautiful city India. 10-day Dasara celebrated as Nada Habba state festival Karnataka. Whole city decorated like bride. Main attraction Mysore Palace lit with 1 lakh golden bulbs every evening 7 to 10 PM light makes whole palace look made of gold. Last day Vijayadashami famous Jumboo Savari happens Goddess Chamundeshwari idol placed 750kg golden mantapa top elephant named Abhimanyu elephant carries through city with 12 other elephants camels horses folk dance teams. Royal family Wodeyars still sits Durbar Hall traditional attire. Story Goddess Chamundi killed demon Mahishasura this day Mysore got name from Mahishasura. If want see real royal India come Mysore Dasara once never forget." },
]

const culturesData = [
  { id:1, name:"Yakshagana", state:"Karnataka", status:"Alive", meaning:"Night drama with huge headgear", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yakshagana.jpg/800px-Yakshagana.jpg", color:"#fff7ed", detail:"800-year theatre coastal Karnataka. 4ft headgear wood+peacock feathers 15kg costume all night 8pm-6am Ramayana Mahabharata. Bhagavata sings continuously without break 8 hours. Artist must know dance dialogue singing. 20+ professional troupes Udupi. Each performance costs 50k. Children learn from age 5 in gurukula. Most spectacular is demon entry with huge eyes." },
  { id:2, name:"Karaga Festival", state:"Karnataka", status:"Alive", meaning:"Men as women carry goddess pot barefoot", image:"https://images.unsplash.com/photo-1550358864-518f20239e8f?q=80&w=800", color:"#fef3c2", detail:"Bangalore oldest 300yr Thigala community. Man dresses woman carries Karaga pot 10km barefoot secret carrier identity not revealed till end. Trance bangles saree vermillion. Night whole city no sleep. Temple Dharmaraya. Power Shakti. One of last matriarchal priest traditions India where man becomes woman to hold goddess power." },
  { id:3, name:"Theyyam", state:"Kerala", status:"Alive", meaning:"Men become gods 400 forms at 3am", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Theyyam.jpg/800px-Theyyam.jpg", color:"#fce7f3", detail:"North Kerala Kannur Kasaragod Dalit men become gods. 30ft coconut leaf headgear red face fire dance 3am. 400+ forms each has story. People believe god really comes answers problems. Nov-May season temples kavus. Artist lower caste but during Theyyam even Brahmins touch feet. Most intense is Pottan Theyyam questioning caste." },
  { id:4, name:"Koodiyattam", state:"Kerala", status:"Almost lost", meaning:"2000yr Sanskrit theatre oldest world", image:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800", color:"#e0f2fe", detail:"UNESCO Masterpiece of Humanity. One act takes 10 days! Only eye movements for 1 hour show navarasa. Only 2 families Ammanur left who know full. Temple theatre Koothambalam built as per Natyashastra. Sanskrit + Malayalam mix. Extremely slow meditative. Young people don't want learn because 15 years training no money." },
  { id:5, name:"Vasudev Tradition", state:"Maharashtra", status:"Almost lost", meaning:"Morning blessing singers peacock cap", image:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800", color:"#f3e8ff", detail:"5am Maharashtra villages man with morpankh peacock feather cap wooden stick cymbals sings Vasudev aala Krishna messenger. Wakes villagers blessing. Rice money given. 700yr Wari pilgrims Pandharpur Vitthal. Considered incarnation Narada. Now only few old men left in Solapur villages children feel shy to continue." },
  { id:6, name:"Burrakatha", state:"Andhra", status:"Few families", meaning:"Single performer epics with drum", image:"https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800", color:"#ffedd5", detail:"One-man epic tambura anklets dance 3hr Ramayana Mahabharata. Drum like human skull pumpkin burra. Started British time to spread independence messages secretly. performer changes voice 20 characters. Only 30 families East Godavari left. Govt gives 500rs per show not enough." },
  { id:7, name:"Oggu Katha", state:"Telangana", status:"Few families", meaning:"Warriors storytelling huge drums", image:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800", color:"#fef9c3", detail:"Kuruma Golla castes tell Mallanna Shiva story 4ft wide chest drums 6-7 members loud warrior dance. All night Telangana jatara. Drum tied chest with rope beat with sticks till chest pains. Story of Lord Mallikarjuna marrying tribal girl. Very energetic." },
  { id:8, name:"Gotipua Dance", state:"Odisha", status:"Alive", meaning:"Boys dressed girls origin Odissi", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gotipua.jpg/800px-Gotipua.jpg", color:"#dcfce7", detail:"Mother of Odissi classical. Boys 6-12 dressed girls acrobatic splits pyramids in Raghurajpur near Puri. Guru trains akhada early morning 4am. Many Odissi gurus like Kelucharan Mohapatra were Gotipuas. Costume - silk saree flower garland. Perform near Jagannath temple for tourists now." },
  { id:9, name:"Saura Painting", state:"Odisha", status:"Almost lost", meaning:"Tribal wall art predicts dreams future", image:"https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?q=80&w=800", color:"#fee2e2", detail:"Saura tribe hut wall Idital rice paste red mud. Shaman dreams then draws to prevent bad future - if dream of tiger attack draw tiger god to protect. White on red geometric humans trees. If not drawn believe death comes. Ritual needs sacrifice. Only 20 villages Koraput left youth going to cities." },
  { id:10, name:"Phad Scroll Singing", state:"Rajasthan", status:"Few families", meaning:"30ft scroll story sung all night", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Phad_painting.jpg/800px-Phad_painting.jpg", color:"#ffedd5", detail:"30ft cloth scroll Pabuji god local hero Bhopa carries village to village sings all night with ravanahatta 2-string violin made from coconut. Only Joshi families Bhilwara Shahpura paint natural colors stone turmeric 1 month per scroll. Bhopa-Bhopi couple performs - husband sings wife dances with lamp." },
  { id:11, name:"Kalbelia Dance", state:"Rajasthan", status:"Alive", meaning:"Snake charmer dance like snakes", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kalbelia_dance.jpg/800px-Kalbelia_dance.jpg", color:"#fef3c2", detail:"Snake charmer tribe Sapera women black skirt silver border like snake skin flexible snake moves backwards bend body touching head to ground. Men play been poongi snake music. UNESCO intangible heritage. Pushkar fair main performance. Improvised never choreographed fast sensuous. Women tattoo snake." },
  { id:12, name:"Baul Singers", state:"Bengal", status:"Alive", meaning:"Wandering mystics God inside body", image:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800", color:"#e0f2fe", detail:"Crazy mystics Bengal saffron lungi ektara one-string long hair no house family. Sing Moner Manush man of heart search. Lalon Fakir greatest wrote 500 songs. Hindu-Muslim mix reject temple mosque say body is temple. 5000 wander Shantiniketan Joydev mela winter. Smoke chillum sing all night." },
  { id:13, name:"Patachitra Scroll", state:"Bengal", status:"Few families", meaning:"Painters who SING painting", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Patachitra.jpg/800px-Patachitra.jpg", color:"#fce7f3", detail:"Patua carry 10ft scroll door to door open slowly sing explaining picture. Natural colors charcoal turmeric cow dung. Village Naya Medinipur full painter singers. Even Titanic 9/11 painted! Singing is called Pater Gaan. Women now also paint. Each scroll has song - they compose like news channel. Only 50 families left." },
]

const historiesData = [
  { id:1, name:"Vijayanagara Empire", period:"1336-1646", state:"Karnataka", image:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800", story:"In 1300s two brothers Harihara and Bukka were captured by Delhi Sultanate taken as prisoners to Delhi. They escaped with blessings of saint Vidyaranya and built new city on banks Tungabhadra named Vijayanagara - City of Victory. For next 200 years this empire became richest and most powerful in India. They built Hampi protected all temples promoted art music trade. Hampi had 5 lakh people second largest city in world 1500 after Beijing. Portuguese traveler Domingo Paes wrote diamonds sold on streets like vegetables. Kings palace had rooms full of gold coins. Built Vittala Temple with famous stone chariot and musical pillars that make sounds when you tap them. Empire fell 1565 Battle of Talikota when 5 Deccan Sultanates joined together. In one day Hampi was burnt and looted for 6 months. Even today if you walk in Hampi ruins you can feel power of those two brothers who built empire from nothing." },
  { id:2, name:"Mysore Wodeyars", period:"1399-1950", state:"Karnataka", image:"https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800", story:"Wodeyars ruled Mysore for 600 years 25 kings. Most famous was Krishnaraja Wodeyar IV who made Mysore a model city with electricity before many world cities had. Built Mysore Palace which is lit with 1 lakh golden bulbs during Dasara making it look like made of gold. Palace built 1912 Indo-Saracenic style costing 41 lakhs then. Invented Mysore Pak by cook Kakasura Madappa who forgot sweet on stove and added ghee to save. Invented Bisi Bele Bath. MTR restaurant serving since 1924 in silver cup with ghee blob. Last king Jayachamaraja Wodeyar gave all his gold to Indian government after independence 1947. Wodeyars still live in palace." },
  { id:3, name:"Hoysala Empire", period:"1000-1346", state:"Karnataka", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Belur_Halebidu.jpg/800px-Belur_Halebidu.jpg", story:"Hoysalas built Belur and Halebidu temples with 10,000 sculptures so detailed you can see fingernails jewelry holes hair strands. Star-shaped temples made of soapstone soft when carved but hardens after 5 years. No two sculptures same in whole temple each tells story from Ramayana Mahabharata. Chennakesava Temple Belur took 103 years to build with 1000 sculptors working generations. Most famous sculpture Darpana Sundari lady looking in mirror. They invented new style called Hoysala art - bottom to top - elephants lions horses stories. Sala story founder killed tiger with just a stick." },
  { id:4, name:"Chalukya Dynasty", period:"543-753", state:"Karnataka", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Badami_caves.jpg/800px-Badami_caves.jpg", story:"Chalukyas built Badami cave temples carved from single red sandstone hill 4 caves Shiva Vishnu Jain. Pattadakal UNESCO World Heritage has 10 temples mixing North Indian curvilinear tower and South Indian stepped vimana - first dynasty to do both styles experiment. Pulakeshin II defeated Emperor Harsha who ruled North India and stopped his expansion south. Chinese traveler Hiuen Tsang visited wrote Chalukyas were brave and proud. They built 200+ temples in Aihole called cradle of temple architecture where they experimented 16 types of temples learning by trial." },
  { id:5, name:"Kadamba Dynasty", period:"345-540", state:"Karnataka", image:"https://images.unsplash.com/photo-1606496889195-7f72a2a8a0d2?q=80&w=800", story:"First Kannada kingdom founded by Mayurasharma who was poor Brahmin student in Kanchi. Once he went to study and guard insulted him didn't let inside yagna. He got angry left studies picked sword and became king! He took forest near Banavasi and built kingdom. Created Halmidi inscription 1112 first ever Kannada writing found - 16 lines stone. Their emblem was lion. They started building temples in Karnataka and encouraged Kannada language." },
  { id:6, name:"Rashtrakuta Empire", period:"753-982", state:"Karnataka", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ellora_Kailasa.jpg/800px-Ellora_Kailasa.jpg", story:"Built Ellora Kailasa temple world's largest monolithic structure carved from single mountain top to bottom! 400,000 tons rock removed 100 years to build 7000 labourers. You have to carve from top downwards no mistake allowed otherwise whole temple fails. Arab traveler Sulaiman wrote Rashtrakutas were 1 of 4 great kings of world with Baghdad China Constantinople. They ruled from Kannauj North to Rameswaram South. King Amoghavarsha wrote Kavirajamarga first Kannada literature book about poetry. Dantidurga founder overthrew Chalukyas." },
  { id:7, name:"Ganga Dynasty", period:"350-1000", state:"Karnataka", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Gommateshwara.jpg/500px-Gommateshwara.jpg", story:"Built Shravanabelagola Gommateshwara statue 57ft tall monolith tallest in world 1000 years old 10,000 men pulled it up hill with ropes. Built by minister Chamundaraya. Every 12 years Mahamastakabhisheka where statue bathed with milk honey saffron 1008 kalashas from helicopter. Jains believe Bahubali stood meditating so long vines grew on legs anthills. Gangas also built Bangalore Begur inscription 890 AD first mention Bengaluru name. They ruled from Kolar gold mines." },
  { id:8, name:"Tipu Sultan Era", period:"1782-1799", state:"Karnataka", image:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Tipu%27s_Rocket.jpg", story:"Tipu Sultan Mysore Tiger ruled Mysore fought 4 wars against British East India Company. Created iron-cased rockets flew 2km exploded in air world first metal rockets. British army terrified never seen such weapon. Had dedicated rocket corps 5000 men workshop Srirangapatna day-night making rockets with sword blades attached. After he died 1799 in 4th Anglo-Mysore War defending Srirangapatna fort, British took rockets to England studied them became base for Congreve rockets used in Napoleonic Wars and American War 1812 Star Spangled Banner mentions rockets. NASA rockets great-grandfather invented in Mysore. True Make in India 200 years before slogan." },
  { id:9, name:"Kempegowda Bengaluru", period:"1537", state:"Karnataka", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kempegowda_I_statue_at_Lalbagh.jpg/500px-Kempegowda_I_statue_at_Lalbagh.jpg", story:"1537 chieftain Kempegowda I under Vijayanagara Empire looked at barren land hills forests had dream. Built mud fort town inside named Bengaluru name came from Benda Kaluru town of boiled beans - old woman once fed him boiled beans when he was lost in forest. Built 4 towers in 4 directions Lalbagh Bugle Rock Kempambudhi Ulsoor marking future city limits said one day Bengaluru will grow till these towers. Today city grown 1000 times beyond towers 1.2cr people. Built Basavanagudi Bull Temple Someshwara Temple. Statue stands proudly front Vidhana Soudha international airport named after him. One man's vision became India's Silicon Valley." },
  { id:10, name:"Keladi Nayakas & Rani Chennamma", period:"1499-1763", state:"Karnataka", image:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800", story:"Keladi Nayakas ruled Malnad Shimoga with capital Ikkeri. Famous queen Rani Chennamma fought Mughal emperor Aurangzeb and won - she gave shelter to Maratha king Rajaram son of Shivaji when Aurangzeb chasing him across India. She let him stay in Keladi fort 1 year protected him. Built Aghoreshwara temple Ikkeri with 32ft monolithic Nandi stone bull. They were so rich Portuguese traded pepper for gold 1kg pepper = 1gm gold. Their coins had Gandaberunda two-headed mythical bird which is now Karnataka emblem." },
]

function XPPopup({ xp, show }){
  if(!show) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <div className="bg-black text-white rounded-[28px] px-10 py-7 text-center border-[4px] border-orange-500 shadow-[0_20px_60px_rgba(255,106,0,0.6)] animate-[pop_0.6s_ease-out]">
        <div className="text-[50px] animate-bounce">⚡</div>
        <div className="text-[44px] font-black text-orange-400">+{xp} XP</div>
        <div className="text-sm font-bold mt-1">Quest Completed!</div>
      </div>
      <style>{`@keyframes pop{0%{transform:scale(0.3) translateY(80px);opacity:0}70%{transform:scale(1.2)}100%{transform:scale(1)}}`}</style>
    </div>
  )
}

export default function App(){
  const [activeTab,setActiveTab]=useState('stories')
  const [filter,setFilter]=useState('All')
  const [done,setDone]=useState([])
  const [xp,setXp]=useState(90)
  const [showXP,setShowXP]=useState(false)
  const [lastXP,setLastXP]=useState(0)
  const [selected,setSelected]=useState(null)
  const [view,setView]=useState('table')

  const triggerXP=(n)=>{ setLastXP(n); setShowXP(true); setXp(x=>x+n); setTimeout(()=>setShowXP(false),2200) }
  const toggle=(id,n)=>{ if(!done.includes(id)){ setDone([...done,id]); triggerXP(n)} }

  const filteredQuests = filter==='All'? quests : quests.filter(q=>q.type===filter)

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="max-w-[1600px] mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center bg-white border-[3px] border-orange-500 rounded-full px-5 py-3 shadow-[0_6px_20px_rgba(255,106,0,0.2)]">
          <h1 className="text-[24px] font-black tracking-tight"><span className="text-orange-500">Kal</span>Chakra ⌛</h1>
          <div className="bg-black text-white px-4 py-1.5 rounded-full text-[13px] font-black border-2 border-orange-500">{xp} XP • {done.length}/7 Completed</div>
        </div>

        <div className="flex gap-2 mt-5 overflow-x-auto pb-2">
          {[
            {id:'stories', label:'Stories 📖 10'},
            {id:'cultures', label:'Cultures 🌍 13'},
            {id:'histories', label:'Histories ⏳ 10'},
            {id:'quests', label:'Quests ⚡ 7'},
          ].map(t=>(
            <button key={t.id} onClick={()=>setActiveTab(t.id)} className={`px-5 py-2.5 rounded-full text-sm font-black border-[3px] whitespace-nowrap transition-all ${activeTab===t.id? "bg-black text-white border-black shadow-lg scale-105":"bg-white text-gray-700 border-orange-200 hover:border-orange-500 hover:scale-105"}`}>{t.label}</button>
          ))}
        </div>

        {activeTab==='stories' && (
          <>
            <div className="mt-4 flex gap-2">
              <button onClick={()=>setView('table')} className={`px-4 py-2 rounded-full text-sm font-black border-[3px] ${view==='table'? "bg-black text-white border-black":"bg-white border-orange-200"}`}>▤ Table View</button>
              <button onClick={()=>setView('gallery')} className={`px-4 py-2 rounded-full text-sm font-black border-[3px] ${view==='gallery'? "bg-black text-white border-black":"bg-white border-orange-200"}`}>⊞ Gallery View</button>
            </div>
            {view==='table'? (
              <div className="border-[3px] border-orange-500 rounded-[18px] overflow-hidden mt-4 bg-white shadow-[0_10px_40px_rgba(255,106,0,0.15)]">
                <div className="min-w-[1100px]">
                  <div className="grid grid-cols-[1.2fr_0.5fr_0.6fr_1.3fr] bg-orange-500 text-white text-[12px] font-black px-4 py-3 border-b-[4px] border-orange-700">
                    <div>📄 Story Title</div><div>Category</div><div>Image</div><div>Detailed Story Preview (click to read full)</div>
                  </div>
                  {storiesData.map(s=>(
                    <div key={s.id} onClick={()=>setSelected({type:'story', data:s})} className="grid grid-cols-[1.2fr_0.5fr_0.6fr_1.3fr] px-4 py-3 border-b-[2.5px] border-orange-100 hover:bg-orange-50 cursor-pointer text-[13px] items-center">
                      <div className="font-black">📄 {s.title}</div>
                      <div><span style={{background:s.catColor}} className="px-2.5 py-1 rounded-full text-[11px] font-bold border-2 border-orange-200">{s.category}</span></div>
                      <div><img src={s.image} className="w-20 h-12 object-cover rounded-[10px] border-[3px] border-orange-400" /></div>
                      <div className="text-gray-600 truncate leading-6">{s.story.slice(0,80)}...</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {storiesData.map(s=>(
                  <div key={s.id} onClick={()=>setSelected({type:'story', data:s})} className="bg-white border-[3px] border-orange-500 rounded-[20px] overflow-hidden hover:shadow-[0_10px_40px_rgba(255,106,0,0.3)] cursor-pointer hover:scale-[1.02] transition-all">
                    <img src={s.image} className="w-full h-52 object-cover border-b-[4px] border-orange-500" />
                    <div className="p-4"><h3 className="font-black text-[16px]"><span className="text-orange-500">Kal</span>Chakra: {s.title}</h3><p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-6">{s.story}</p><button className="mt-3 bg-black text-white px-4 py-1.5 rounded-full text-xs font-black border-2 border-orange-500">Read Full Detailed →</button></div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab==='cultures' && (
          <div className="border-[3px] border-orange-500 rounded-[20px] overflow-hidden mt-4 bg-white shadow-[0_10px_40px_rgba(255,106,0,0.18)]">
            <div className="min-w-[1400px]">
              <div className="grid grid-cols-[0.9fr_0.5fr_0.5fr_0.5fr_1.3fr] bg-orange-500 text-white text-[12px] font-black px-4 py-4 border-b-[4px] border-orange-700">
                <div className="border-r-2 border-orange-300">🌍 Culture Name</div><div className="border-r-2 border-orange-300 px-3">📸 Image</div><div className="border-r-2 border-orange-300 px-3">📍 State</div><div className="border-r-2 border-orange-300 px-3">Status</div><div className="px-3">Meaning + Click for DETAILED 150-word explanation</div>
              </div>
              {culturesData.map(c=>(
                <div key={c.id} onClick={()=>setSelected({type:'culture', data:c})} className="grid grid-cols-[0.9fr_0.5fr_0.5fr_0.5fr_1.3fr] px-4 py-3 border-b-[2.5px] border-orange-100 hover:bg-orange-50 cursor-pointer text-[13px] items-center">
                  <div className="font-black flex items-center gap-2"><span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black">{c.id}</span>{c.name}</div>
                  <div className="px-3"><img src={c.image} className="w-20 h-12 object-cover rounded-[10px] border-[3px] border-orange-400" /></div>
                  <div className="px-3"><span className="bg-white border-2 border-orange-200 px-2.5 py-1 rounded-full text-[11px] font-bold">{c.state}</span></div>
                  <div className="px-3"><span className={`px-2.5 py-1 rounded-full text-[11px] font-black border-2 ${c.status==='Alive'? "bg-yellow-100 border-yellow-400":c.status==='Almost lost'? "bg-gray-100 border-gray-400":"bg-pink-100 border-pink-300"}`}>{c.status}</span></div>
                  <div className="px-3 font-medium">{c.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='histories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            {historiesData.map(h=>(
              <div key={h.id} onClick={()=>setSelected({type:'history', data:h})} className="bg-white border-[3px] border-orange-500 rounded-[22px] overflow-hidden hover:shadow-[0_10px_40px_rgba(255,106,0,0.3)] cursor-pointer hover:scale-[1.01] transition-all">
                <img src={h.image} className="w-full h-48 object-cover border-b-[4px] border-orange-500" />
                <div className="p-5">
                  <h3 className="font-black text-[18px] leading-tight">{h.name} <span className="text-orange-500 text-[12px] bg-orange-50 border border-orange-200 px-2 py-1 rounded-full ml-2">{h.period} • {h.state}</span></h3>
                  <p className="text-[13px] text-gray-700 mt-3 line-clamp-3 leading-7">{h.story}</p>
                  <div className="flex gap-2 mt-4">
                    <button onClick={(e)=>{e.stopPropagation(); triggerXP(30)}} className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-black border-[3px] border-orange-700 hover:bg-black hover:border-black transition">Read Detailed +30 XP</button>
                    <span className="bg-black text-white px-3 py-2 rounded-full text-[10px] font-bold">Detailed Long Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab==='quests' && (
          <>
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {['All','Guess it','Explore more','Do it','Feedback'].map(f=>(
                <button key={f} onClick={()=>setFilter(f)} className={`px-4 py-2 rounded-full text-[13px] font-black border-[3px] whitespace-nowrap ${filter===f? "bg-black text-white border-black":"bg-white border-orange-200 hover:border-orange-500"}`}>{f}</button>
              ))}
            </div>
            <div className="grid gap-4 mt-4 max-w-[650px]">
              {filteredQuests.map(q=>(
                <div key={q.id} className="bg-white border-[3px] border-orange-200 rounded-[20px] p-5 shadow-[0_4px_20px_rgba(255,106,0,0.1)] hover:border-orange-500 transition">
                  <div className="flex justify-between text-[12px] font-black"><span className="bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">{q.type} • {q.xp} XP</span><span>🧭 {q.rank}</span></div>
                  <h3 className="font-black text-[17px] mt-3">{q.title}</h3>
                  <p className="text-[14px] text-gray-800 mt-1 font-medium">{q.question}</p>
                  {q.type==='Feedback'? (
                    <>
                      <p className="text-[13px] font-black mt-4 text-orange-600 border-t-2 border-orange-100 pt-3">💭 How did this make you feel? (real meeting feedback)</p>
                      <div className="flex gap-2 mt-3">
                        {[
                          {e:"🤯", xp:"+50 XP"},
                          {e:"😍", xp:"+40 XP"},
                          {e:"🙂", xp:"+30 XP"},
                          {e:"😐", xp:"+20 XP"},
                          {e:"😔", xp:"+10 XP"},
                        ].map(m=>(
                          <button key={m.e} onClick={()=>toggle(q.id,q.xp)} className="flex-1 py-3 rounded-[14px] border-[3px] border-orange-200 bg-[#fff7ed] hover:border-orange-500 hover:scale-110 hover:bg-orange-500 hover:text-white transition-all flex flex-col items-center"><span className="text-[26px]">{m.e}</span><span className="text-[9px] font-black mt-1">{m.xp}</span></button>
                        ))}
                      </div>
                      <button onClick={()=>toggle(q.id,q.xp)} className={`mt-4 w-full py-3 rounded-full text-sm font-black border-[3px] ${done.includes(q.id)? "bg-green-500 border-green-700 text-white":"bg-black border-black text-white"}`}>{done.includes(q.id)? "✓ Completed Feedback +10 XP":"Select mood to complete"}</button>
                    </>
                  ) : (
                    <>
                      <p className="text-[12px] bg-[#fff7ed] border-2 border-orange-100 p-3 rounded-[12px] mt-3 leading-6 font-medium">💡 {q.lore}</p>
                      <button onClick={()=>toggle(q.id,q.xp)} className={`mt-3 w-full py-2.5 rounded-full text-sm font-black border-[3px] transition ${done.includes(q.id)? "bg-green-500 border-green-700 text-white":"bg-black border-black text-white hover:bg-orange-500 hover:border-orange-700"}`}>{done.includes(q.id)? `✓ Completed +${q.xp} XP`:`Complete Quest +${q.xp} XP ⚡`}</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50" onClick={()=>setSelected(null)}>
          <div className="bg-white rounded-[26px] max-w-2xl w-full max-h-[90vh] overflow-y-auto border-[5px] border-orange-500 shadow-[0_20px_80px_rgba(255,106,0,0.5)]" onClick={e=>e.stopPropagation()}>
            <img src={selected.data.image} className="w-full h-[280px] object-cover border-b-[5px] border-orange-500" />
            <div className="p-7">
              <div className="flex justify-between items-start gap-3">
                <h2 className="text-[28px] font-black leading-tight"><span className="text-orange-500">Kal</span>Chakra: {selected.data.title || selected.data.name}</h2>
                <button onClick={()=>setSelected(null)} className="bg-gray-100 w-10 h-10 rounded-full font-black border-2 border-orange-200">✕</button>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="px-3 py-1.5 rounded-full text-xs font-black border-2 bg-orange-50 border-orange-200">{selected.data.category || selected.data.state || selected.data.period}</span>
                <span className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-black border-2 border-orange-500">Detailed Long Story</span>
              </div>
              <p className="mt-5 text-[15px] leading-[32px] text-gray-800 font-medium">{selected.data.story || selected.data.detail}</p>
              <button onClick={()=>{ setSelected(null); triggerXP(20)}} className="mt-7 w-full bg-orange-500 text-white py-4 rounded-full font-black text-[15px] border-[3px] border-orange-700 hover:bg-black hover:border-black transition">Close & Get +20 XP →</button>
            </div>
          </div>
        </div>
      )}

      <XPPopup xp={lastXP} show={showXP} />
    </div>
  )
}

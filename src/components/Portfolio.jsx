const cards = [
  { t:'REST API', img:'https://images.unsplash.com/photo-1759747509229-d0ca933d6c6b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { t:'Auth + JWT', img:'https://images.unsplash.com/photo-1759197458094-23fec548da4c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { t:'Admin Dashboard', img:'https://images.unsplash.com/photo-1759109220887-6768eda42293?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

export default function Portfolio(){
  return (
    <section id="work" style={{padding:'56px 20px',background:'#111827',color:'#e5e7eb'}}>
      <h2 style={{margin:'0 0 20px 0'}}>Portfolio</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
        {cards.map((c,i)=>(
          <article key={i} style={{borderRadius:14,overflow:'hidden',background:'#0b1220',border:'1px solid #1f2937'}}>
            <img src={c.img} alt={c.t} style={{width:'100%',height:160,objectFit:'cover'}} />
            <div style={{padding:14}}>
              <b>{c.t}</b>
              <p style={{fontSize:13,opacity:.8,marginTop:6}}>Short description.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
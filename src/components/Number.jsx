import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Box = ({label, end}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .4 })
  return (
    <div ref={ref} style={{textAlign:'center', padding:18, border:'1px solid #1f2937', borderRadius:12}}>
      <div style={{fontSize:34, fontWeight:700}}>
        {inView ? <CountUp end={end} duration={2}/> : 0}
      </div>
      <small style={{opacity:.8}}>{label}</small>
    </div>
  )
}

export default function Number(){
  return (
    <section id="stats" style={{padding:'56px 20px', background:'#0f172a', color:'#e2e8f0'}}>
      <h2 style={{margin:'0 0 20px 0'}}>Numbers</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px,1fr))', gap:16}}>
        <Box label="Commits" end={500}/>
        <Box label="Projects" end={12}/>
        <Box label="Clients" end={7}/>
        <Box label="Coffee ☕" end={999}/>
      </div>
    </section>
  )
}
import Tilt from 'react-parallax-tilt'
import { TypeAnimation } from 'react-type-animation'

export default function Hero(){
  return (
    <section id="hero" style={{minHeight:'70vh',display:'grid',placeItems:'center',padding:'48px 20px',background:'#0b1220',color:'#e2e8f0'}}>
      <div style={{display:'grid',gap:18,maxWidth:900}}>
        <h1 style={{fontSize:38,lineHeight:1.2}}>Hi 👋 I'm <b>Lui</b></h1>
        <TypeAnimation
          sequence={['Student for Kasetsart university ',2000,'C++',2000,'PHP • C# • JavaScript',2000]}
          speed={50}
          repeat={Infinity}
          style={{fontSize:18,opacity:.9}}
        />
        <Tilt glareEnable glareBorderRadius="16px">
          <img
            src="https://images.unsplash.com/photo-1755956187917-65cbe263b4e6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
            style={{width:'100%',maxHeight:360,objectFit:'cover',borderRadius:16}}
          />
        </Tilt>
      </div>
    </section>
  )
}

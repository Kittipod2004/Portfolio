export default function Footer(){
  return (
    <footer style={{padding:'28px 20px', textAlign:'center', background:'#85ff9fff', color:'#000000ff'}}>
      © {new Date().getFullYear()} Lui • Built with React + Vite + Bun
    </footer>
  )
}

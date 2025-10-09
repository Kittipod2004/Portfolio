import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit
} from 'react-icons/si'

const Item = ({ icon: Icon, label }) => (
  <div style={{ display: 'grid', placeItems: 'center', gap: 6 }}>
    <Icon size={36} />
    <small>{label}</small>
  </div>
)

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '56px 20px',
        background: '#0f172a',
        color: '#e2e8f0'
      }}
    >
      <h2 style={{ margin: '0 0 20px 0' }}>Skills</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
          gap: 20
        }}
      >
        <Item icon={SiJavascript} label="JavaScript" />
        <Item icon={SiPython} label="Python" />
        <Item icon={SiPhp} label="PHP" />
        <Item icon={SiNodedotjs} label="Node.js" />
        <Item icon={SiExpress} label="Express" />
        <Item icon={SiMysql} label="MySQL" />
        <Item icon={SiGit} label="Git" />
      </div>
    </section>
  )
}

import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {

  const users = [
    {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJ_Q_E5RnYDeVAeeKBJ3WD9crpkAc8VV5pJxpFCFKdGySd7K9l1w7aF3FYMGCqoFoYMKhgWc7R_xZwjsO13vVS7YPHYSgqYYmKE3KwA&s=10',
    intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore aspernatur totam.",
    tag:'Not Satisfied'
  },
    {
    img:'https://m.media-amazon.com/images/I/613ONLBRGNL._AC_UF1000,1000_QL80_.jpg',
    intro:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore aspernatur totam.",
    tag:'Satisfied'
  },
{
    img:'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSOJseqMGsdOhWkFPCDWsjDIRyWQ_WYSJM5zeUY-KzqdTF7Yaq4xGt_cTda5aiiEhfML6BchLZ-n5OVsqg',
    intro:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore aspernatur totam.",
    tag:'Semi-Satisfied'
  },
]
  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App

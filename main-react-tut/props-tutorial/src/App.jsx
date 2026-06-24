import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
     
    <Card user="Roshan" image="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    
    <Card user="Fyodor" image="https://m.media-amazon.com/images/I/613ONLBRGNL._AC_UF1000,1000_QL80_.jpg"/>

    <Card user="Fredrich" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJ_Q_E5RnYDeVAeeKBJ3WD9crpkAc8VV5pJxpFCFKdGySd7K9l1w7aF3FYMGCqoFoYMKhgWc7R_xZwjsO13vVS7YPHYSgqYYmKE3KwA&s=10"/>
    </div>
  )
}

export default App

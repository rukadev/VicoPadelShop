import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavbarReact from './components/NavbarReact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

    return (
        <BrowserRouter>
            <NavbarReact />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Bienvenido a Padel Shop' />} />
                <Route path='/productos/:categoria' element={<ItemListContainer greeting='Categoria de productos'/>} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
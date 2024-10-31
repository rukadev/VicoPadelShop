import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarReact from './components/NavbarReact'

function App() {

    return (
        <div>
            <NavbarReact />
            <ItemListContainer greeting='Bienvenido/a'/>
        </div>
    )
}

export default App

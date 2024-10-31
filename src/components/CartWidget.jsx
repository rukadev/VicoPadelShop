import { BsCart2 } from "react-icons/bs"
import { Badge } from "react-bootstrap"

const CartWidget = ({counter}) => {
    
    return(
        <div className="cartContainer">
            <BsCart2 fontSize={'1.7rem'} color="white"/>
            <Badge bg="danger">{counter}</Badge>
        </div>
    )
}

export default CartWidget
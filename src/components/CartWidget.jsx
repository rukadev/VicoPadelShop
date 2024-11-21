import { BsCart2 } from "react-icons/bs"
import { Badge } from "react-bootstrap"

const CartWidget = ({counter}) => {
    
    return(
        <div className="cartContainer">
            <BsCart2 className="cart-ico"/>
            <Badge pill bg="danger">{counter}</Badge>
        </div>    
    )
}

export default CartWidget
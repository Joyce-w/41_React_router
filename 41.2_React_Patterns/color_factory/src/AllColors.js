import { Link} from "react-router-dom"
import "./AllColors.css";


const AllColors = ({ colors}) => {

    const divStyle = {
        width: '50px',
        height: '50px'

    }

    return (
        <div>
            <h1 className="AllColor-h1">Color Factory</h1>
            <Link to="/colors/new">Add a Color </Link>
            
            <div className="AllColor-squares">
                {colors.map(el => {
                    return <div className="AllColor-colorOptions"key={el} style={{  backgroundColor: el }}></div>
                })
                }
            </div>
        </div>

    )
}

export default AllColors;
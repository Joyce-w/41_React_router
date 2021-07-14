import { Link} from "react-router-dom"
import "./AllColors.css";


const AllColors = ({ colors}) => {

    return (
        <div>
            <h1 className="AllColor-h1">Color Factory</h1>
            <Link to="/colors/new">Add a Color </Link>
            
            <div className="AllColor-squares">
                {colors.map(el => {
                    let hex = el.slice(1)
                    return <Link to={`/colors/${hex}`}>
                        <div className="AllColor-colorOptions" key={el} style={{ backgroundColor: el }}></div>
                            </Link>
                })
                }                
            </div>
        </div>
    )
}

export default AllColors;
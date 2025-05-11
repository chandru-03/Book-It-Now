import Buttons from "./Buttons";
import '../../../styles/MovieCard.css'

const FilterBtn = ({onClick}) => (
    <Buttons buttonSize="btns--small" buttonStyle="btns--outline" onClick={onClick} type="button">
        <div className="filter-btn">
        <i className="fa-solid fa-sliders"></i> &nbsp;&nbsp;Filters <i className="fa-solid fa-angle-down"></i>
        </div>
    </Buttons>
) 

export default FilterBtn;
import './PaginationStyle.css'


export const Pagination = ({ activePage , paginationlength, handleActivePage }) => {
    const pages = Math.ceil(paginationlength / 5);
    const paginationArr = []
    let arrItem = 1
    while(paginationArr.length < pages){
        paginationArr.push(arrItem++)
    }

    return (
        <div className="center">
            <div className="pagination">
                {paginationArr.map((item,i) => {
                   return(<a href="#" className={activePage?"active":''}onClick={()=>{handleActivePage(item)}}>{item}</a>)
                })}
            </div>
        </div>
    );
};

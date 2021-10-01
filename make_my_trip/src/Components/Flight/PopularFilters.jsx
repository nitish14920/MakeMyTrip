


export function Filters({title,data,status}){

    return (

        status ?
        <div className="popularSection">
            <h3>{title}</h3>
           
            {
                data.map((el)=>{
                  return  <div>
                <span className="checkBox"><i class="fas fa-check"></i></span>
                <span>{el}</span>
            </div>
                })
            }
        </div> : 
        <div className="popularSection">
        <h3>{title}</h3>
        <div style={{display:"flex"}}>
        {
            data.map((el)=>{
              return (<div>
                            <div className="filterBox">
                            <img src={el.img} alt="img" />
                            <span>{el.t}</span>
                            <span>{el.p}</span>
                            </div>
                        </div>
              )
            })
        }
        </div>
    </div>
    )
}
function List(props){
    return(
        <ul>
            <li>
            <a
            target="_blank"
            href={props.url}
            >   
                <img src={props.img} alt={props.alt}/>
            </a>
            </li>
        </ul>
    )
}

export default List
const Jumbotron = ({head3, para}) => {
    
    return ( 
    <>
        <h3 className="head3">
            {head3}
        </h3>
        <p className="para">{para}</p>
    </> );
}
 
export default Jumbotron;
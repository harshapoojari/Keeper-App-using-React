function Footer()
{
    const day=new Date();
    const year=day.getFullYear();
    return(
        <div className="footer">
            <p>Copyright © {year}</p>
        </div>
    )
}

export default Footer
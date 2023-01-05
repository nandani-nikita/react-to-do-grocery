const Footer = ({length}) => {
    const today = new Date();
    return(
        <footer>
            <p>{length <=1 ? 'Item' : 'Items'} Count: {length}</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer;
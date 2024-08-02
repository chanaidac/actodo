const Header = (props) => {
    return (
        <>
            <h1 className="text-3xl font-medium">Hello {props.name}!</h1>
            <p>I help you manage your activties :)</p>
        </>
    )
}
export default Header;
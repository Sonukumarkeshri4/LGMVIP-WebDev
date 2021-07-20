const Loader = ({ load }) => {
    return (
        (load) ?
            <div className="loader_container"> <div className="loaderCircle"></div></div> : ""
    )
}
export default Loader;
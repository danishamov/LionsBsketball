import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section id="top">
            <header>
                <div className="container">
                    <div className="header-top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="full">
                                    <div className="logo">
                                        <Link to="/">
                                            <img
                                                src="images/logo.png"
                                                alt="/"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right_top_section">
                                    {/* social icon */}
                                    <ul className="social-icons pull-left">
                                        <li>
                                            <a className="facebook" href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>

                                        <li>
                                            <a className="youtube" href="#">
                                                <i className="fa fa-youtube-play" />
                                            </a>
                                        </li>
                                    </ul>
                                    {/* end social icon */}
                                    {/* button section */}
                                    <ul className="login">
                                        <li className="login-modal">
                                            <Link to="/login" className="login">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="cart-option">
                                                <Link to="/register">
                                                    <i className="fa fa-shopping-cart" />
                                                    Register
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* end button section */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <div className="main-menu-section">
                                        <div className="menu">
                                            <nav className="navbar navbar-inverse">
                                                <div className="navbar-header">
                                                    <button
                                                        className="navbar-toggle"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target=".js-navbar-collapse"
                                                    >
                                                        <span className="sr-only">
                                                            Toggle navigation
                                                        </span>
                                                        <span className="icon-bar" />
                                                        <span className="icon-bar" />
                                                        <span className="icon-bar" />
                                                    </button>
                                                    <a
                                                        className="navbar-brand"
                                                        href="#"
                                                    >
                                                        Menu
                                                    </a>
                                                </div>
                                                <div className="collapse navbar-collapse js-navbar-collapse">
                                                    <ul className="nav navbar-nav">
                                                        <li className="active">
                                                            <Link to="/">
                                                                Home
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a href="about.html">
                                                                About
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="team.html">
                                                                Team
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="news.html">
                                                                News
                                                            </a>
                                                        </li>
                                                        <li className="dropdown mega-dropdown">
                                                            <a
                                                                href="match"
                                                                className="dropdown-toggle"
                                                                data-toggle="dropdown"
                                                            >
                                                                Match
                                                                <span className="caret" />
                                                            </a>
                                                            <ul className="dropdown-menu mega-dropdown-menu">
                                                                <li className="col-sm-8">
                                                                    <ul>
                                                                        <li className="dropdown-header">
                                                                            Men
                                                                            Collection
                                                                        </li>
                                                                        <div
                                                                            id="menCollection"
                                                                            className="carousel slide"
                                                                            data-ride="carousel"
                                                                        >
                                                                            <div className="carousel-inner">
                                                                                <div className="item active">
                                                                                    <div className="banner-for-match">
                                                                                        <a href="#">
                                                                                            <img
                                                                                                className="img-responsive"
                                                                                                src="images/match-banner1.jpg"
                                                                                                alt="#"
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                {/* End Item */}
                                                                                <div className="item">
                                                                                    <div className="banner-for-match">
                                                                                        <a href="#">
                                                                                            <img
                                                                                                className="img-responsive"
                                                                                                src="images/match-banner1.jpg"
                                                                                                alt="#"
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                {/* End Item */}
                                                                                <div className="item">
                                                                                    <div className="banner-for-match">
                                                                                        <a href="#">
                                                                                            <img
                                                                                                className="img-responsive"
                                                                                                src="images/match-banner1.jpg"
                                                                                                alt="#"
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                {/* End Item */}
                                                                            </div>
                                                                            {/* End Carousel Inner */}
                                                                            {/* Controls */}
                                                                            <a
                                                                                className="left carousel-control"
                                                                                href="#menCollection"
                                                                                role="button"
                                                                                data-slide="prev"
                                                                            >
                                                                                <span
                                                                                    className="glyphicon glyphicon-chevron-left"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                <span className="sr-only">
                                                                                    Previous
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                className="right carousel-control"
                                                                                href="#menCollection"
                                                                                role="button"
                                                                                data-slide="next"
                                                                            >
                                                                                <span
                                                                                    className="glyphicon glyphicon-chevron-right"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                <span className="sr-only">
                                                                                    Next
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        {/* /.carousel */}
                                                                    </ul>
                                                                </li>
                                                                <li className="col-sm-4">
                                                                    <ul className="menu-inner">
                                                                        <li className="dropdown-header">
                                                                            Next
                                                                            Matchs
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Contrary
                                                                                vs
                                                                                classical
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Discovered
                                                                                vs
                                                                                undoubtable
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Contrary
                                                                                vs
                                                                                classical
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Discovered
                                                                                vs
                                                                                undoubtable
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Contrary
                                                                                vs
                                                                                classical
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Discovered
                                                                                vs
                                                                                undoubtable
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Contrary
                                                                                vs
                                                                                classical
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                Discovered
                                                                                vs
                                                                                undoubtable
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="blog.html">
                                                                Blog
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <Link to="/contact">
                                                                contact
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* /.nav-collapse */}
                                            </nav>
                                            <div className="search-bar">
                                                <div id="imaginary_container">
                                                    <div className="input-group stylish-input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search"
                                                        />
                                                        <span className="input-group-addon">
                                                            <button type="submit">
                                                                <i
                                                                    className="fa fa-search"
                                                                    aria-hidden="true"
                                                                />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="full-slider">
                <div id="carousel-example-generic" className="carousel slide">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carousel-example-generic"
                            data-slide-to={0}
                            className="active"
                        />
                        <li
                            data-target="#carousel-example-generic"
                            data-slide-to={1}
                        />
                        <li
                            data-target="#carousel-example-generic"
                            data-slide-to={2}
                        />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                        {/* First slide */}
                        <div
                            className="item active deepskyblue"
                            data-ride="carousel"
                            data-interval={5000}
                        >
                            <div className="carousel-caption">
                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                    <div
                                        className="slider-contant"
                                        data-animation="animated fadeInRight"
                                    >
                                        <h3>
                                            If you Don’t Practice
                                            <br />
                                            You{" "}
                                            <span className="color-yellow">
                                                Don’t Derserve
                                            </span>
                                            <br />
                                            to win!
                                        </h3>
                                        <p>
                                            If you use this site regularly and
                                            would like to help keep the site on
                                            the Internet,
                                            <br />
                                            please consider donating a small sum
                                            to help pay..
                                        </p>
                                        <button className="btn btn-primary btn-lg">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.item */}
                        {/* Second slide */}
                        <div
                            className="item skyblue"
                            data-ride="carousel"
                            data-interval={5000}
                        >
                            <div className="carousel-caption">
                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                    <div
                                        className="slider-contant"
                                        data-animation="animated fadeInRight"
                                    >
                                        <h3>
                                            If you Don’t Practice
                                            <br />
                                            You{" "}
                                            <span className="color-yellow">
                                                Don’t Derserve
                                            </span>
                                            <br />
                                            to win!
                                        </h3>
                                        <p>
                                            You can make a case for several
                                            potential winners of
                                            <br />
                                            the expanded European Championships.
                                        </p>
                                        <button className="btn btn-primary btn-lg">
                                            Button
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.item */}
                        {/* Third slide */}
                        <div
                            className="item darkerskyblue"
                            data-ride="carousel"
                            data-interval={5000}
                        >
                            <div className="carousel-caption">
                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                    <div
                                        className="slider-contant"
                                        data-animation="animated fadeInRight"
                                    >
                                        <h3>
                                            If you Don’t Practice
                                            <br />
                                            You{" "}
                                            <span className="color-yellow">
                                                Don’t Derserve
                                            </span>
                                            <br />
                                            to win!
                                        </h3>
                                        <p>
                                            You can make a case for several
                                            potential winners of
                                            <br />
                                            the expanded European Championships.
                                        </p>
                                        <button className="btn btn-primary btn-lg">
                                            Button
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.item */}
                    </div>
                    {/* /.carousel-inner */}
                    {/* Controls */}
                    <a
                        className="left carousel-control"
                        href="#carousel-example-generic"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="glyphicon glyphicon-chevron-left"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="right carousel-control"
                        href="#carousel-example-generic"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="glyphicon glyphicon-chevron-right"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* /.carousel */}
                <div className="news">
                    <div className="container">
                        <div className="heading-slider">
                            <p className="headline">
                                <i className="fa fa-star" aria-hidden="true" />{" "}
                                Top Headlines :
                            </p>
                            {/*made by vipul mirajkar thevipulm.appspot.com*/}
                            <h1>
                                <a
                                    href=""
                                    className="typewrite"
                                    data-period={2000}
                                    data-type='[ "Contrary to popular belief, Lorem Ipsum is not simply random text.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."]'
                                >
                                    <span className="wrap" />
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

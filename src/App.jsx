import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section id="top">
                <header>
                    <div className="container">
                        <div className="header-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="full">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img
                                                    src="images/logo.png"
                                                    alt="#"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="right_top_section">
                                        {/* social icon */}
                                        <ul className="social-icons pull-left">
                                            <li>
                                                <a
                                                    className="facebook"
                                                    href="#"
                                                >
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="twitter" href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="youtube" href="#">
                                                    <i className="fa fa-youtube-play" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="pinterest"
                                                    href="#"
                                                >
                                                    <i className="fa fa-pinterest-p" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* end social icon */}
                                        {/* button section */}
                                        <ul className="login">
                                            <li className="login-modal">
                                                <a href="#" className="login">
                                                    <i className="fa fa-user" />
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <div className="cart-option">
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart" />
                                                        Register
                                                    </a>
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
                                                                Toggle
                                                                navigation
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
                                                                <a href="index.html">
                                                                    Home
                                                                </a>
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
                                                                <a href="contact.html">
                                                                    contact
                                                                </a>
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
                    <div
                        id="carousel-example-generic"
                        className="carousel slide"
                    >
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
                                                If you use this site regularly
                                                and would like to help keep the
                                                site on the Internet,
                                                <br />
                                                please consider donating a small
                                                sum to help pay..
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
                                                the expanded European
                                                Championships.
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
                                                the expanded European
                                                Championships.
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
                                    <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                    />{" "}
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
            <div className="matchs-info">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="row">
                        <div className="full">
                            <div className="matchs-vs">
                                <div className="vs-team">
                                    <div className="team-btw-match">
                                        <ul>
                                            <li>
                                                <img
                                                    src="images/img-03.png"
                                                    alt=""
                                                />
                                                <span>Footbal Team</span>
                                            </li>
                                            <li className="vs">
                                                <span>vs</span>
                                            </li>
                                            <li>
                                                <img
                                                    src="images/img-04.png"
                                                    alt=""
                                                />
                                                <span>Super Team Club</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="row">
                        <div className="full">
                            <div className="right-match-time">
                                <h2>Next Match</h2>
                                <ul id="countdown-1" className="countdown">
                                    <li>
                                        <span className="days">10 </span>Day{" "}
                                    </li>
                                    <li>
                                        <span className="hours">5 </span>
                                        Hours{" "}
                                    </li>
                                    <li>
                                        <span className="minutes">25 </span>
                                        Minutes{" "}
                                    </li>
                                    <li>
                                        <span className="seconds">10 </span>
                                        Seconds{" "}
                                    </li>
                                </ul>
                                <span>12/02/2017 /19:00pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="contant" className="contant">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-12">
                            <aside id="sidebar" className="left-bar">
                                <div className="banner-sidebar">
                                    <img
                                        className="img-responsive"
                                        src="images/img-05.jpg"
                                        alt="#"
                                    />
                                    <h3>Lorem Ipsum is simply dummy text..</h3>
                                </div>
                            </aside>
                            <h4>Match Fixture</h4>
                            <aside id="sidebar" className="left-bar">
                                <div className="feature-matchs">
                                    <div className="team-btw-match">
                                        <ul>
                                            <li>
                                                <img
                                                    src="images/img-01_002.png"
                                                    alt=""
                                                />
                                                <span>Portugal</span>
                                            </li>
                                            <li className="vs">
                                                <span>vs</span>
                                            </li>
                                            <li>
                                                <img
                                                    src="images/img-02.png"
                                                    alt=""
                                                />
                                                <span>Germany</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img
                                                    src="images/img-03_002.png"
                                                    alt=""
                                                />
                                                <span>Portugal</span>
                                            </li>
                                            <li className="vs">
                                                <span>vs</span>
                                            </li>
                                            <li>
                                                <img
                                                    src="images/img-04_003.png"
                                                    alt=""
                                                />
                                                <span>Germany</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img
                                                    src="images/img-05_002.png"
                                                    alt=""
                                                />
                                                <span>Portugal</span>
                                            </li>
                                            <li className="vs">
                                                <span>vs</span>
                                            </li>
                                            <li>
                                                <img
                                                    src="images/img-06.png"
                                                    alt=""
                                                />
                                                <span>Germany</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img
                                                    src="images/img-07_002.png"
                                                    alt=""
                                                />
                                                <span>Portugal</span>
                                            </li>
                                            <li className="vs">
                                                <span>vs</span>
                                            </li>
                                            <li>
                                                <img
                                                    src="images/img-08.png"
                                                    alt=""
                                                />
                                                <span>Germany</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img
                                                    src="images/img-05_002.png"
                                                    alt=""
                                                />
                                                <span>Portugal</span>
                                            </li>
                                            <li className="vs">
                                                <span>vs</span>
                                            </li>
                                            <li>
                                                <img
                                                    src="images/img-06.png"
                                                    alt=""
                                                />
                                                <span>Germany</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            <h4>Points Table</h4>
                            <aside id="sidebar" className="left-bar">
                                <div className="feature-matchs">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Team</th>
                                                <th>P</th>
                                                <th>W</th>
                                                <th>L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img
                                                        src="images/img-01_004.png"
                                                        alt=""
                                                    />
                                                    Liverpool
                                                </td>
                                                <td>10</td>
                                                <td>12</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <img
                                                        src="images/img-02_002.png"
                                                        alt=""
                                                    />
                                                    Chelsea
                                                </td>
                                                <td>10</td>
                                                <td>12</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <img
                                                        src="images/img-03_003.png"
                                                        alt=""
                                                    />
                                                    Norwich City
                                                </td>
                                                <td>20</td>
                                                <td>15</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    <img
                                                        src="images/img-04_002.png"
                                                        alt=""
                                                    />
                                                    West Brom
                                                </td>
                                                <td>60</td>
                                                <td>10</td>
                                                <td>60</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>
                                                    <img
                                                        src="images/img-05.png"
                                                        alt=""
                                                    />
                                                    sunderland
                                                </td>
                                                <td>30</td>
                                                <td>06</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img
                                                        src="images/img-01_004.png"
                                                        alt=""
                                                    />
                                                    Liverpool
                                                </td>
                                                <td>10</td>
                                                <td>12</td>
                                                <td>20</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </aside>
                            <div
                                className="content-widget top-story"
                                style={{
                                    background: "url(images/top-story-bg.jpg)",
                                }}
                            >
                                <div className="top-stroy-header">
                                    <h2>
                                        Top Soccer Headlines Story{" "}
                                        <a
                                            href="#"
                                            className="fa fa-fa fa-angle-right"
                                        />
                                    </h2>
                                    <span className="date">July 05, 2017</span>
                                    <h2>Other Headlines</h2>
                                </div>
                                <ul className="other-stroies">
                                    <li>
                                        <a href="#">Wenger Vardy won't start</a>
                                    </li>
                                    <li>
                                        <a href="#">Evans: Vardy just</a>
                                    </li>
                                    <li>
                                        <a href="#">Pires and Murray </a>
                                    </li>
                                    <li>
                                        <a href="#">Okazaki backing</a>
                                    </li>
                                    <li>
                                        <a href="#">Wolfsburg's Rodriguez</a>
                                    </li>
                                    <li>
                                        <a href="#">Jamie Vardy compared</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Arsenal target Mkhitaryan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Messi wins libel case.</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-8 col-xs-12">
                            <div className="news-post-holder">
                                <div className="news-post-widget">
                                    <img
                                        className="img-responsive"
                                        src="images/img-01_002.jpg"
                                        alt=""
                                    />
                                    <div className="news-post-detail">
                                        <span className="date">
                                            20 march 2016
                                        </span>
                                        <h2>
                                            <a href="blog-detail.html">
                                                At vero eos et accusamus et
                                                iusto odio dignissimos ducimus
                                            </a>
                                        </h2>
                                        <p>
                                            Just hours after that his grandma
                                            had died, Angel Di Maria imagined
                                            how she might react if he didn't
                                            play
                                        </p>
                                    </div>
                                </div>
                                <div className="news-post-widget">
                                    <img
                                        className="img-responsive"
                                        src="images/img-02_003.jpg"
                                        alt=""
                                    />
                                    <div className="news-post-detail">
                                        <span className="date">
                                            20 march 2016
                                        </span>
                                        <h2>
                                            <a href="blog-detail.html">
                                                At vero eos et accusamus et
                                                iusto odio dignissimos ducimus
                                            </a>
                                        </h2>
                                        <p>
                                            Just hours after that his grandma
                                            had died, Angel Di Maria imagined
                                            how she might react if he didn't
                                            play
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="news-post-holder">
                                <div className="news-post-widget">
                                    <img
                                        className="img-responsive"
                                        src="images/img-03_003.jpg"
                                        alt=""
                                    />
                                    <div className="news-post-detail">
                                        <span className="date">
                                            20 march 2016
                                        </span>
                                        <h2>
                                            <a href="blog-detail.html">
                                                At vero eos et accusamus et
                                                iusto odio dignissimos ducimus
                                            </a>
                                        </h2>
                                        <p>
                                            Just hours after that his grandma
                                            had died, Angel Di Maria imagined
                                            how she might react if he didn't
                                            play
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="main-heading sytle-2">
                                    <h2>Video</h2>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        <br />
                                        doloremque laudantium, totam rem aperiam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video_section_main theme-padding middle-bg vedio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="match_vedio">
                                    <img
                                        className="img-responsive"
                                        src="images/img-07.jpg"
                                        alt="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="team-holder theme-padding">
                <div className="container">
                    <div className="main-heading-holder">
                        <div className="main-heading sytle-2">
                            <h2>Meet Your Team</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium
                                <br />
                                doloremque laudantium, totam rem aperiam
                            </p>
                        </div>
                    </div>
                    <div id="team-slider">
                        <div className="container">
                            <div className="col-md-3">
                                <div className="team-column style-2">
                                    <img src="images/img-1-1.jpg" alt="" />
                                    <div className="player-name">
                                        <div className="desination-2">
                                            Defender
                                        </div>
                                        <h5>Charles Wheeler</h5>
                                        <span className="player-number">
                                            12
                                        </span>
                                    </div>
                                    <div className="overlay">
                                        <div className="team-detail-hover position-center-x">
                                            <p>
                                                Lacus vulputate torquent mollis
                                                venenatis quisque suspendisse
                                                fermentum primis,
                                            </p>
                                            <ul className="social-icons style-4 style-5">
                                                <li>
                                                    <a
                                                        className="facebook"
                                                        href="#"
                                                        tabIndex={0}
                                                    >
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="twitter"
                                                        href="#"
                                                        tabIndex={0}
                                                    >
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="youtube"
                                                        href="#"
                                                        tabIndex={0}
                                                    >
                                                        <i className="fa fa-youtube-play" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="pinterest"
                                                        href="#"
                                                        tabIndex={0}
                                                    >
                                                        <i className="fa fa-pinterest-p" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                className="btn blue-btn"
                                                href=" /soccer/team-detail.html"
                                                tabIndex={0}
                                            >
                                                View Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team-column style-2">
                                    <img src="images/img-1-2.jpg" alt="" />
                                    <div className="player-name">
                                        <div className="desination-2">
                                            Defender
                                        </div>
                                        <h5>Charles Wheeler</h5>
                                        <span className="player-number">
                                            12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team-column style-2">
                                    <img src="images/img-1-3.jpg" alt="" />
                                    <div className="player-name">
                                        <div className="desination-2">
                                            Defender
                                        </div>
                                        <h5>Charles Wheeler</h5>
                                        <span className="player-number">
                                            12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team-column style-2">
                                    <img src="images/img-1-4.jpg" alt="" />
                                    <div className="player-name">
                                        <div className="desination-2">
                                            Defender
                                        </div>
                                        <h5>Charles Wheeler</h5>
                                        <span className="player-number">
                                            12
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="full">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="#">
                                            <img
                                                src="images/footer-logo.png"
                                                alt="#"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        Most of our events have hard and easy
                                        route choices as we are always keen to
                                        encourage new riders.
                                    </p>
                                    <ul className="social-icons style-4 pull-left">
                                        <li>
                                            <a className="facebook" href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="youtube" href="#">
                                                <i className="fa fa-youtube-play" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="pinterest" href="#">
                                                <i className="fa fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="full">
                                <div className="footer-widget">
                                    <h3>Menu</h3>
                                    <ul className="footer-menu">
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="team.html">Our Team</a>
                                        </li>
                                        <li>
                                            <a href="news.html">Latest News</a>
                                        </li>
                                        <li>
                                            <a href="matche.html">
                                                Recent Matchs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Our Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="full">
                                <div className="footer-widget">
                                    <h3>Contact us</h3>
                                    <ul className="address-list">
                                        <li>
                                            <i className="fa fa-map-marker" />{" "}
                                            Lorem Ipsum is simply dummy text of
                                            the printing..
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" /> 123
                                            456 7890
                                        </li>
                                        <li>
                                            <i
                                                style={{
                                                    fontSize: 20,
                                                    top: 5,
                                                }}
                                                className="fa fa-envelope"
                                            />{" "}
                                            demo@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="full">
                                <div className="contact-footer">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120615.72236587871!2d73.07890527988283!3d19.140910987164396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1527759905404"
                                        width={600}
                                        height={350}
                                        frameBorder={0}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p>Copyright © 2018 GameInfo.All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <a href="#home" data-scroll="" className="dmtop global-radius">
                <i className="fa fa-angle-up" />
            </a>
            {/* ALL JS FILES */}
            {/* ALL PLUGINS */}
        </>
    );
}

export default App;

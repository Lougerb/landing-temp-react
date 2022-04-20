const Footer = () => {
    return (
        <div className="l-footer">
            <div className="u-layout">
                <div className="l-footer__inner">
                    <div className="l-footer__details">
                        <div className="l-footer__details__logo">
                            <a href="#">LOGO</a>
                        </div>
                        <div className="l-footer__details__contact">
                            <span className="l-footer__details__contact__text">Address:123 Street St., Village City<br/>
                            Tel: 1234-567-8901 <br />
                            Fax: 1234-456-789</span>
                        </div>
                    </div>
                    <div className="l-footer__sitemap">
                        <ul className="l-footer__sitemap__list is-col-1">
                            <li className="l-footer__sitemap__item">
                                <a href="" className="l-footer__sitemap__anchor">about</a>
                            </li>
                            <li className="l-footer__sitemap__item">
                                <a href="" className="l-footer__sitemap__anchor">product</a>
                            </li>
                            <li className="l-footer__sitemap__item">
                                <a href="" className="l-footer__sitemap__anchor">services</a>
                            </li>
                        </ul>
                        <ul className="l-footer__sitemap__list is-col-2">
                            <li className="l-footer__sitemap__item">
                                <a href="" className="l-footer__sitemap__anchor">sitemap 1</a>
                            </li>
                            <li className="l-footer__sitemap__item">
                                <a href="" className="l-footer__sitemap__anchor">sitemap 2</a>
                            </li>
                            <li className="l-footer__sitemap__item">
                                <a href="" className="l-footer__sitemap__anchor">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="l-footer__copyright">
                    <span>(c)2022 logo.com.ph</span>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;
import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/RhysClay" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/gubbigubbi" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:hello@breezeydesigns.com.au" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; b.designs</li><li>Forked: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

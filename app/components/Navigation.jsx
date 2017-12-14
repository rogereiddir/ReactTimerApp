var React = require('react');
var { Link,IndexLink } = require('react-router');


var Navigation = React.createClass({
    render:function() {
        return (
        <div className="top-bar">
            <div className="top-bar-left">
             <ul className="menu">
               <li className="menu-text">ReactTimer App</li>
               <li> <IndexLink to="/" activeClassName="active-link" >Timer</IndexLink> </li>
               <li> <Link to="/Countdown" activeClassName="active-link">Countdown</Link> </li>
             </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                  <li className="menu-text"> Created By <a href="http://google.com" target="_blank">Abdeljalil</a> </li>
                </ul>
            </div>
        </div>
          );
    }
});

module.exports = Navigation;

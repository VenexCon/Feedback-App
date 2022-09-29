import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) { //jsx, takes the declared props and returns a single object, this destructures that object

    const headerStyles = { // using a variable to allow for cleaner code, and uses the correct syntax for the style = {}
        backgroundColor: bgColor,
        color: textColor,
    }
   
  return (
    <header style={headerStyles}> {/* passes the styles to the header style prop */}
        <div className="container">
            <h2>{text}</h2> {/* ES6 destructuring */}
        </div>
    </header>
  )
}

Header.defaultProps = { // this passes default props to the header element, we need to tell the header to accept props, it then destructures that. 
    text:'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = { // ensures that only the props of the correct type are allowed, otherwise throws errors. 
    text: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

export default Header
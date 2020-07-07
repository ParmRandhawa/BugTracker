import React from 'react';

class Header extends React.Component {
    render() {
        const logo = {
            marginTop: '90px',
            marginBottom: '20px'
        }

        return (
            <React.Fragment>
                <img
                    style={logo} 
                    src={require('../assets/software-bug.png')} width='100' height='100'
                    alt='software_logo' 
                />
                <br />
            </React.Fragment>
        );
    }
}

export default Header;
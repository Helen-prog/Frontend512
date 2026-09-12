import React from "react";

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let {copyright} = this.props;

        return (
            <footer style={{background: "lightblue", padding: 10, fontWeight: "bold"}}>
                <p>{copyright}</p>
            </footer>
        )
    }
}

export default Footer;
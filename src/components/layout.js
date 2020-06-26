import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import "../assets/scss/main.scss";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
      this.footerRef = React.createRef();
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children, msbRef, academiaRef, senalesRef, inversoresRef, testimoniosRef } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                <Header
                  msbRef={msbRef}
                  academiaRef={academiaRef}
                  senalesRef={senalesRef}
                  inversoresRef={inversoresRef}
                  testimoniosRef={testimoniosRef}
                  contactoRef={this.footerRef}
                />
                {children}
                <Footer ref={this.footerRef} />
            </div>
        );
    }
}

export default Template;

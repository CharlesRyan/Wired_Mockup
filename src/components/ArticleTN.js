import React, { Component } from "react";

class ArticleTN extends Component {
    handleClick = () => {
      this.props.onClick(this.props.id);
    };

    render() {
        return (
          <div>
            <div className="popular" onClick={this.handleClick}>
                <img src={this.props.tnPicPath} />

                <div className="popText">
                    <div className="tnAuthorCat">
                        <p>{this.props.category}</p>
                    </div>
                    <div className="tnTitle">
                        <p>{this.props.title}</p>
                    </div>
                    <div className="tnAuthorCat">
                        <p>{this.props.author}</p>
                    </div>
                </div>
              </div>
              <div className="popLine"></div>
            </div>
        );
    }
}


export default ArticleTN;

import React, { Component } from "react";

class ArticlePreview extends Component {
    handleClick = () => {
      this.props.onClick(this.props.id);
    };

    render() {
        return (
        <div className={this.props.pAppearance}
                onClick={this.handleClick}>
            <img src={this.props.pPicPath} />
            <div className="previewText">
                <div className="titleFont tnCategory">
                    <p>{this.props.category}</p>
                </div>
                <div className="previewTitle">
                    <p>{this.props.title}</p>
                </div>
                <div className="titleFont">
                    <p>{this.props.author}</p>
                </div>
            </div>
		</div>
        );
    }
}





export default ArticlePreview;

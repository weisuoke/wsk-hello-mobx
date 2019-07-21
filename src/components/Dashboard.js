import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("ReviewStore")
@observer
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardSection">
        <div className="row">
          <div className="col-md-6 col-xs-6">
            <div className="card text-white bg-primary mb-6">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <i className="fa fa-comments fa-5x" />
                  </div>
                  <div className="col-md-6 col-sm-6 text-right">
                    <p id="reviewCount">{this.props.ReviewStore.reviewCount}</p>
                    <p className="announcement-text">Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xs-6">
            <div className="card text-white bg-success mb-6">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <i className="fa fa-star fa-5x" />
                  </div>
                  <div className="col-md-6 col-sm-6 text-right">
                    <p id="reviewCount">
                      {this.props.ReviewStore.averageScore}
                    </p>
                    <p className="announcement-text">Average Scores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

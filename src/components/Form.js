import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("ReviewStore")
@observer
class Form extends Component {
  submitReview = e => {
    e.preventDefault();

    const review = this.review.value;
    const stars = Number(this.stars.value);
    this.props.ReviewStore.addReview({ review, stars });
  };
  render() {
    return (
      <div>
        <div className="formSection">
          <div className="form-group">
            <p>Submit a Review</p>
          </div>
          <form onSubmit={this.submitReview}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Write a review"
                    className="form-control"
                    ref={node => {
                      this.review = node;
                    }}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <select
                    id="start"
                    name="start"
                    ref={node => {
                      this.stars = node;
                    }}
                    className="form-control"
                  >
                    <option value="1">1 star</option>
                    <option value="2">2 star</option>
                    <option value="3">3 star</option>
                    <option value="4">4 star</option>
                    <option value="5">5 star</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    SUBMIT REVIEW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;

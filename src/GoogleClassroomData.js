import React from 'react';
import axios from 'axios';

var GoogleClassroomData = React.createClass({

  getInitialState: function() {
    return {
      items: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest =
      axios
        .get('http://ip.jsontest.com/')
        .then(function(result) {
          _this.setState({
            items: result.data
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.items}
      </div>
    )
  }
});

export default GoogleClassroomData;

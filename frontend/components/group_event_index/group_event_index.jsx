import React from 'react';
import GroupEventIndexItem from './group_event_index_item';

class GroupEventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroupEvents(this.props.match.params.groupId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchGroupEvents(nextProps.match.params.groupId);
  }

  render() {
    return (
      <div className='event-index-container'>
        <div className='event-INDEX'>

          <ul>
            {
              this.props.events.map(event => (
                <GroupEventIndexItem
                  key={event.id}
                  event={event} />
              ))
            }
          </ul>

        </div>
      </div>
    );
  }

}

export default GroupEventIndex;

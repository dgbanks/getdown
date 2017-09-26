import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
);

export const fetchUserEvents = (userId) => dispatch => (
  EventApiUtil.fetchUserEvents(userId).then(events => dispatch(receiveEvents(events)))
);

export const fetchGroupEvents = groupId => dispatch => (
  EventApiUtil.fetchGroupEvents(groupId).then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = id => dispatch => (
  EventApiUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
);

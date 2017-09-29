import * as EventApiUtil from '../util/event_api_util';
import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_GROUP = "RECEIVE_GROUP";

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const removeEvent = event => ({
  type: REMOVE_EVENT,
  event
});

// USER

export const joinEvent = eventId => dispatch => (
  UserApiUtil.joinEvent(eventId).then(event => dispatch(receiveEvent(event)))
);

/// INDEX AND SHOW THUNKS

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

/// FORM THUNKS

export const createEvent = (groupId, event) => dispatch => (
  EventApiUtil.createEvent(groupId, event).then(event => dispatch(receiveEvent(event)))
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event).then(event => dispatch(receiveEvent(event)))
);

export const deleteEvent = id => dispatch => (
  EventApiUtil.deleteEvent(id).then(event => dispatch(removeEvent(event)))
);

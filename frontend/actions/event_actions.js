import * as EventApiUtil from '../util/event_api_util';
import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

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

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

// USER

export const joinEvent = eventId => dispatch => (
  UserApiUtil.joinEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
);

/// INDEX AND SHOW THUNKS

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
);

export const fetchUserEvents = (userId) => dispatch => (
  EventApiUtil.fetchUserEvents(userId)
    .then(events => dispatch(receiveEvents(events)))
);

export const fetchGroupEvents = groupId => dispatch => (
  EventApiUtil.fetchGroupEvents(groupId)
    .then(events => dispatch(receiveEvents(events)))
);

export const fetchCategoryEvents = categoryId => dispatch => (
  EventApiUtil.fetchCategoryEvents(categoryId)
    .then(events => dispatch(receiveEvents(events)))
);



export const fetchEvent = id => dispatch => (
  EventApiUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event)))
);

/// FORM THUNKS

export const createEvent = (groupId, event) => dispatch => (
  EventApiUtil.createEvent(groupId, event)
    .then(newEvent => dispatch(receiveEvent(newEvent))),
    errors => (dispatch(receiveEventErrors(errors.responseJSON)))
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event)
    .then(newEvent => dispatch(receiveEvent(newEvent)))
);

export const deleteEvent = id => dispatch => (
  EventApiUtil.deleteEvent(id)
    .then(event => dispatch(removeEvent(event)))
);

json.extract! user, :id, :email, :name

# json.role(entity) entity.is_a?(Group) && (return 'Organizer' if Group.organizer == user || return 'Member' if Group.members.include?(user)) || entity.is_a?(Event) && (return 'Organizer' if Event.organizer == user || return 'Member' if Event.attendees.include?(user)) || nil

# json.isMember(group) user.groups.


# json.isAssociatedWith(entity) entity.is_a?(Category) && Category.subscribers.include

## user view needs to take in the 'groups' method???

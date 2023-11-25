# 100x-schema

# Models
    - User
    - Post
    - Following
    - Like
    - Reply

# User (table name: users)
    - username -- string
    - email -- string
    - display_name -- string
    - bio -- text

# Post (table name: posts)
    - content -- text
    - posted_at -- timestamp
    - user_id -- bigint foreign key

# Following (table name: followings)
	- id -- bigint serial primary key
	- follower_id -- bigint foreign key
	- followee_id -- bigint foreign key
	- followed_at -- timestamp
	- follower_id, followee_id combination should be unique
	- value of follower_id, followee_id should not be same
'followings' table represents the following relationship between users. To prevent self-following, follower_id and followee_id should not be same. follower_id represents the user following another user and followee_id represents user who is followed by another user. This helps in maintaining the uniqueness of follow relationship. Also to prevent multiple entries of same follow relationship, combination of followee_id and follower_id should be unique

# Like (table name: likes)
	- id -- bigint serial primary key
	- user_id -- bigint foreign key
	- post_id -- bigint foreign key
	- liked_at -- timestamp
	- user_id, post_id combination should be unique
'likes' table represents the action of liking a post. Unique combination of post_id and user_id ensures that if a user likes a post then its multiple entries are not captured in table.

# Reply (table name: replies)
	- id -- bigint serial primary key
	- user_id -- bigint foreign key
	- post_id -- bigint foreign key
	- content -- text not-null
	- replied_at -- timestamp
'replies' table represents replies to a post. Every reply must have some content, it cannot be empty. And every reply should have a user and a post associated with it

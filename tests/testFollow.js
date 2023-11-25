const { Following } = require('../models');

async function createFollowingRecords() {
    await Following.create({
        follower_id: 3,
        followee_id: 2,
        followed_at: new Date()
    })
}

async function testForNoSelfFollowing() {
    await Following.create({
        follower_id: 2,
        followee_id: 2,
        followed_at: new Date()
    })
}

// Running this function again throws error showing that same follow relation is not repeated
createFollowingRecords();

// This function throwing error show that self following is disabled
testForNoSelfFollowing();
const { Like } = require('../models')

async function createLikeRecords() {
    await Like.create({
        user_id: 2,
        post_id: 3,
        liked_at: new Date()
    })
}

// This function throws error when same user_id and post_id combination is used to record a like showing that same user cannot like a post more than once
createLikeRecords();
const {Reply} = require('../models')

async function createReplyRecords() {
    await Reply.create({
        user_id: 2,
        post_id: 3,
        content: null,
        replied_at: new Date()
    })
}

// This function throws error when content is empty, only white spaces or null
createReplyRecords();
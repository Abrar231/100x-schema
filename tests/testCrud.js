const {User, Post, Following, Like, Reply} = require('../models')

async function createRecords() {
    const user = await User.create({
        username: "User 3",
        email: "user3@email.com",
        display_name: "user 3",
        bio: "This is User 3"
    });

    await Post.create({
        content: "User 3: First post",
        user_id: user.id,
        posted_at: new Date()
    });
}

async function fetchRecords() {
    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));

    const posts = await Post.findAll();
    console.log(JSON.stringify(posts, null, 2));
}

async function updateRecords() {
    await User.update({bio: "My updated bio"}, {
        where: {
            id: 1
        }
    })
}

async function deleteRecords() {
    await Post.destroy({
        where: {
            id: 2
        }
    })
}

// createRecords();

// fetchRecords();

// updateRecords();

// deleteRecords();
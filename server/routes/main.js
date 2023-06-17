const express= require('express');
const router = express.Router();
const Post = require('../models/Post');


// GET // HOME
router.get('', async (req, res) => {
    
    try {

        const locals = {
            title: "NodeJS Blog",
            description: "Simple Blog created with NodeJS, Express & MongoDb."
        }

        let perPage = 10;
        let page = req.query.page || 1;

        const data = await Post.aggregate( [ {$sort: { createdAt: -1 } } ] )
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

        const count = await Post.count();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        
        res.render('index', { 
            locals,
             data,
             current: page, 
             nextPage: hasNextPage ? nextPage : null 
        });

    } catch (error) {
        console.log(error);
    }

});











router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;





// function insertPostData () {
//     Post.insertMany([
//         {
//             title: "Building a Blog 5",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 6",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 7",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 8",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 9",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 10",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 11",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 12",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 13",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 14",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 15",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 16",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 17",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 18",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 19",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 20",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 21",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 22",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 23",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 24",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 25",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 26",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 27",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 28",
//             body: "This is the body text 3"
//         },
//         {
//             title: "Building a Blog 29",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog 30",
//             body: "This is the body text 2"
//         },
//         {
//             title: "Building a Blog 31",
//             body: "This is the body text 3"
//         },
//     ])
// }
// insertPostData();
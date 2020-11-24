const PATH = './data.json';
const fs = require('fs');



class posts{
    get(){
        /* get the posts */
        return this.readData();

    }

    getIndividualBolg(postid){
        //get the individual blog
        const posts = this.readData();
        const foundPost = posts.find((post)=>post.id == postid);
        return foundPost;
    }

    add(newPost){
        //add new post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawdata){
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }


}

module.exports = posts;
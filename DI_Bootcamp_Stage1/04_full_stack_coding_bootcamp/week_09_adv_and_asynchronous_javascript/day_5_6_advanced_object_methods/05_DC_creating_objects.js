class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const videosData = [
    ["JavaScript Basics", "Anna", 300],
    ["HTML & CSS Crash Course", "Emma", 540],
    ["Python Intro", "Lucas", 420],
    ["Node.js Deep Dive", "Mia", 600],
    ["React Essentials", "Noah", 480]
];

const videoList = [];

for (let i = 0; i < videosData.length; i++) {
    const title = videosData[i][0];
    const uploader = videosData[i][1];
    const time = videosData[i][2];

    const video = new Video(title, uploader, time);
    videoList.push(video);
}

for (let i = 0; i < videoList.length; i++) {
    videoList[i].watch();
}
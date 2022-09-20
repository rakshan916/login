class MusicVideo
{
watch()
{

}

rockOut()
{
    console.log("You rocked out to La Bamba by Ritchie Valens!.");
}
} 


class Video extends MusicVideo
{
    constructor(artist)
{
   this.artist=artist; 
}
} 


for(let a=1; a<=5;a++)
{
let objMusicVideo = new MusicVideo();
objMusicVideo.watch();
objMusicVideo.rockOut();
}


/*for(let a=1; a<=5;a++)
    {

let objVideo=new video();
console.log("This is video");

    }

for(let a=1; a<=5;a++)
{
    let objMusicVideo = new MusicVideo();
    console.log("This is MusicVideo");

    
}


*/
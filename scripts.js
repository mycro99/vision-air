
document.addEventListener('DOMContentLoaded', ()=>{
    const gallery = document.querySelector('.gallery');
    
    // Array for video links (example link, ensure it is a valid public video link)
    const videos = [
        'https://www.facebook.com/visionair2022/videos/'
    ];
    
    videos.forEach(src=>{
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.width = "300";
        iframe.height = "200";
        iframe.allow = "autoplay; encrypted-media";
        iframe.style.margin = "10px";
        gallery.appendChild(iframe);
    });
    
    // Array for wedding and event images (using Unsplash placeholder images)
    const images = [
        'https://source.unsplash.com/300x200/?wedding',
        'https://source.unsplash.com/300x200/?event',
        'https://source.unsplash.com/300x200/?bridal',
        'https://source.unsplash.com/300x200/?celebration'
    ];
    
    images.forEach(src=>{
        const img = document.createElement('img');
        img.src = src;
        img.width = 300;
        img.height = 200;
        img.style.margin = "10px";
        gallery.appendChild(img);
    });
});

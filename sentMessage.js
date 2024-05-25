// document.getElementById('shareButton').addEventListener('click', function() {
//     const appId = '437897333028638';
//     const link = encodeURIComponent('https://shopee.ph/treewateritn.ph/22472336897');
//     const redirectUri = encodeURIComponent('https://shopee.ph/rn-25cm-Game-Genshin-Black-Cat-Fluffy-Impact-Wanderer-Pet-Plush-Toys-Scaramouche-Cat-Cosplay-Doll-Soft-Stuffed-Pillow-Gift-For-Kids-ritn-i.348256409.22472336897#close');
    
//     const url = `https://www.facebook.com/v15.0/dialog/send?app_id=${appId}&display=popup&link=${link}&redirect_uri=${redirectUri}`;

//     window.open(url, 'fbShareWindow', 'height=450,width=550,top=100,left=100,resizable=yes,scrollbars=yes');
// });

// document.getElementById('shareButton').addEventListener('click', function() {
//     const appId = '437897333028638';
//     const link = encodeURIComponent('https://www.facebook.com/UTKManila/posts/pfbid09fQ3oNRZZgRfzoPsRZim17sa8dRe6hbJBnspTV6g6heeFacRAxGygKgVpn9FXYd1l');
//     const redirectUri = encodeURIComponent('https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUTKManila%2Fposts%2Fpfbid09fQ3oNRZZgRfzoPsRZim17sa8dRe6hbJBnspTV6g6heeFacRAxGygKgVpn9FXYd1l&show_text=true&width=500&is_preview=true');

//     const url = `https://www.facebook.com/v15.0/dialog/send?app_id=${appId}&display=popup&link=${link}&redirect_uri=${redirectUri}`;

//     window.open(url, 'fbShareWindow', 'height=450,width=550,top=100,left=100,resizable=yes,scrollbars=yes');
// });


document.getElementById('shareButton').addEventListener('click', function() {
    const pageId = 'UTKManila';
    const message = encodeURIComponent('Check out this post: https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUTKManila%2Fposts%2Fpfbid09fQ3oNRZZgRfzoPsRZim17sa8dRe6hbJBnspTV6g6heeFacRAxGygKgVpn9FXYd1l&show_text=true&width=500&is_preview=true');
    
    const url = `https://www.facebook.com/messages/t/${pageId}?message=${message}`;

    window.open(url, 'fbMessageWindow', 'height=450,width=550,top=100,left=100,resizable=yes,scrollbars=yes');
});

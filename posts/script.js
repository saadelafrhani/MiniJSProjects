$(document).ready(function () {
    const posts = $('#posts div');
    const container = $('#container');
    const quiEstEsse = $('#qui-est-esse');
    const loadCommentsButton = $('#load-comments');
    const comments = $('#comments');

    const postDetails = [
        { 'id': 1, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 2, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 3, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 4, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 5, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 6, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 7, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 8, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 9, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' },
        { 'id': 10, 'title': 'Detail for Sunt Aut Facere Repellat Provident', 'body': 'gjghjgjgjgjh' }
    ];

    const commentsText = 'This is a comment for the post.';

    posts.each(function (index) {
        $(this).on('click', function () {
            quiEstEsse.css('display', 'block');
            quiEstEsse.find('p').text(postDetails[postDetails.titel]);
            comments.css('display', 'none');


            container.css({
                'width': '100vw',
                'height': '100vh'
            });
            posts.css('flex', '1');
            quiEstEsse.css('flex', '1');
        });
    });

    loadCommentsButton.on('click', function () {
        comments.css('display', 'block');
        comments.find('p').text(commentsText);


        container.css({
            'width': '100vw',
            'height': '100vh'
        });
        posts.css('flex', '1');
        quiEstEsse.css('flex', '1');
        comments.css('flex', '1');
    });
});
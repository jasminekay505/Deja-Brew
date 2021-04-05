const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text && post_id) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/comments/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.reload();
//         } else {
//             alert('Failed to delete comment');
//         }
//     }
// };

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentHandler);

// document
//     .querySelector('.comment-list')
//     .addEventListener('click', delButtonHandler);

const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#brewery-name').value.trim();
    const location = document.querySelector('#brewery-location').value.trim();
    const post_text = document.querySelector('#brewery-desc').value.trim();

    if (title && location && post_text) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, location, post_text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

const delButtonHandler = async (event) => {
    const id = event.target.getAttribute('delete-data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }

};

document
    .querySelector('.new-brewery-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('#delete-button')
    .addEventListener('click', delButtonHandler);

const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#brewery-name').value.trim();
    const post_text = document.querySelector('#brewery-desc').value.trim();
  
    if (title && post_text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post_text }),
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
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-brewery-form')
    .addEventListener('submit', newPostHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
  
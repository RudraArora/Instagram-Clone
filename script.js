document.getElementById('add-photo-button').addEventListener('click', () => {
    const fileInput = document.getElementById('photo-input');
    fileInput.click();
  });
  
  document.getElementById('photo-input').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const caption = prompt('Enter a caption for the photo:');
  
    if (!file || !caption) {
      alert('Please select a photo and enter a caption.');
      return;
    }
  
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('caption', caption);
  
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      const newPost = await response.json();
      displayPost(newPost);
    } else {
      alert('Error uploading photo.');
    }
  });
  
  // Function to load and display photos
  async function loadPhotos() {
    try {
      const response = await fetch('http://localhost:5000/photos');
      const photos = await response.json();
      const gallery = document.getElementById('photo-gallery');
      gallery.innerHTML = ''; // Clear existing images
      photos.forEach(photo => {
        displayPost(photo);
      });
    } catch (error) {
      console.error('Error loading photos:', error);
    }
  }
  
  // Function to display a single post
  function displayPost(post) {
    const gallery = document.getElementById('photo-gallery');
    const postBox = document.createElement('div');
    postBox.className = 'post-box';
  
    postBox.innerHTML = `
      <img src="http://localhost:5000/uploads/${post.filename}" alt="post" />
      <div class="post-info">
        <div class="post-profile">
          <h3>${post.caption}</h3>
        </div>
        <div class="likes">
          <i class="ri-heart-line"></i>
          <span>${post.likes} Likes</span>
          <i class="ri-chat-3-line"></i>
          <span>${post.comments.length} Comments</span>
        </div>
      </div>
    `;
    
    gallery.appendChild(postBox);
  }
  

  
  // Load photos on page load
  window.onload = loadPhotos;
  
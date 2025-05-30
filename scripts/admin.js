// scripts/admin.js
document.getElementById('upload-btn').addEventListener('click', () => {
  const file = document.getElementById('photo').files[0];
  const caption = document.getElementById('caption').value;
  const statusEl = document.getElementById('status');

  if (!file) {
    statusEl.textContent = 'Please select a photo.';
    return;
  }

  const storageRef = storage.ref('photos/' + file.name);
  storageRef.put(file).then(snapshot => {
    return snapshot.ref.getDownloadURL();
  }).then(url => {
    return db.collection("photos").add({ url, caption });
  }).then(() => {
    statusEl.textContent = 'Photo uploaded successfully!';
  }).catch(err => {
    statusEl.textContent = 'Upload failed: ' + err.message;
  });
});

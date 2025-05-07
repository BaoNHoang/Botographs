function uploadPhoto() {
    const file = document.getElementById("photo").files[0];
    const caption = document.getElementById("caption").value;

    if (!file) {
        alert("Please select a file.");
        return;
    }

    // Create a FormData object for the file
    const formData = new FormData();
    formData.append("file", file);

    // Convert the file to a base64 string
    const reader = new FileReader();
    reader.onloadend = function () {
        const base64File = reader.result.split(',')[1]; // Remove the data URL prefix

        // Prepare the GitHub API request
        const repo = "BaoNHoang/Botographs.github.io"; // Replace with your GitHub repository
        const filePath = `photos/${file.name}`; // Path in the repository where the image will be stored
        const commitMessage = `Add photo ${file.name}`;
        const content = base64File; // Base64 encoded file content
        const token = "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"; // Replace with your GitHub Personal Access Token

        fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
            method: "PUT",
            headers: {
                "Authorization": `token ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: commitMessage,
                content: content,
                branch: "main", // You can replace 'main' with your default branch name
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.content && data.content.sha) {
                // Image successfully uploaded, now save the photo URL in Firestore
                const imageUrl = `https://raw.githubusercontent.com/${repo}/main/${filePath}`;

                // Add photo URL and caption to Firestore
                db.collection("photos").add({
                    url: imageUrl,
                    caption: caption
                })
                .then(() => {
                    alert("Photo uploaded successfully!");
                })
                .catch(error => alert("Error uploading photo to Firestore"));
            } else {
                alert("Error uploading image to GitHub");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error uploading image to GitHub");
        });
    };

    reader.readAsDataURL(file); // Convert file to base64
}

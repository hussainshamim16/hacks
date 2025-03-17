import { db, doc, getDoc } from "../js/firebase.js";

document.addEventListener("DOMContentLoaded", async () => {
    function getBlogIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    const blogId = getBlogIdFromURL();

    if (blogId) {
        try {
            const docRef = doc(db, "post", blogId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const blogData = docSnap.data();
                displayBlogDetails(blogData);
            } else {
                alert("No blog found!");
            }
        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    } else {
        alert("No blog ID found in URL.");
    }
});

function displayBlogDetails(blog) {
    const blogContainer = document.getElementById('blog-one-container');
    const blognameintitle = document.getElementById('blognameintitle');
    blognameintitle.innerHTML = blog.title;
    blogContainer.innerHTML = `
        <div class="col-lg-4 col-md-6 wit">
            <div class="property-item rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img class="img-fluid" src="${blog.postImage}" alt="${blog.title}">
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        ${blog.category}
                    </div>
                </div>
                <div class="p-4 pb-0">
                    <h4>${blog.title}</h4>
                    <p>${blog.description}</p>
                </div>
            </div>
        </div>
    `;
}
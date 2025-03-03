function changeContent(page) {
    let content = document.getElementById("dynamic-content");
    let pages = {
        home: `
            <div>
                <h2>Welcome to Lendly</h2>
                <p>This is the home page where you can browse items available for lending.</p>
                <img src="/assets/images/home-banner.jpg" class="img-fluid" alt="Home Banner">
            </div>
        `,
        register: `
            <div>
                <h2>Register</h2>
                <p>Fill in your details to register.</p>
                <form>
                    <label>Name:</label>
                    <input type="text" class="form-control">
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        `,
        feed: `
            <div>
                <h2>Feed</h2>
                <p>Check out the latest updates.</p>
                <ul>
                    <li>New camera available for rent</li>
                    <li>Gaming laptop added to the inventory</li>
                </ul>
            </div>
        `,
        helpcenter: `
            <div>
                <h2>Help Center</h2>
                <p>How can we assist you?</p>
                <button class="btn btn-info">Contact Support</button>
            </div>
        `
    };

    content.innerHTML = pages[page] || "<p>Page not found.</p>";

    // Highlight Active Link
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`[onclick="changeContent('${page}')"]`).classList.add('active');
}

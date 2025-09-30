<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Faith in Christ</title>
  <style>
    /* GLOBAL STYLES */
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      background: #f7f9fc;
      color: #333;
    }

    h1, h2, h3 {
      font-family: 'Trebuchet MS', sans-serif;
      color: #2c3e50;
    }

    a {
      color: #4a90e2;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }

    /* HEADER */
    header {
      background: linear-gradient(135deg, #4a90e2, #005bea);
      color: white;
      padding: 2.5rem 1rem;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2.8rem;
    }
    header p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    /* NAVIGATION */
    nav {
      background: #2c3e50;
      padding: 0.8rem;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 1rem;
      font-weight: bold;
    }
    nav a:hover {
      color: #4a90e2;
    }

    /* SECTIONS */
    section {
      padding: 3rem 1rem;
      max-width: 1000px;
      margin: auto;
    }
    section h2 {
      text-align: center;
      margin-bottom: 1rem;
      color: #4a90e2;
    }
    section p {
      text-align: center;
      font-size: 1.1rem;
      color: #444;
    }

    /* PROJECTS GRID */
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .projects div {
      background: white;
      padding: 1rem;
      border-radius: 12px;
      box-shadow: 0 5px 12px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s;
    }
    .projects div:hover {
      transform: translateY(-6px);
    }
    .projects img {
      width: 100%;
      max-width: 300px;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    /* COMING SOON */
    #coming-soon {
      text-align: center;
      padding: 4rem 1rem;
      background: linear-gradient(135deg, #f0f4ff, #dfe9f3);
      border-top: 4px solid #4a90e2;
      margin-top: 3rem;
    }
    #coming-soon h2 {
      font-size: 2.2rem;
      color: #4a90e2;
      margin-bottom: 1rem;
    }
    .coming-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
      margin: 2.5rem 0;
    }
    .coming-item {
      background: #fff;
      padding: 1rem;
      border-radius: 14px;
      box-shadow: 0 6px 14px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .coming-item:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 18px rgba(0,0,0,0.15);
    }
    .coming-item img {
      width: 100%;
      max-width: 250px;
      border-radius: 10px;
      margin-bottom: 1rem;
    }
    .coming-item h3 {
      margin: 0.5rem 0;
      color: #333;
    }
    .subscribe {
      margin-top: 2rem;
    }
    .subscribe input {
      padding: 0.7rem;
      width: 260px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    .subscribe button {
      padding: 0.7rem 1.4rem;
      background: #4a90e2;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s, transform 0.2s;
    }
    .subscribe button:hover {
      background: #005bea;
      transform: scale(1.05);
    }

    /* FOOTER */
    footer {
      background: #2c3e50;
      color: white;
      text-align: center;
      padding: 1.5rem;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <!-- HEADER -->
  <header>
    <h1>Faith in Christ</h1>
    <p>Living for Jesus • Guided by the Spirit • Seeking the Kingdom</p>
  </header>

  <!-- NAVIGATION -->
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#coming-soon">Merch</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- ABOUT -->
  <section id="about">
    <h2>About</h2>
    <p>Our mission is to call people to repentance — to turn from sin and addiction, 
       and to find freedom through Jesus Christ. By following Him, reading the Bible, 
       quoting Scripture, and giving thanks to God the Father, we live daily with 
       the Holy Spirit. We believe in fasting as an act of worship, seeking the 
       Kingdom of Heaven, and setting our minds on things above.</p>
  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <h2>Projects</h2>
    <div class="projects">
      <div>
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400" alt="Cross on a hill">
        <p><strong>Project 1:</strong> Sharing the message of the Cross.</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=400" alt="Open Bible">
        <p><strong>Project 2:</strong> Encouraging Bible reading and study.</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1525596662741-04e6bdf1b35c?w=400" alt="Praying hands">
        <p><strong>Project 3:</strong> Living a life of prayer and worship.</p>
      </div>
    </div>
  </section>

  <!-- COMING SOON MERCH -->
  <section id="coming-soon">
    <h2>Faith Apparel – Coming Soon</h2>
    <p>We’re preparing a collection of faith-inspired merchandise to spread the message of Jesus through what we wear and carry. Stay tuned!</p>
    
    <div class="coming-grid">
      <div class="coming-item">
        <img src="https://images.unsplash.com/photo-1593032465171-8e88b0033a3a?w=400" alt="Christian Hat">
        <h3>Faith Hat</h3>
        <p>Coming Soon</p>
      </div>
      <div class="coming-item">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" alt="Christian T-Shirt">
        <h3>Faith T-Shirt</h3>
        <p>Coming Soon</p>
      </div>
      <div class="coming-item">
        <img src="https://images.unsplash.com/photo-1602143407151-711b6fbb3e6f?w=400" alt="Water Bottle">
        <h3>Faith Water Bottle</h3>
        <p>Coming Soon</p>
      </div>
      <div class="coming-item">
        <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400" alt="Backpack">
        <h3>Faith Backpack</h3>
        <p>Coming Soon</p>
      </div>
    </div>

    <form class="subscribe">
      <label for="email">Get notified when we launch:</label><br>
      <input type="email" id="email" placeholder="Enter your email" required>
      <button type="submit">Notify Me</button>
    </form>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <h2>Contact</h2>
    <p>Have questions or want to connect?<br>Email us at <a href="mailto:faith@example.com">faith@example.com</a></p>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2025 Faith in Christ. All rights reserved.</p>
  </footer>
</body>
</html>

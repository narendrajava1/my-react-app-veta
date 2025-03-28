import React from 'react'
import './css/About.css'
import milkImage from '../assets/images/milkDairyImage.jpg'

export const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to Our Milk Dairy</h1>
        <p>
          Your trusted source for fresh, high-quality milk and dairy products!
        </p>
      </header>
      <section className="about-info">
        <h2>About Us</h2>
        <p>
          At **Farm Fresh Dairy**, we believe in delivering the freshest and
          most nutritious milk directly from our farm to your doorstep. With
          decades of experience in dairy farming, we ensure the highest
          standards of quality and hygiene, all while promoting sustainable
          farming practices.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to provide families with healthy and pure milk, as well
          as a variety of other dairy products including butter, cheese, and
          yogurt. We are committed to ensuring the well-being of our cows, the
          quality of our products, and the satisfaction of our customers.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>
            <strong>Fresh Milk</strong> - Daily deliveries of fresh, pure milk.
          </li>
          <li>
            <strong>Butter</strong> - Fresh, creamy butter made from the finest
            milk.
          </li>
          <li>
            <strong>Cheese</strong> - A variety of cheeses including cheddar,
            mozzarella, and more!
          </li>
          <li>
            <strong>Yogurt</strong> - Thick, creamy yogurt made from our
            farm-fresh milk.
          </li>
          <li>
            <strong>Milk Products</strong> - We offer various dairy products,
            including ghee, paneer, and ice cream.
          </li>
        </ul>
        <img src={milkImage} alt="Farm Fresh Dairy" className="about-image" />
      </section>

      <section className="contact-info">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or would like to learn more about our dairy
          farm and products, feel free to reach out!
        </p>
        <p>
          Email us:{' '}
          <a href="mailto:info@vetafarmfreshdairy.com">
            info@vetafarmfreshdairy.com
          </a>
        </p>
        <p>Call us: +123 456 7890</p>
      </section>

      <footer className="about-footer">
        <p>© 2025 Farm Fresh Dairy. All rights reserved.</p>
      </footer>
    </div>
  )
}

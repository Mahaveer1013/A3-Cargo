// components/Footer.js
import Link from "next/link";
export default function Footer() {
    return (
      <div className="footer-container">
        <div className="footer-heading">
          <h1>220+ Digital Platforms</h1>
        </div>
  
        <div className="footer-platforms">
          <img src="https://via.placeholder.com/100x40?text=instamojo" alt="Instamojo" />
          <img src="https://via.placeholder.com/100x40?text=Magento" alt="Magento" />
          <img src="https://via.placeholder.com/100x40?text=opencart" alt="Opencart" />
          <img src="https://via.placeholder.com/100x40?text=BigCommerce" alt="BigCommerce" />
          <img src="https://via.placeholder.com/100x40?text=Shopify" alt="Shopify" />
          <img src="https://via.placeholder.com/100x40?text=WooCommerce" alt="WooCommerce" />
          <img src="https://via.placeholder.com/100x40?text=Zoho" alt="Zoho" />
          <img src="https://via.placeholder.com/100x40?text=Razorpay" alt="Razorpay" />
          <img src="https://via.placeholder.com/100x40?text=EASYECOM" alt="EASYECOM" />
          <img src="https://via.placeholder.com/100x40?text=BIKAYI" alt="BIKAYI" />
          {/* <img src="https://via.placeholder.com/100x40?text=StoreHippo" alt="StoreHippo" />
          <img src="https://via.placeholder.com/100x40?text=PrestaShop" alt="PrestaShop" />
          <img src="https://via.placeholder.com/100x40?text=WIX" alt="WIX" />
          <img src="https://via.placeholder.com/100x40?text=Etsy" alt="Etsy" />
          <img src="https://via.placeholder.com/100x40?text=Amazon" alt="Amazon" />
          <img src="https://via.placeholder.com/100x40?text=Indiamart" alt="Indiamart" /> */}
        </div>
  
        <div className="footer-banner">
          <div className="footer-banner-text">
            <h1>Ship Delightful Experiences With Shiprocket</h1>
            <Link href="/about"><button>Get in touch</button></Link>
              
          </div>
          <img src="happyCustomer.png" alt="Happy User" />
        </div>
  
        <style jsx>{`
          .footer-container {
            padding: 20px;
            text-align: center;
            background-color: #f8f9fa;
            color: #333;
          }
  
          .footer-heading {
            font-size: 2rem;
            margin-bottom: 20px;
          }
  
          .footer-platforms {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
          }
  
          .footer-platforms img {
            margin: 10px;
            height: 40px;
          }
  
          .footer-banner {
            background: linear-gradient(135deg, #98a0fc, #f4e3ff);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 25px 12px;
            text-align: left;
          }
  
          .footer-banner-text {
            max-width: 600px;
          }
  
          .footer-banner-text h1 {
            color: #3f3d56;
            font-size: 2.4rem;
            margin-bottom: 50px;
          }
  
          .footer-banner-text button {
            background-color: #6b50ff;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
          }
  
          .footer-banner-text button:hover {
            background-color: #5741c9;
          }
  
          .footer-banner img {
            height: 300px;
          }
        `}</style>
      </div>
    );
  }
  
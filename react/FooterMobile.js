import React, { useState } from 'react';

const FooterMobile = ({ shopLinks, aboutLinks, helpLinks }) => {
  const [showShopLinks, setShowShopLinks] = useState(false);
  const [showAboutLinks, setShowAboutLinks] = useState(false);
  const [showHelpLinks, setShowHelpLinks] = useState(false);

  const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };

  const footerColumnStyle = {
    marginRight: '50px',
    display: 'flex',
    flexDirection: 'column',
  };

  const listItemStyle = {
    listStyle: 'none',
    marginBottom: '10px',
  };

  const itemsStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const headingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    justifyContent : 'space-between'
  };

  const headingStyle = {
    marginLeft: '10px',
  };

  const plusMinusIconStyle = {
    cursor: 'pointer',
    marginLeft: '5px',
  };
  const toggleShopLinks = () => {
    setShowShopLinks(!showShopLinks);
    setShowAboutLinks(false);
    setShowHelpLinks(false);
  };

  const toggleAboutLinks = () => {
    setShowShopLinks(false);
    setShowAboutLinks(!showAboutLinks);
    setShowHelpLinks(false);
  };

  const toggleHelpLinks = () => {
    setShowShopLinks(false);
    setShowAboutLinks(false);
    setShowHelpLinks(!showHelpLinks);
  };

  return (
    <div className="footer-container" style={footerContainerStyle}>
      <div className="footer-column" style={footerColumnStyle}>
      <div style={headingContainerStyle}>
        <h2 style={headingStyle}>Shop</h2>
        <div onClick={toggleShopLinks} style={plusMinusIconStyle}>
          {showShopLinks ? '-' : '+'}
        </div>
        </div>
        {showShopLinks && (
          <ul>
            {shopLinks?.map((link) => (
              <li key={link.url} style={listItemStyle}>
                <a href={link.url} style={itemsStyle}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="footer-column" style={footerColumnStyle}>
      <div style={headingContainerStyle}>
        <h2 style={headingStyle}>About</h2>
        <div onClick={toggleAboutLinks} style={plusMinusIconStyle}>
          {showAboutLinks ? '-' : '+'}
        </div>
        </div>
        {showAboutLinks && (
          <ul>
            {aboutLinks?.map((link) => (
              <li key={link.url} style={listItemStyle}>
                <a href={link.url} style={itemsStyle}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="footer-column" style={footerColumnStyle}>
      <div style={headingContainerStyle}>
        <h2 style={headingStyle}>Help</h2>
        <div onClick={toggleHelpLinks} style={plusMinusIconStyle}>
          {showHelpLinks ? '-' : '+'}
        </div>
        </div>
        {showHelpLinks && (
          <ul>
            {helpLinks?.map((link) => (
              <li key={link.url} style={listItemStyle}>
                <a href={link.url} style={itemsStyle}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

FooterMobile.schema={
  "title": "MobileFooter",
  "type": "object",
  "properties": {
    "shopLinks": {
      "title": "Shop Links",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "title": "Link Text",
            "type": "string"
          },
          "url": {
            "title": "Link URL",
            "type": "string"
          }
        }
      },
      "default": [
        {
          "text": "Our Artists",
          "url": "#"
        },
        {
          "text": "Jewelry",
          "url": "#"
        },
        {
          "text": "Fashion",
          "url": "#"
        },
        {
          "text": "Music",
          "url": "#"
        },
        {
          "text": "Literature",
          "url": "#"
        },
        {
          "text": "For Your Home",
          "url": "#"
        }
      ]
    },
    "aboutLinks": {
      "title": "About Links",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "title": "Link Text",
            "type": "string"
          },
          "url": {
            "title": "Link URL",
            "type": "string"
          }
        }
      },
      "default": [
        {
          "text": "Our Story",
          "url": "#"
        },
        {
          "text": "Press",
          "url": "#"
        },
        {
          "text": "Contact Us",
          "url": "#"
        }
      ]
    },
    "helpLinks": {
      "title": "Help Links",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "title": "Link Text",
            "type": "string"
          },
          "url": {
            "title": "Link URL",
            "type": "string"
          }
        }
      },
      "default": [
        {
          "text": "FAQ",
          "url": "#"
        },
        {
          "text": "Returns & Exchanges",
          "url": "#"
        },
        {
          "text": "Shipping & Delivery",
          "url": "#"
        }
      ]
    }
  }
}


export default FooterMobile;
